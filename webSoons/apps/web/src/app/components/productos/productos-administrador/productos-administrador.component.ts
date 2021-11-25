import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroupsModule } from '@Soons/form-group';
import { Categorias, Marcas, Productos, ProductosCompletoAdministracion, Stock, Tags, TagsProducto, Usuarios } from '@Soons/models';
import { ToastrService } from 'ngx-toastr';
import { CategoriasService } from '../../../services/categorias/categorias.service';
import { GetterSetterService } from '../../../services/getterSetter/getter-setter.service';
import { MarcasService } from '../../../services/marcas/marcas.service';
import { ProductosService } from '../../../services/productos/productos.service';
import { StockService } from '../../../services/stock/stock.service';
import { TagsService } from '../../../services/tags/tags.service';
import { TagsProductosService } from '../../../services/tagsProductos/tags-productos.service';
import { UsuariosService } from '../../../services/usuario/usuarios.service';

@Component({
  selector: 'Soons-productos-administrador',
  templateUrl: './productos-administrador.component.html',
  styleUrls: ['./productos-administrador.component.scss'],
  animations: [
    trigger('detailExpandProductos', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductosAdministradorComponent implements OnInit {

  marcas: Array<Marcas>
  productos: Array<Productos>
  stock: Array<Stock>
  tagsProductos: Array<TagsProducto>
  usuarios: Array<Usuarios>
  tags: Array<Tags>
  categorias: Array<Categorias>

  productosCompletoAdministracion = new Array<ProductosCompletoAdministracion>();

  displayedColumnsProductos: string[] = ['Marca', 'Nombre', 'Talla', 'Precio', 'Cantidad', 'Email', 'Subido'];
  dataSourceProductos: MatTableDataSource<ProductosCompletoAdministracion>;
  expandedElementProductos: Productos | null;

  @ViewChild('MatPaginatorProductos', { static: true }) paginatorProductos: MatPaginator;

  constructor(private formGroups: FormGroupsModule,
    private toastr: ToastrService,
    private marcasService: MarcasService,
    private productosService: ProductosService,
    private stockService: StockService,
    private tagsProductosService: TagsProductosService,
    private tagsService: TagsService,
    private usuariosService: UsuariosService,
    private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.inicializarValores()

    this.obtenerStock();
  }

  inicializarValores() {
    this.marcas = new Array<Marcas>();
    this.productos = new Array<Productos>();
    this.stock = new Array<Stock>();
    this.tagsProductos = new Array<TagsProducto>()
    this.tags = new Array<Tags>()
    this.categorias = new Array<Categorias>()
  }

  obtenerStock() {
    this.stockService.getStock.subscribe(
      res => {
        this.stock = res as Stock[]
        this.obtenerProductos();
      }
    )
  }

  obtenerProductos() {
    this.productosService.getProductos.subscribe(
      res => {
        this.productos = res as Productos[];
        this.obtenerCategorias()
      },
      err => {
        console.log(err)
      }
    )
  }

  obtenerCategorias() {
    this.categoriasService.getCategorias.subscribe(
      res => {
        this.categorias = res as Categorias[];
        this.obtenerMarcas()
      }
    )
  }

  obtenerMarcas() {
    this.marcasService.getMarcas.subscribe(
      res => {
        this.marcas = res as Marcas[];
        this.obtenerUsuarios()
      }
    )
  }

  obtenerUsuarios() {
    this.usuariosService.getUsuarios.subscribe(
      res => {
        this.usuarios = res as Usuarios[];
        this.obtenerTagsProducto()
      }
    )
  }

  obtenerTagsProducto() {
    this.tagsProductosService.getTagsProductos.subscribe(
      res => {
        this.tagsProductos = res as TagsProducto[]
        this.obtenerTags()
      }
    )
  }

  obtenerTags() {
    this.tagsService.getTags.subscribe(
      res => {
        this.tags = res as Tags[]
        const ProductosCompletoAdministracion: Array<ProductosCompletoAdministracion> = this.stock.map(x => {

          const producto = this.productos.find(y => y.id === x.productoId)

          const productoCompleto: ProductosCompletoAdministracion = {
            marca: this.marcas.find(y => y.id === producto.marca),
            producto: producto,
            stockProducto: x,
            tags: this.tags.filter(z => this.tagsProductos.filter(y => y.productoId === x.id).map(y => y.tagId).includes(z.id)),
            usuario: this.usuarios.find(y => y.id === x.owner),
            categorias: this.categorias.find(y => y.id === producto.categoria)
          }
          return productoCompleto;
        })
        this.productosCompletoAdministracion = ProductosCompletoAdministracion;
        this.calcularDatosTabla(ProductosCompletoAdministracion)
      }
    )
  }

  calcularDatosTabla(ProductosCompletoAdministracion: Array<ProductosCompletoAdministracion>) {

    this.dataSourceProductos = new MatTableDataSource(ProductosCompletoAdministracion.sort((a, b) => new Date(b.stockProducto.creado).getTime() - new Date(a.stockProducto.creado).getTime()))
    this.dataSourceProductos.paginator = this.paginatorProductos
    if (this.dataSourceProductos.paginator) {
      this.dataSourceProductos.paginator.firstPage();
    }
  }

  calcularFiltro() {
    const filtroMultiple = String(this.buscador_value).toLowerCase().trim().split(" ");
    console.log(filtroMultiple)
    if (String(this.buscador_value) !== "" && this.buscador_value !== null && this.buscador_value !== undefined) {
      const productosCompleto = new Array<ProductosCompletoAdministracion>()
      console.log(this.productosCompletoAdministracion)
      this.productosCompletoAdministracion.forEach(o => {
        let filtrosCumplidos = 0
        filtroMultiple.forEach(filtro => {
          let palabraFiltrada: boolean = false;
          Object.keys(o).forEach(x => {
            if (palabraFiltrada === false) {
              if (x === "tags") {
                o[x].forEach(z => {
                  Object.keys(z).forEach(y => {
                    if (String(z[y]).toLowerCase().includes(filtro.toLowerCase()) && palabraFiltrada === false) {
                      palabraFiltrada = true;
                      filtrosCumplidos = filtrosCumplidos + 1;
                    }
                  })
                })
              } else {
                Object.keys(o[x]).forEach(y => {
                  if (String(o[x][y]).toLowerCase().includes(filtro.toLowerCase()) && palabraFiltrada === false) {
                    palabraFiltrada = true;
                    filtrosCumplidos = filtrosCumplidos + 1;
                  }
                })
              }
            }
          })
        })
        if (filtrosCumplidos === filtroMultiple.length) {
          productosCompleto.push(o)
        }
      });
      this.calcularDatosTabla(productosCompleto)
    } else {
      this.calcularDatosTabla(this.productosCompletoAdministracion)
    }
  }

  botonAnulado() {
    this.toastr.info("Estos botones estan deshabilitados en el modo administración")
  }

  get buscador() { return this.formularioBusqueda.get('buscador') }

  get buscador_value() { return this.formularioBusqueda.value.buscador }

  get formularioBusqueda() { return this.formGroups.formularioBusqueda }
}

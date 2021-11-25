import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroupsModule } from '@Soons/form-group';
import { Categorias, Marcas, Productos, ProductosCompleto, Stock, Tags, TagsProducto } from '@Soons/models';
import { CategoriasService } from '../../../services/categorias/categorias.service';
import { GetterSetterService } from '../../../services/getterSetter/getter-setter.service';
import { MarcasService } from '../../../services/marcas/marcas.service';
import { ProductosService } from '../../../services/productos/productos.service';
import { StockService } from '../../../services/stock/stock.service';
import { TagsService } from '../../../services/tags/tags.service';
import { TagsProductosService } from '../../../services/tagsProductos/tags-productos.service';

@Component({
  selector: 'Soons-productos-cliente',
  templateUrl: './productos-cliente.component.html',
  styleUrls: ['./productos-cliente.component.scss']
})
export class ProductosClienteComponent implements OnInit {

  marcas: Array<Marcas>
  productos: Array<Productos>
  stock: Array<Stock>
  tagsProductos: Array<TagsProducto>
  tags: Array<Tags>
  categorias: Array<Categorias>

  productosCompleto = new Array<ProductosCompleto>();
  productosCompletoMostrar = new Array<ProductosCompleto>();

  constructor(private formGroups: FormGroupsModule,
    private marcasService: MarcasService,
    private productosService: ProductosService,
    private stockService: StockService,
    private tagsProductosService: TagsProductosService,
    private tagsService: TagsService,
    private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.inicializarValores()

    this.obtenerStock()
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
      },
      err => {
        console.log(err)
      }
    )
  }

  obtenerMarcas() {
    this.marcasService.getMarcas.subscribe(
      res => {
        this.marcas = res as Marcas[];
        this.obtenerTagsProducto();
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
        const productosCompletos: Array<ProductosCompleto> = this.productos.map(x => {
          const productoCompleto: ProductosCompleto = {
            marca: this.marcas.find(y => y.id === x.marca),
            producto: x,
            stockProducto: this.stock.filter(y => y.productoId === x.id),
            tags: this.tags.filter(z => this.tagsProductos.filter(y => y.productoId === x.id).map(y => y.tagId).includes(z.id)),
            categoria: this.categorias.find(y => y.id === x.categoria)
          }
          return productoCompleto;
        })
        this.productosCompleto = productosCompletos;
        this.calcularDatosParaMostrar(productosCompletos)
      }
    )
  }

  calcularDatosParaMostrar(productosCompleto: Array<ProductosCompleto>) {
    this.productosCompletoMostrar = productosCompleto.sort((a, b) => new Date(Math.max(...b.stockProducto.map(y => new Date(y.creado).getTime()))).getTime() - new Date(Math.max(...a.stockProducto.map(y => new Date(y.creado).getTime()))).getTime())
  }

  calcularFiltro() {
    const filtroMultiple = String(this.buscador_value).toLowerCase().trim().split(" ");
    if (String(this.buscador_value) !== "" && this.buscador_value !== null && this.buscador_value !== undefined) {
      const productosCompleto = new Array<ProductosCompleto>()
      this.productosCompleto.forEach(o => {
        let filtrosCumplidos = 0
        filtroMultiple.forEach(filtro => {
          let palabraFiltrada: boolean = false;
          Object.keys(o).forEach(x => {
            if (palabraFiltrada === false) {
              if (x === "stockProducto" || x === "tags") {
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
      this.calcularDatosParaMostrar(productosCompleto)
    } else {
      this.calcularDatosParaMostrar(this.productosCompleto)
    }
  }

  mediaProducto(productoCompleto: ProductosCompleto) {
    if (productoCompleto.stockProducto.length !== 0) {
      return "~" + Math.trunc(productoCompleto.stockProducto.map(x => x.precio * x.cantidad).reduce((pre, curr) => curr = curr + pre) / productoCompleto.stockProducto.map(x => x.cantidad).reduce((pre, curr) => curr = curr + pre)) + " €"
    } else {
      return ""
    }
  }

  get buscador() { return this.formularioBusqueda.get('buscador') }

  get buscador_value() { return this.formularioBusqueda.value.buscador }

  get formularioBusqueda() { return this.formGroups.formularioBusqueda }
}

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Archivos, Marcas } from '@Soons/models';
import { ToastrService } from 'ngx-toastr';
import { ArchivosService } from '../../services/archivos/archivos.service';
import { BottomsService } from '../../services/bottoms/bottoms.service';
import { MarcasService } from '../../services/marcas/marcas.service';

@Component({
  selector: 'Soons-configuracion-marcas',
  templateUrl: './configuracion-marcas.component.html',
  styleUrls: ['./configuracion-marcas.component.scss'],
  animations: [
    trigger('detailExpandMarcas', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class ConfiguracionMarcasComponent implements OnInit {

  public marcas = new Array<Marcas>()
  public archivosMarcas = new Array<Archivos>()

  displayedColumnsMarcas: string[] = ['nombre'];
  dataSourceMarcas: MatTableDataSource<Marcas>;
  @ViewChild('MatPaginatorMarcas', { static: true }) paginatorMarcas: MatPaginator;

  expandedElementMarcas: Marcas | null;

  constructor(private marcasService: MarcasService, private bottom: BottomsService, private archivosService: ArchivosService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerMarcas()
  }

  obtenerMarcas() {
    this.marcasService.marcas.subscribe(
      res => {
        this.marcas = res as Marcas[];
        this.dataSourceMarcas = new MatTableDataSource(this.marcas)
        this.dataSourceMarcas.paginator = this.paginatorMarcas
        if (this.dataSourceMarcas.paginator) {
          this.dataSourceMarcas.paginator.firstPage();
        }
        this.archivosService.archivos.subscribe(
          res => {
            this.archivosMarcas.push(...res.filter(x => this.marcas.map(y => y.id).includes(x.id)))
          },
          err => {
            console.log(err)
            this.toastr.error("Error al obtener los archivos de la base de datos", "Error en BBDD")
          }
        )
      },
      err => {
        console.log("Error al obtener las empresas")
      }
    )
  }

  crearMarca() {
    this.bottom.abrirCrearMarca().afterDismissed().subscribe(
      () => {
        this.obtenerMarcas()
      }
    )
  } 

  actualizarMarca(id: number) {

  }

  borrarMarca(id: number) {

  }

  nombreArchivo(id: number) {
    return this.archivosMarcas.find(x => x.id === id).nombre
  }
}

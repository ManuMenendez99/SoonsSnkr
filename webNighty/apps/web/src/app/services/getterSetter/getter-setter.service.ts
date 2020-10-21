import { Injectable } from '@angular/core';
import { DatosService } from '../datos/datos.service';
import { Observable, of } from 'rxjs';
import { Amigos, Archivos, ArchivosCategoria, ArchivosEmpresa, ArchivosEstablecimiento, ArchivosEvento, ArchivosMarca, ArchivosProducto, ArchivosPromocion, Caracteristicas, CaracteristicasDeProductos, CaracteristicasEvento, CaracteristicasProducto, Categorias, Descripciones, DescripcionesEvento, DiasMes, DiasSemana, Direcciones, DireccionesPersona, Emails, EmailsPersona, Empresas, Establecimientos, Eventos, EventosEstablecimientos, FaxsPersona, Fechas, Grupos, GruposConsumicion, HorarioDiasMesEstablecimientos, HorarioDiasMesEventos, HorarioDiasMesPromociones, HorarioDiasSemanaEstablecimientos, HorarioDiasSemanaEventos, HorarioDiasSemanaPromociones, HorarioFechasEstablecimientos, HorarioFechasEventos, HorarioFechasPromociones, HorarioHorasEstablecimientos, HorarioHorasEventos, HorarioHorasPromociones, HorarioMesesEstablecimientos, HorarioMesesEventos, HorarioMesesPromociones, Horas, Invitados, LineasTicket, Marcas, MesasEstablecimiento, Meses, MiembrosGrupos, MiembrosGruposConsumicion, Paises, Personas, PersonasContactoEmpresa, PersonasContactoEstablecimiento, PersonasContactoMarcas, PersonasEstablecimientos, Productos, Promociones, PromocionesProductos, PublicidadEmpresa, PublicidadEstablecimiento, PublicidadEvento, PublicidadProducto, PublicidadPromocion, Puestos, Requisitos, RequisitosEvento, Telefonos, TelefonosPersona, Tickets, TiposCategorias, TiposEstablecimientos, TiposEventos, TiposMesas, TiposProductos, TiposPromociones, Usuarios, Ventajas, VentajasCategorias, UsuariosRegistrandose, MotivosInhabilitacion, Chats, Mensajes, MensajesEnviar } from '@nighty/models';
import { APIService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { SqlInsert, SqlUpdate, SqlDelete, SqlProcedure } from '@nighty/interfaces-sql';
import { SqlCampoValor } from "@nighty/interfaces-sql";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GetterSetterService {

  API_URI = "http://localhost:3333/api/"

  constructor(private http: HttpClient, private datos: DatosService, private api: APIService, private toastr: ToastrService) { }

  public get Amigos(): Observable<Amigos[]> {
    if (this.datos.Amigos.length !== 0 && !this.datos.reiniciarAmigos && this.datos.AmigosValores.valor !== 0) {
      this.datos.AmigosValores.valor = this.datos.AmigosValores.valor - 1
      return of(this.datos.Amigos)
    } else {
      if (this.datos.reiniciarAmigos === true) {
        this.datos.reiniciarAmigos = false
      }
      const peticion = this.http.get<Amigos[]>(`${this.API_URI}all/Amigos`)
      peticion.subscribe(
        res => {
          this.datos.Amigos = new Array<Amigos>()
          this.datos.Amigos = res as Amigos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setAmigos(amigos: Amigos): void {
    this.realizarOperacion("Amigos", amigos).subscribe(
      () => {
        if (amigos.id != null) {
          const i = this.datos.Amigos.indexOf(amigos)
          this.datos.Amigos[i] = amigos
        } else {
          this.http.get<Amigos[]>(`${this.API_URI}all/Amigos`).subscribe(
            res => {
              this.datos.Amigos = new Array<Amigos>()
              this.datos.Amigos = res as Amigos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteAmigos(amigos: Amigos) {
    this.realizarOperacion("Amigos", amigos, true).subscribe(
      () => {
        const i = this.datos.Amigos.indexOf(amigos)
        this.datos.Amigos.splice(i, 1)
      }
    )
  }

  public get Archivos(): Observable<Archivos[]> {
    if (this.datos.Archivos.length !== 0. && !this.datos.reiniciarArchivos && this.datos.ArchivosValores.valor !== 0) {
      this.datos.ArchivosValores.valor = this.datos.ArchivosValores.valor - 1
      return of(this.datos.Archivos)
    } else {
      if (this.datos.reiniciarArchivos === true) {
        this.datos.reiniciarArchivos = false
      }
      const peticion = this.http.get<Archivos[]>(`${this.API_URI}all/Archivos`)
      peticion.subscribe(
        res => {
          this.datos.Archivos = new Array<Archivos>()
          this.datos.Archivos = res as Archivos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setArchivos(archivos: Archivos): void {
    this.realizarOperacion("Archivos", archivos).subscribe(
      () => {
        if (archivos.id != null) {
          const i = this.datos.Archivos.indexOf(archivos)
          this.datos.Archivos[i] = archivos
        } else {
          this.http.get<Archivos[]>(`${this.API_URI}all/Archivos`).subscribe(
            res => {
              this.datos.Archivos = new Array<Archivos>()
              this.datos.Archivos = res as Archivos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteArchivos(archivos: Archivos) {
    this.realizarOperacion("Archivos", archivos, true).subscribe(
      () => {
        const i = this.datos.Archivos.indexOf(archivos)
        this.datos.Archivos.splice(i, 1)
      }
    )
  }

  public get ArchivosCategoria(): Observable<ArchivosCategoria[]> {
    if (this.datos.ArchivosCategoria.length !== 0 && !this.datos.reiniciarArchivosCategoria && this.datos.ArchivosCategoriaValores.valor !== 0) {
      this.datos.ArchivosCategoriaValores.valor = this.datos.ArchivosCategoriaValores.valor - 1
      return of(this.datos.ArchivosCategoria)
    } else {
      if (this.datos.reiniciarArchivosCategoria === true) {
        this.datos.reiniciarArchivosCategoria = false
      }
      const peticion = this.http.get<ArchivosCategoria[]>(`${this.API_URI}all/ArchivosCategoria`)
      peticion.subscribe(
        res => {
          this.datos.ArchivosCategoria = new Array<ArchivosCategoria>()
          this.datos.ArchivosCategoria = res as ArchivosCategoria[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setArchivosCategoria(archivoscategoria: ArchivosCategoria): void {
    this.realizarOperacion("ArchivosCategoria", archivoscategoria).subscribe(
      () => {
        if (archivoscategoria.id != null) {
          const i = this.datos.ArchivosCategoria.indexOf(archivoscategoria)
          this.datos.ArchivosCategoria[i] = archivoscategoria
        } else {
          this.http.get<ArchivosCategoria[]>(`${this.API_URI}all/ArchivosCategoria`).subscribe(
            res => {
              this.datos.ArchivosCategoria = new Array<ArchivosCategoria>()
              this.datos.ArchivosCategoria = res as ArchivosCategoria[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteArchivosCategoria(archivoscategoria: ArchivosCategoria) {
    this.realizarOperacion("ArchivosCategoria", archivoscategoria, true).subscribe(
      () => {
        const i = this.datos.ArchivosCategoria.indexOf(archivoscategoria)
        this.datos.ArchivosCategoria.splice(i, 1)
      }
    )
  }

  public get ArchivosEmpresa(): Observable<ArchivosEmpresa[]> {
    if (this.datos.ArchivosEmpresa.length !== 0 && !this.datos.reiniciarArchivosEmpresa && this.datos.ArchivosEmpresaValores.valor !== 0) {
      this.datos.ArchivosEmpresaValores.valor = this.datos.ArchivosEmpresaValores.valor - 1
      return of(this.datos.ArchivosEmpresa)
    } else {
      if (this.datos.reiniciarArchivosEmpresa === true) {
        this.datos.reiniciarArchivosEmpresa = false
      }
      const peticion = this.http.get<ArchivosEmpresa[]>(`${this.API_URI}all/ArchivosEmpresa`)
      peticion.subscribe(
        res => {
          this.datos.ArchivosEmpresa = new Array<ArchivosEmpresa>()
          this.datos.ArchivosEmpresa = res as ArchivosEmpresa[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setArchivosEmpresa(archivosempresa: ArchivosEmpresa): void {
    this.realizarOperacion("ArchivosEmpresa", archivosempresa).subscribe(
      () => {
        if (archivosempresa.id != null) {
          const i = this.datos.ArchivosEmpresa.indexOf(archivosempresa)
          this.datos.ArchivosEmpresa[i] = archivosempresa
        } else {
          this.http.get<ArchivosEmpresa[]>(`${this.API_URI}all/ArchivosEmpresa`).subscribe(
            res => {
              this.datos.ArchivosEmpresa = new Array<ArchivosEmpresa>()
              this.datos.ArchivosEmpresa = res as ArchivosEmpresa[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteArchivosEmpresa(archivosempresa: ArchivosEmpresa) {
    this.realizarOperacion("ArchivosEmpresa", archivosempresa, true).subscribe(
      () => {
        const i = this.datos.ArchivosEmpresa.indexOf(archivosempresa)
        this.datos.ArchivosEmpresa.splice(i, 1)
      }
    )
  }

  public get ArchivosEstablecimiento(): Observable<ArchivosEstablecimiento[]> {
    if (this.datos.ArchivosEstablecimiento.length !== 0 && !this.datos.reiniciarArchivosEstablecimiento && this.datos.ArchivosEstablecimientoValores.valor !== 0) {
      this.datos.ArchivosEstablecimientoValores.valor = this.datos.ArchivosEstablecimientoValores.valor - 1
      return of(this.datos.ArchivosEstablecimiento)
    } else {
      if (this.datos.reiniciarArchivosEstablecimiento === true) {
        this.datos.reiniciarArchivosEstablecimiento = false
      }
      const peticion = this.http.get<ArchivosEstablecimiento[]>(`${this.API_URI}all/ArchivosEstablecimiento`)
      peticion.subscribe(
        res => {
          this.datos.ArchivosEstablecimiento = new Array<ArchivosEstablecimiento>()
          this.datos.ArchivosEstablecimiento = res as ArchivosEstablecimiento[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setArchivosEstablecimiento(archivosestablecimiento: ArchivosEstablecimiento): void {
    this.realizarOperacion("ArchivosEstablecimiento", archivosestablecimiento).subscribe(
      () => {
        if (archivosestablecimiento.id != null) {
          const i = this.datos.ArchivosEstablecimiento.indexOf(archivosestablecimiento)
          this.datos.ArchivosEstablecimiento[i] = archivosestablecimiento
        } else {
          this.http.get<ArchivosEstablecimiento[]>(`${this.API_URI}all/ArchivosEstablecimiento`).subscribe(
            res => {
              this.datos.ArchivosEstablecimiento = new Array<ArchivosEstablecimiento>()
              this.datos.ArchivosEstablecimiento = res as ArchivosEstablecimiento[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteArchivosEstablecimiento(archivosestablecimiento: ArchivosEstablecimiento) {
    this.realizarOperacion("ArchivosEstablecimiento", archivosestablecimiento, true).subscribe(
      () => {
        const i = this.datos.ArchivosEstablecimiento.indexOf(archivosestablecimiento)
        this.datos.ArchivosEstablecimiento.splice(i, 1)
      }
    )
  }

  public get ArchivosEvento(): Observable<ArchivosEvento[]> {
    if (this.datos.ArchivosEvento.length !== 0 && !this.datos.reiniciarArchivosEvento && this.datos.ArchivosEventoValores.valor !== 0) {
      this.datos.ArchivosEventoValores.valor = this.datos.ArchivosEventoValores.valor - 1
      return of(this.datos.ArchivosEvento)
    } else {
      if (this.datos.reiniciarArchivosEvento === true) {
        this.datos.reiniciarArchivosEvento = false
      }
      const peticion = this.http.get<ArchivosEvento[]>(`${this.API_URI}all/ArchivosEvento`)
      peticion.subscribe(
        res => {
          this.datos.ArchivosEvento = new Array<ArchivosEvento>()
          this.datos.ArchivosEvento = res as ArchivosEvento[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setArchivosEvento(archivosevento: ArchivosEvento): void {
    this.realizarOperacion("ArchivosEvento", archivosevento).subscribe(
      () => {
        if (archivosevento.id != null) {
          const i = this.datos.ArchivosEvento.indexOf(archivosevento)
          this.datos.ArchivosEvento[i] = archivosevento
        } else {
          this.http.get<ArchivosEvento[]>(`${this.API_URI}all/ArchivosEvento`).subscribe(
            res => {
              this.datos.ArchivosEvento = new Array<ArchivosEvento>()
              this.datos.ArchivosEvento = res as ArchivosEvento[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteArchivosEvento(archivosevento: ArchivosEvento) {
    this.realizarOperacion("ArchivosEvento", archivosevento, true).subscribe(
      () => {
        const i = this.datos.ArchivosEvento.indexOf(archivosevento)
        this.datos.ArchivosEvento.splice(i, 1)
      }
    )
  }

  public get ArchivosMarca(): Observable<ArchivosMarca[]> {
    if (this.datos.ArchivosMarca.length !== 0 && !this.datos.reiniciarArchivosMarca && this.datos.ArchivosMarcaValores.valor !== 0) {
      this.datos.ArchivosMarcaValores.valor = this.datos.ArchivosMarcaValores.valor - 1
      return of(this.datos.ArchivosMarca)
    } else {
      if (this.datos.reiniciarArchivosMarca === true) {
        this.datos.reiniciarArchivosMarca = false
      }
      const peticion = this.http.get<ArchivosMarca[]>(`${this.API_URI}all/ArchivosMarca`)
      peticion.subscribe(
        res => {
          this.datos.ArchivosMarca = new Array<ArchivosMarca>()
          this.datos.ArchivosMarca = res as ArchivosMarca[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setArchivosMarca(archivosmarca: ArchivosMarca): void {
    this.realizarOperacion("ArchivosMarca", archivosmarca).subscribe(
      () => {
        if (archivosmarca.id != null) {
          const i = this.datos.ArchivosMarca.indexOf(archivosmarca)
          this.datos.ArchivosMarca[i] = archivosmarca
        } else {
          this.http.get<ArchivosMarca[]>(`${this.API_URI}all/ArchivosMarca`).subscribe(
            res => {
              this.datos.ArchivosMarca = new Array<ArchivosMarca>()
              this.datos.ArchivosMarca = res as ArchivosMarca[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteArchivosMarca(archivosmarca: ArchivosMarca) {
    this.realizarOperacion("ArchivosMarca", archivosmarca, true).subscribe(
      () => {
        const i = this.datos.ArchivosMarca.indexOf(archivosmarca)
        this.datos.ArchivosMarca.splice(i, 1)
      }
    )
  }

  public get ArchivosProducto(): Observable<ArchivosProducto[]> {
    if (this.datos.ArchivosProducto.length !== 0 && !this.datos.reiniciarArchivosProducto && this.datos.ArchivosProductoValores.valor !== 0) {
      this.datos.ArchivosProductoValores.valor = this.datos.ArchivosProductoValores.valor - 1
      return of(this.datos.ArchivosProducto)
    } else {
      if (this.datos.reiniciarArchivosProducto === true) {
        this.datos.reiniciarArchivosProducto = false
      }
      const peticion = this.http.get<ArchivosProducto[]>(`${this.API_URI}all/ArchivosProducto`)
      peticion.subscribe(
        res => {
          this.datos.ArchivosProducto = new Array<ArchivosProducto>()
          this.datos.ArchivosProducto = res as ArchivosProducto[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setArchivosProducto(archivosproducto: ArchivosProducto): void {
    this.realizarOperacion("ArchivosProducto", archivosproducto).subscribe(
      () => {
        if (archivosproducto.id != null) {
          const i = this.datos.ArchivosProducto.indexOf(archivosproducto)
          this.datos.ArchivosProducto[i] = archivosproducto
        } else {
          this.http.get<ArchivosProducto[]>(`${this.API_URI}all/ArchivosProducto`).subscribe(
            res => {
              this.datos.ArchivosProducto = new Array<ArchivosProducto>()
              this.datos.ArchivosProducto = res as ArchivosProducto[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteArchivosProducto(archivosproducto: ArchivosProducto) {
    this.realizarOperacion("ArchivosProducto", archivosproducto, true).subscribe(
      () => {
        const i = this.datos.ArchivosProducto.indexOf(archivosproducto)
        this.datos.ArchivosProducto.splice(i, 1)
      }
    )
  }

  public get ArchivosPromocion(): Observable<ArchivosPromocion[]> {
    if (this.datos.ArchivosPromocion.length !== 0 && !this.datos.reiniciarArchivosPromocion && this.datos.ArchivosPromocionValores.valor !== 0) {
      this.datos.ArchivosPromocionValores.valor = this.datos.ArchivosPromocionValores.valor - 1
      return of(this.datos.ArchivosPromocion)
    } else {
      if (this.datos.reiniciarArchivosPromocion === true) {
        this.datos.reiniciarArchivosPromocion = false
      }
      const peticion = this.http.get<ArchivosPromocion[]>(`${this.API_URI}all/ArchivosPromocion`)
      peticion.subscribe(
        res => {
          this.datos.ArchivosPromocion = new Array<ArchivosPromocion>()
          this.datos.ArchivosPromocion = res as ArchivosPromocion[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setArchivosPromocion(archivospromocion: ArchivosPromocion): void {
    this.realizarOperacion("ArchivosPromocion", archivospromocion).subscribe(
      () => {
        if (archivospromocion.id != null) {
          const i = this.datos.ArchivosPromocion.indexOf(archivospromocion)
          this.datos.ArchivosPromocion[i] = archivospromocion
        } else {
          this.http.get<ArchivosPromocion[]>(`${this.API_URI}all/ArchivosPromocion`).subscribe(
            res => {
              this.datos.ArchivosPromocion = new Array<ArchivosPromocion>()
              this.datos.ArchivosPromocion = res as ArchivosPromocion[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteArchivosPromocion(archivospromocion: ArchivosPromocion) {
    this.realizarOperacion("ArchivosPromocion", archivospromocion, true).subscribe(
      () => {
        const i = this.datos.ArchivosPromocion.indexOf(archivospromocion)
        this.datos.ArchivosPromocion.splice(i, 1)
      }
    )
  }

  public get Caracteristicas(): Observable<Caracteristicas[]> {
    if (this.datos.Caracteristicas.length !== 0 && !this.datos.reiniciarCaracteristicas && this.datos.CaracteristicasValores.valor !== 0) {
      this.datos.CaracteristicasValores.valor = this.datos.CaracteristicasValores.valor - 1
      return of(this.datos.Caracteristicas)
    } else {
      if (this.datos.reiniciarCaracteristicas === true) {
        this.datos.reiniciarCaracteristicas = false
      }
      const peticion = this.http.get<Caracteristicas[]>(`${this.API_URI}all/Caracteristicas`)
      peticion.subscribe(
        res => {
          this.datos.Caracteristicas = new Array<Caracteristicas>()
          this.datos.Caracteristicas = res as Caracteristicas[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setCaracteristicas(caracteristicas: Caracteristicas): void {
    this.realizarOperacion("Caracteristicas", caracteristicas).subscribe(
      () => {
        if (caracteristicas.id != null) {
          const i = this.datos.Caracteristicas.indexOf(caracteristicas)
          this.datos.Caracteristicas[i] = caracteristicas
        } else {
          this.http.get<Caracteristicas[]>(`${this.API_URI}all/Caracteristicas`).subscribe(
            res => {
              this.datos.Caracteristicas = new Array<Caracteristicas>()
              this.datos.Caracteristicas = res as Caracteristicas[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteCaracteristicas(caracteristicas: Caracteristicas) {
    this.realizarOperacion("Caracteristicas", caracteristicas, true).subscribe(
      () => {
        const i = this.datos.Caracteristicas.indexOf(caracteristicas)
        this.datos.Caracteristicas.splice(i, 1)
      }
    )
  }

  public get CaracteristicasDeProductos(): Observable<CaracteristicasDeProductos[]> {
    if (this.datos.CaracteristicasDeProductos.length !== 0 && !this.datos.reiniciarCaracteristicasDeProductos && this.datos.CaracteristicasDeProductosValores.valor !== 0) {
      this.datos.CaracteristicasDeProductosValores.valor = this.datos.CaracteristicasDeProductosValores.valor - 1
      return of(this.datos.CaracteristicasDeProductos)
    } else {
      if (this.datos.reiniciarCaracteristicasDeProductos === true) {
        this.datos.reiniciarCaracteristicasDeProductos = false
      }
      const peticion = this.http.get<CaracteristicasDeProductos[]>(`${this.API_URI}all/CaracteristicasDeProductos`)
      peticion.subscribe(
        res => {
          this.datos.CaracteristicasDeProductos = new Array<CaracteristicasDeProductos>()
          this.datos.CaracteristicasDeProductos = res as CaracteristicasDeProductos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setCaracteristicasDeProductos(caracteristicasdeproductos: CaracteristicasDeProductos): void {
    this.realizarOperacion("CaracteristicasDeProductos", caracteristicasdeproductos).subscribe(
      () => {
        if (caracteristicasdeproductos.id != null) {
          const i = this.datos.CaracteristicasDeProductos.indexOf(caracteristicasdeproductos)
          this.datos.CaracteristicasDeProductos[i] = caracteristicasdeproductos
        } else {
          this.http.get<CaracteristicasDeProductos[]>(`${this.API_URI}all/CaracteristicasDeProductos`).subscribe(
            res => {
              this.datos.CaracteristicasDeProductos = new Array<CaracteristicasDeProductos>()
              this.datos.CaracteristicasDeProductos = res as CaracteristicasDeProductos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteCaracteristicasDeProductos(caracteristicasdeproductos: CaracteristicasDeProductos) {
    this.realizarOperacion("CaracteristicasDeProductos", caracteristicasdeproductos, true).subscribe(
      () => {
        const i = this.datos.CaracteristicasDeProductos.indexOf(caracteristicasdeproductos)
        this.datos.CaracteristicasDeProductos.splice(i, 1)
      }
    )
  }

  public get CaracteristicasEvento(): Observable<CaracteristicasEvento[]> {
    if (this.datos.CaracteristicasEvento.length !== 0 && !this.datos.reiniciarCaracteristicasEvento && this.datos.CaracteristicasEventoValores.valor !== 0) {
      this.datos.CaracteristicasEventoValores.valor = this.datos.CaracteristicasEventoValores.valor - 1
      return of(this.datos.CaracteristicasEvento)
    } else {
      if (this.datos.reiniciarCaracteristicasEvento === true) {
        this.datos.reiniciarCaracteristicasEvento = false
      }
      const peticion = this.http.get<CaracteristicasEvento[]>(`${this.API_URI}all/CaracteristicasEvento`)
      peticion.subscribe(
        res => {
          this.datos.CaracteristicasEvento = new Array<CaracteristicasEvento>()
          this.datos.CaracteristicasEvento = res as CaracteristicasEvento[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setCaracteristicasEvento(caracteristicasevento: CaracteristicasEvento): void {
    this.realizarOperacion("CaracteristicasEvento", caracteristicasevento).subscribe(
      () => {
        if (caracteristicasevento.id != null) {
          const i = this.datos.CaracteristicasEvento.indexOf(caracteristicasevento)
          this.datos.CaracteristicasEvento[i] = caracteristicasevento
        } else {
          this.http.get<CaracteristicasEvento[]>(`${this.API_URI}all/CaracteristicasEvento`).subscribe(
            res => {
              this.datos.CaracteristicasEvento = new Array<CaracteristicasEvento>()
              this.datos.CaracteristicasEvento = res as CaracteristicasEvento[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteCaracteristicasEvento(caracteristicasevento: CaracteristicasEvento) {
    this.realizarOperacion("CaracteristicasEvento", caracteristicasevento, true).subscribe(
      () => {
        const i = this.datos.CaracteristicasEvento.indexOf(caracteristicasevento)
        this.datos.CaracteristicasEvento.splice(i, 1)
      }
    )
  }

  public get CaracteristicasProducto(): Observable<CaracteristicasProducto[]> {
    if (this.datos.CaracteristicasProducto.length !== 0 && !this.datos.reiniciarCaracteristicasProducto && this.datos.CaracteristicasProductoValores.valor !== 0) {
      this.datos.CaracteristicasProductoValores.valor = this.datos.CaracteristicasProductoValores.valor - 1
      return of(this.datos.CaracteristicasProducto)
    } else {
      if (this.datos.reiniciarCaracteristicasProducto === true) {
        this.datos.reiniciarCaracteristicasProducto = false
      }
      const peticion = this.http.get<CaracteristicasProducto[]>(`${this.API_URI}all/CaracteristicasProducto`)
      peticion.subscribe(
        res => {
          this.datos.CaracteristicasProducto = new Array<CaracteristicasProducto>()
          this.datos.CaracteristicasProducto = res as CaracteristicasProducto[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setCaracteristicasProducto(caracteristicasproducto: CaracteristicasProducto): void {
    this.realizarOperacion("CaracteristicasProducto", caracteristicasproducto).subscribe(
      () => {
        if (caracteristicasproducto.id != null) {
          const i = this.datos.CaracteristicasProducto.indexOf(caracteristicasproducto)
          this.datos.CaracteristicasProducto[i] = caracteristicasproducto
        } else {
          this.http.get<CaracteristicasProducto[]>(`${this.API_URI}all/CaracteristicasProducto`).subscribe(
            res => {
              this.datos.CaracteristicasProducto = new Array<CaracteristicasProducto>()
              this.datos.CaracteristicasProducto = res as CaracteristicasProducto[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteCaracteristicasProducto(caracteristicasproducto: CaracteristicasProducto) {
    this.realizarOperacion("CaracteristicasProducto", caracteristicasproducto, true).subscribe(
      () => {
        const i = this.datos.CaracteristicasProducto.indexOf(caracteristicasproducto)
        this.datos.CaracteristicasProducto.splice(i, 1)
      }
    )
  }

  public get Categorias(): Observable<Categorias[]> {
    if (this.datos.Categorias.length !== 0 && !this.datos.reiniciarCategorias && this.datos.CategoriasValores.valor !== 0) {
      this.datos.CategoriasValores.valor = this.datos.CategoriasValores.valor - 1
      return of(this.datos.Categorias)
    } else {
      if (this.datos.reiniciarCategorias === true) {
        this.datos.reiniciarCategorias = false
      }
      const peticion = this.http.get<Categorias[]>(`${this.API_URI}all/Categorias`)
      peticion.subscribe(
        res => {
          this.datos.Categorias = new Array<Categorias>()
          this.datos.Categorias = res as Categorias[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setCategorias(categorias: Categorias): void {
    this.realizarOperacion("Categorias", categorias).subscribe(
      () => {
        if (categorias.id != null) {
          const i = this.datos.Categorias.indexOf(categorias)
          this.datos.Categorias[i] = categorias
        } else {
          this.http.get<Categorias[]>(`${this.API_URI}all/Categorias`).subscribe(
            res => {
              this.datos.Categorias = new Array<Categorias>()
              this.datos.Categorias = res as Categorias[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteCategorias(categorias: Categorias) {
    this.realizarOperacion("Categorias", categorias, true).subscribe(
      () => {
        const i = this.datos.Categorias.indexOf(categorias)
        this.datos.Categorias.splice(i, 1)
      }
    )
  }

  public get Chats(): Observable<Chats[]> {
    if (this.datos.Chats.length !== 0 && !this.datos.reiniciarChats && this.datos.ChatsValores.valor !== 0) {
      this.datos.ChatsValores.valor = this.datos.ChatsValores.valor - 1
      return of(this.datos.Chats)
    } else {
      if (this.datos.reiniciarChats === true) {
        this.datos.reiniciarChats = false
      }
      const peticion = this.http.get<Chats[]>(`${this.API_URI}all/Chats`)
      peticion.subscribe(
        res => {
          this.datos.Chats = new Array<Chats>()
          this.datos.Chats = res as Chats[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setChats(chats: Chats): void {
    this.realizarOperacion("Chats", chats).subscribe(
      () => {
        if (chats.id != null) {
          const i = this.datos.Chats.indexOf(chats)
          this.datos.Chats[i] = chats
        } else {
          this.http.get<Chats[]>(`${this.API_URI}all/Chats`).subscribe(
            res => {
              this.datos.Chats = new Array<Chats>()
              this.datos.Chats = res as Chats[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteChats(chats: Chats) {
    this.realizarOperacion("Chats", chats, true).subscribe(
      () => {
        const i = this.datos.Chats.indexOf(chats)
        this.datos.Chats.splice(i, 1)
      }
    )
  }

  public get Descripciones(): Observable<Descripciones[]> {
    if (this.datos.Descripciones.length !== 0 && !this.datos.reiniciarDescripciones && this.datos.DescripcionesValores.valor !== 0) {
      this.datos.DescripcionesValores.valor = this.datos.DescripcionesValores.valor - 1
      return of(this.datos.Descripciones)
    } else {
      if (this.datos.reiniciarDescripciones === true) {
        this.datos.reiniciarDescripciones = false
      }
      const peticion = this.http.get<Descripciones[]>(`${this.API_URI}all/Descripciones`)
      peticion.subscribe(
        res => {
          this.datos.Descripciones = new Array<Descripciones>()
          this.datos.Descripciones = res as Descripciones[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setDescripciones(descripciones: Descripciones): void {
    this.realizarOperacion("Descripciones", descripciones).subscribe(
      () => {
        if (descripciones.id != null) {
          const i = this.datos.Descripciones.indexOf(descripciones)
          this.datos.Descripciones[i] = descripciones
        } else {
          this.http.get<Descripciones[]>(`${this.API_URI}all/Descripciones`).subscribe(
            res => {
              this.datos.Descripciones = new Array<Descripciones>()
              this.datos.Descripciones = res as Descripciones[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteDescripciones(descripciones: Descripciones) {
    this.realizarOperacion("Descripciones", descripciones, true).subscribe(
      () => {
        const i = this.datos.Descripciones.indexOf(descripciones)
        this.datos.Descripciones.splice(i, 1)
      }
    )
  }

  public get DescripcionesEvento(): Observable<DescripcionesEvento[]> {
    if (this.datos.DescripcionesEvento.length !== 0 && !this.datos.reiniciarDescripcionesEvento && this.datos.DescripcionesEventoValores.valor !== 0) {
      this.datos.DescripcionesEventoValores.valor = this.datos.DescripcionesEventoValores.valor - 1
      return of(this.datos.DescripcionesEvento)
    } else {
      if (this.datos.reiniciarDescripcionesEvento === true) {
        this.datos.reiniciarDescripcionesEvento = false
      }
      const peticion = this.http.get<DescripcionesEvento[]>(`${this.API_URI}all/DescripcionesEvento`)
      peticion.subscribe(
        res => {
          this.datos.DescripcionesEvento = new Array<DescripcionesEvento>()
          this.datos.DescripcionesEvento = res as DescripcionesEvento[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setDescripcionesEvento(descripcionesevento: DescripcionesEvento): void {
    this.realizarOperacion("DescripcionesEvento", descripcionesevento).subscribe(
      () => {
        if (descripcionesevento.id != null) {
          const i = this.datos.DescripcionesEvento.indexOf(descripcionesevento)
          this.datos.DescripcionesEvento[i] = descripcionesevento
        } else {
          this.http.get<DescripcionesEvento[]>(`${this.API_URI}all/DescripcionesEvento`).subscribe(
            res => {
              this.datos.DescripcionesEvento = new Array<DescripcionesEvento>()
              this.datos.DescripcionesEvento = res as DescripcionesEvento[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteDescripcionesEvento(descripcionesevento: DescripcionesEvento) {
    this.realizarOperacion("DescripcionesEvento", descripcionesevento, true).subscribe(
      () => {
        const i = this.datos.DescripcionesEvento.indexOf(descripcionesevento)
        this.datos.DescripcionesEvento.splice(i, 1)
      }
    )
  }

  public get DiasMes(): Observable<DiasMes[]> {
    if (this.datos.DiasMes.length !== 0 && !this.datos.reiniciarDiasMes && this.datos.DiasMesValores.valor !== 0) {
      this.datos.DiasMesValores.valor = this.datos.DiasMesValores.valor - 1
      return of(this.datos.DiasMes)
    } else {
      if (this.datos.reiniciarDiasMes === true) {
        this.datos.reiniciarDiasMes = false
      }
      const peticion = this.http.get<DiasMes[]>(`${this.API_URI}all/DiasMes`)
      peticion.subscribe(
        res => {
          this.datos.DiasMes = new Array<DiasMes>()
          this.datos.DiasMes = res as DiasMes[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setDiasMes(diasmes: DiasMes): void {
    this.realizarOperacion("DiasMes", diasmes).subscribe(
      () => {
        if (diasmes.id != null) {
          const i = this.datos.DiasMes.indexOf(diasmes)
          this.datos.DiasMes[i] = diasmes
        } else {
          this.http.get<DiasMes[]>(`${this.API_URI}all/DiasMes`).subscribe(
            res => {
              this.datos.DiasMes = new Array<DiasMes>()
              this.datos.DiasMes = res as DiasMes[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteDiasMes(diasmes: DiasMes) {
    this.realizarOperacion("DiasMes", diasmes, true).subscribe(
      () => {
        const i = this.datos.DiasMes.indexOf(diasmes)
        this.datos.DiasMes.splice(i, 1)
      }
    )
  }

  public get DiasSemana(): Observable<DiasSemana[]> {
    if (this.datos.DiasSemana.length !== 0 && !this.datos.reiniciarDiasSemana && this.datos.DiasSemanaValores.valor !== 0) {
      this.datos.DiasSemanaValores.valor = this.datos.DiasSemanaValores.valor - 1
      return of(this.datos.DiasSemana)
    } else {
      if (this.datos.reiniciarDiasSemana === true) {
        this.datos.reiniciarDiasSemana = false
      }
      const peticion = this.http.get<DiasSemana[]>(`${this.API_URI}all/DiasSemana`)
      peticion.subscribe(
        res => {
          this.datos.DiasSemana = new Array<DiasSemana>()
          this.datos.DiasSemana = res as DiasSemana[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setDiasSemana(diassemana: DiasSemana): void {
    this.realizarOperacion("DiasSemana", diassemana).subscribe(
      () => {
        if (diassemana.id != null) {
          const i = this.datos.DiasSemana.indexOf(diassemana)
          this.datos.DiasSemana[i] = diassemana
        } else {
          this.http.get<DiasSemana[]>(`${this.API_URI}all/DiasSemana`).subscribe(
            res => {
              this.datos.DiasSemana = new Array<DiasSemana>()
              this.datos.DiasSemana = res as DiasSemana[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteDiasSemana(diassemana: DiasSemana) {
    this.realizarOperacion("DiasSemana", diassemana, true).subscribe(
      () => {
        const i = this.datos.DiasSemana.indexOf(diassemana)
        this.datos.DiasSemana.splice(i, 1)
      }
    )
  }

  public get Direcciones(): Observable<Direcciones[]> {
    if (this.datos.Direcciones.length !== 0 && !this.datos.reiniciarDirecciones && this.datos.DireccionesValores.valor !== 0) {
      this.datos.DireccionesValores.valor = this.datos.DireccionesValores.valor - 1
      return of(this.datos.Direcciones)
    } else {
      if (this.datos.reiniciarDirecciones === true) {
        this.datos.reiniciarDirecciones = false
      }
      const peticion = this.http.get<Direcciones[]>(`${this.API_URI}all/Direcciones`)
      peticion.subscribe(
        res => {
          this.datos.Direcciones = new Array<Direcciones>()
          this.datos.Direcciones = res as Direcciones[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setDirecciones(direcciones: Direcciones): void {
    this.realizarOperacion("Direcciones", direcciones).subscribe(
      () => {
        if (direcciones.id != null) {
          const i = this.datos.Direcciones.indexOf(direcciones)
          this.datos.Direcciones[i] = direcciones
        } else {
          this.http.get<Direcciones[]>(`${this.API_URI}all/Direcciones`).subscribe(
            res => {
              this.datos.Direcciones = new Array<Direcciones>()
              this.datos.Direcciones = res as Direcciones[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteDirecciones(direcciones: Direcciones) {
    this.realizarOperacion("Direcciones", direcciones, true).subscribe(
      () => {
        const i = this.datos.Direcciones.indexOf(direcciones)
        this.datos.Direcciones.splice(i, 1)
      }
    )
  }

  public get DireccionesPersona(): Observable<DireccionesPersona[]> {
    if (this.datos.DireccionesPersona.length !== 0 && !this.datos.reiniciarDireccionesPersona && this.datos.DireccionesPersonaValores.valor !== 0) {
      this.datos.DireccionesPersonaValores.valor = this.datos.DireccionesPersonaValores.valor - 1
      return of(this.datos.DireccionesPersona)
    } else {
      if (this.datos.reiniciarDireccionesPersona === true) {
        this.datos.reiniciarDireccionesPersona = false
      }
      const peticion = this.http.get<DireccionesPersona[]>(`${this.API_URI}all/DireccionesPersona`)
      peticion.subscribe(
        res => {
          this.datos.DireccionesPersona = new Array<DireccionesPersona>()
          this.datos.DireccionesPersona = res as DireccionesPersona[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setDireccionesPersona(direccionespersona: DireccionesPersona): void {
    this.realizarOperacion("DireccionesPersona", direccionespersona).subscribe(
      () => {
        if (direccionespersona.id != null) {
          const i = this.datos.DireccionesPersona.indexOf(direccionespersona)
          this.datos.DireccionesPersona[i] = direccionespersona
        } else {
          this.http.get<DireccionesPersona[]>(`${this.API_URI}all/DireccionesPersona`).subscribe(
            res => {
              this.datos.DireccionesPersona = new Array<DireccionesPersona>()
              this.datos.DireccionesPersona = res as DireccionesPersona[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteDireccionesPersona(direccionespersona: DireccionesPersona) {
    this.realizarOperacion("DireccionesPersona", direccionespersona, true).subscribe(
      () => {
        const i = this.datos.DireccionesPersona.indexOf(direccionespersona)
        this.datos.DireccionesPersona.splice(i, 1)
      }
    )
  }

  public get Emails(): Observable<Emails[]> {
    if (this.datos.Emails.length !== 0 && !this.datos.reiniciarEmails && this.datos.EmailsValores.valor !== 0) {
      this.datos.EmailsValores.valor = this.datos.EmailsValores.valor - 1
      return of(this.datos.Emails);
    }
    else {
      const peticion = this.http.get<Emails[]>(`${this.API_URI}all/Emails`)
      peticion.subscribe(
        res => {
          this.datos.Emails = new Array<Emails>()
          this.datos.Emails = res as Emails[]
        }
      )
      return peticion
    }
  }


  public setEmails(emails: Emails): void {
    this.realizarOperacion("Emails", emails).subscribe(
      () => {
        if (emails.id != null) {
          const i = this.datos.Emails.indexOf(emails)
          this.datos.Emails[i] = emails
        } else {
          this.http.get<Emails[]>(`${this.API_URI}all/Emails`).subscribe(
            res => {
              this.datos.Emails = new Array<Emails>()
              this.datos.Emails = res as Emails[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteEmails(emails: Emails) {
    this.realizarOperacion("Emails", emails, true).subscribe(
      () => {
        const i = this.datos.Emails.indexOf(emails)
        this.datos.Emails.splice(i, 1)
      }
    )
  }

  public get EmailsPersona(): Observable<EmailsPersona[]> {
    if (this.datos.EmailsPersona.length !== 0 && !this.datos.reiniciarEmailsPersona && this.datos.EmailsPersonaValores.valor !== 0) {
      this.datos.EmailsPersonaValores.valor = this.datos.EmailsPersonaValores.valor - 1
      return of(this.datos.EmailsPersona)
    } else {
      if (this.datos.reiniciarEmailsPersona === true) {
        this.datos.reiniciarEmailsPersona = false
      }
      const peticion = this.http.get<EmailsPersona[]>(`${this.API_URI}all/EmailsPersona`)
      peticion.subscribe(
        res => {
          this.datos.EmailsPersona = new Array<EmailsPersona>()
          this.datos.EmailsPersona = res as EmailsPersona[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setEmailsPersona(emailspersona: EmailsPersona): void {
    this.realizarOperacion("EmailsPersona", emailspersona).subscribe(
      () => {
        if (emailspersona.id != null) {
          const i = this.datos.EmailsPersona.indexOf(emailspersona)
          this.datos.EmailsPersona[i] = emailspersona
        } else {
          this.http.get<EmailsPersona[]>(`${this.API_URI}all/EmailsPersona`).subscribe(
            res => {
              this.datos.EmailsPersona = new Array<EmailsPersona>()
              this.datos.EmailsPersona = res as EmailsPersona[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteEmailsPersona(emailspersona: EmailsPersona) {
    this.realizarOperacion("EmailsPersona", emailspersona, true).subscribe(
      () => {
        const i = this.datos.EmailsPersona.indexOf(emailspersona)
        this.datos.EmailsPersona.splice(i, 1)
      }
    )
  }

  public get Empresas(): Observable<Empresas[]> {
    if (this.datos.Empresas.length !== 0 && !this.datos.reiniciarEmpresas && this.datos.EmpresasValores.valor !== 0) {
      this.datos.EmpresasValores.valor = this.datos.EmpresasValores.valor - 1
      return of(this.datos.Empresas)
    } else {
      if (this.datos.reiniciarEmpresas === true) {
        this.datos.reiniciarEmpresas = false
      }
      const peticion = this.http.get<Empresas[]>(`${this.API_URI}all/Empresas`)
      peticion.subscribe(
        res => {
          this.datos.Empresas = new Array<Empresas>()
          this.datos.Empresas = res as Empresas[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setEmpresas(empresas: Empresas): void {
    this.realizarOperacion("Empresas", empresas).subscribe(
      () => {
        if (empresas.id != null) {
          const i = this.datos.Empresas.indexOf(empresas)
          this.datos.Empresas[i] = empresas
        } else {
          this.http.get<Empresas[]>(`${this.API_URI}all/Empresas`).subscribe(
            res => {
              this.datos.Empresas = new Array<Empresas>()
              this.datos.Empresas = res as Empresas[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteEmpresas(empresas: Empresas) {
    this.realizarOperacion("Empresas", empresas, true).subscribe(
      () => {
        const i = this.datos.Empresas.indexOf(empresas)
        this.datos.Empresas.splice(i, 1)
      }
    )
  }

  public get Establecimientos(): Observable<Establecimientos[]> {
    if (this.datos.Establecimientos.length !== 0 && !this.datos.reiniciarEstablecimientos && this.datos.EstablecimientosValores.valor !== 0) {
      this.datos.EstablecimientosValores.valor = this.datos.EstablecimientosValores.valor - 1
      return of(this.datos.Establecimientos)
    } else {
      if (this.datos.reiniciarEstablecimientos === true) {
        this.datos.reiniciarEstablecimientos = false
      }
      const peticion = this.http.get<Establecimientos[]>(`${this.API_URI}all/Establecimientos`)
      peticion.subscribe(
        res => {
          this.datos.Establecimientos = new Array<Establecimientos>()
          this.datos.Establecimientos = res as Establecimientos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setEstablecimientos(establecimientos: Establecimientos): void {
    this.realizarOperacion("Establecimientos", establecimientos).subscribe(
      () => {
        if (establecimientos.id != null) {
          const i = this.datos.Establecimientos.indexOf(establecimientos)
          this.datos.Establecimientos[i] = establecimientos
        } else {
          this.http.get<Establecimientos[]>(`${this.API_URI}all/Establecimientos`).subscribe(
            res => {
              this.datos.Establecimientos = new Array<Establecimientos>()
              this.datos.Establecimientos = res as Establecimientos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteEstablecimientos(establecimientos: Establecimientos) {
    this.realizarOperacion("Establecimientos", establecimientos, true).subscribe(
      () => {
        const i = this.datos.Establecimientos.indexOf(establecimientos)
        this.datos.Establecimientos.splice(i, 1)
      }
    )
  }

  public get Eventos(): Observable<Eventos[]> {
    if (this.datos.Eventos.length !== 0 && !this.datos.reiniciarEventos && this.datos.EventosValores.valor !== 0) {
      this.datos.EventosValores.valor = this.datos.EventosValores.valor - 1
      return of(this.datos.Eventos)
    } else {
      if (this.datos.reiniciarEventos === true) {
        this.datos.reiniciarEventos = false
      }
      const peticion = this.http.get<Eventos[]>(`${this.API_URI}all/Eventos`)
      peticion.subscribe(
        res => {
          this.datos.Eventos = new Array<Eventos>()
          this.datos.Eventos = res as Eventos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setEventos(eventos: Eventos): void {
    this.realizarOperacion("Eventos", eventos).subscribe(
      () => {
        if (eventos.id != null) {
          const i = this.datos.Eventos.indexOf(eventos)
          this.datos.Eventos[i] = eventos
        } else {
          this.http.get<Eventos[]>(`${this.API_URI}all/Eventos`).subscribe(
            res => {
              this.datos.Eventos = new Array<Eventos>()
              this.datos.Eventos = res as Eventos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteEventos(eventos: Eventos) {
    this.realizarOperacion("Eventos", eventos, true).subscribe(
      () => {
        const i = this.datos.Eventos.indexOf(eventos)
        this.datos.Eventos.splice(i, 1)
      }
    )
  }

  public get EventosEstablecimientos(): Observable<EventosEstablecimientos[]> {
    if (this.datos.EventosEstablecimientos.length !== 0 && !this.datos.reiniciarEventosEstablecimientos && this.datos.EventosEstablecimientosValores.valor !== 0) {
      this.datos.EventosEstablecimientosValores.valor = this.datos.EventosEstablecimientosValores.valor - 1
      return of(this.datos.EventosEstablecimientos)
    } else {
      if (this.datos.reiniciarEventosEstablecimientos === true) {
        this.datos.reiniciarEventosEstablecimientos = false
      }
      const peticion = this.http.get<EventosEstablecimientos[]>(`${this.API_URI}all/EventosEstablecimientos`)
      peticion.subscribe(
        res => {
          this.datos.EventosEstablecimientos = new Array<EventosEstablecimientos>()
          this.datos.EventosEstablecimientos = res as EventosEstablecimientos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setEventosEstablecimientos(eventosestablecimientos: EventosEstablecimientos): void {
    this.realizarOperacion("EventosEstablecimientos", eventosestablecimientos).subscribe(
      () => {
        if (eventosestablecimientos.id != null) {
          const i = this.datos.EventosEstablecimientos.indexOf(eventosestablecimientos)
          this.datos.EventosEstablecimientos[i] = eventosestablecimientos
        } else {
          this.http.get<EventosEstablecimientos[]>(`${this.API_URI}all/EventosEstablecimientos`).subscribe(
            res => {
              this.datos.EventosEstablecimientos = new Array<EventosEstablecimientos>()
              this.datos.EventosEstablecimientos = res as EventosEstablecimientos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteEventosEstablecimientos(eventosestablecimientos: EventosEstablecimientos) {
    this.realizarOperacion("EventosEstablecimientos", eventosestablecimientos, true).subscribe(
      () => {
        const i = this.datos.EventosEstablecimientos.indexOf(eventosestablecimientos)
        this.datos.EventosEstablecimientos.splice(i, 1)
      }
    )
  }

  public get FaxsPersona(): Observable<FaxsPersona[]> {
    if (this.datos.FaxsPersona.length !== 0 && !this.datos.reiniciarFaxsPersona && this.datos.FaxsPersonaValores.valor !== 0) {
      this.datos.FaxsPersonaValores.valor = this.datos.FaxsPersonaValores.valor - 1
      return of(this.datos.FaxsPersona)
    } else {
      if (this.datos.reiniciarFaxsPersona === true) {
        this.datos.reiniciarFaxsPersona = false
      }
      const peticion = this.http.get<FaxsPersona[]>(`${this.API_URI}all/FaxsPersona`)
      peticion.subscribe(
        res => {
          this.datos.FaxsPersona = new Array<FaxsPersona>()
          this.datos.FaxsPersona = res as FaxsPersona[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setFaxsPersona(faxspersona: FaxsPersona): void {
    this.realizarOperacion("FaxsPersona", faxspersona).subscribe(
      () => {
        if (faxspersona.id != null) {
          const i = this.datos.FaxsPersona.indexOf(faxspersona)
          this.datos.FaxsPersona[i] = faxspersona
        } else {
          this.http.get<FaxsPersona[]>(`${this.API_URI}all/FaxsPersona`).subscribe(
            res => {
              this.datos.FaxsPersona = new Array<FaxsPersona>()
              this.datos.FaxsPersona = res as FaxsPersona[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteFaxsPersona(faxspersona: FaxsPersona) {
    this.realizarOperacion("FaxsPersona", faxspersona, true).subscribe(
      () => {
        const i = this.datos.FaxsPersona.indexOf(faxspersona)
        this.datos.FaxsPersona.splice(i, 1)
      }
    )
  }

  public get Fechas(): Observable<Fechas[]> {
    if (this.datos.Fechas.length !== 0 && !this.datos.reiniciarFechas && this.datos.FechasValores.valor !== 0) {
      this.datos.FechasValores.valor = this.datos.FechasValores.valor - 1
      return of(this.datos.Fechas)
    } else {
      if (this.datos.reiniciarFechas === true) {
        this.datos.reiniciarFechas = false
      }
      const peticion = this.http.get<Fechas[]>(`${this.API_URI}all/Fechas`)
      peticion.subscribe(
        res => {
          this.datos.Fechas = new Array<Fechas>()
          this.datos.Fechas = res as Fechas[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setFechas(fechas: Fechas): void {
    this.realizarOperacion("Fechas", fechas).subscribe(
      () => {
        if (fechas.id != null) {
          const i = this.datos.Fechas.indexOf(fechas)
          this.datos.Fechas[i] = fechas
        } else {
          this.http.get<Fechas[]>(`${this.API_URI}all/Fechas`).subscribe(
            res => {
              this.datos.Fechas = new Array<Fechas>()
              this.datos.Fechas = res as Fechas[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteFechas(fechas: Fechas) {
    this.realizarOperacion("Fechas", fechas, true).subscribe(
      () => {
        const i = this.datos.Fechas.indexOf(fechas)
        this.datos.Fechas.splice(i, 1)
      }
    )
  }

  public get Grupos(): Observable<Grupos[]> {
    if (this.datos.Grupos.length !== 0 && !this.datos.reiniciarGrupos && this.datos.GruposValores.valor !== 0) {
      this.datos.GruposValores.valor = this.datos.GruposValores.valor - 1
      return of(this.datos.Grupos)
    } else {
      if (this.datos.reiniciarGrupos === true) {
        this.datos.reiniciarGrupos = false
      }
      const peticion = this.http.get<Grupos[]>(`${this.API_URI}all/Grupos`)
      peticion.subscribe(
        res => {
          this.datos.Grupos = new Array<Grupos>()
          this.datos.Grupos = res as Grupos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setGrupos(grupos: Grupos): void {
    this.realizarOperacion("Grupos", grupos).subscribe(
      () => {
        if (grupos.id != null) {
          const i = this.datos.Grupos.indexOf(grupos)
          this.datos.Grupos[i] = grupos
        } else {
          this.http.get<Grupos[]>(`${this.API_URI}all/Grupos`).subscribe(
            res => {
              this.datos.Grupos = new Array<Grupos>()
              this.datos.Grupos = res as Grupos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteGrupos(grupos: Grupos) {
    this.realizarOperacion("Grupos", grupos, true).subscribe(
      () => {
        const i = this.datos.Grupos.indexOf(grupos)
        this.datos.Grupos.splice(i, 1)
      }
    )
  }

  public get GruposConsumicion(): Observable<GruposConsumicion[]> {
    if (this.datos.GruposConsumicion.length !== 0 && !this.datos.reiniciarGruposConsumicion && this.datos.GruposConsumicionValores.valor !== 0) {
      this.datos.GruposConsumicionValores.valor = this.datos.GruposConsumicionValores.valor - 1
      return of(this.datos.GruposConsumicion)
    } else {
      if (this.datos.reiniciarGruposConsumicion === true) {
        this.datos.reiniciarGruposConsumicion = false
      }
      const peticion = this.http.get<GruposConsumicion[]>(`${this.API_URI}all/GruposConsumicion`)
      peticion.subscribe(
        res => {
          this.datos.GruposConsumicion = new Array<GruposConsumicion>()
          this.datos.GruposConsumicion = res as GruposConsumicion[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setGruposConsumicion(gruposconsumicion: GruposConsumicion): void {
    this.realizarOperacion("GruposConsumicion", gruposconsumicion).subscribe(
      () => {
        if (gruposconsumicion.id != null) {
          const i = this.datos.GruposConsumicion.indexOf(gruposconsumicion)
          this.datos.GruposConsumicion[i] = gruposconsumicion
        } else {
          this.http.get<GruposConsumicion[]>(`${this.API_URI}all/GruposConsumicion`).subscribe(
            res => {
              this.datos.GruposConsumicion = new Array<GruposConsumicion>()
              this.datos.GruposConsumicion = res as GruposConsumicion[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteGruposConsumicion(gruposconsumicion: GruposConsumicion) {
    this.realizarOperacion("GruposConsumicion", gruposconsumicion, true).subscribe(
      () => {
        const i = this.datos.GruposConsumicion.indexOf(gruposconsumicion)
        this.datos.GruposConsumicion.splice(i, 1)
      }
    )
  }

  public get HorarioDiasMesEstablecimientos(): Observable<HorarioDiasMesEstablecimientos[]> {
    if (this.datos.HorarioDiasMesEstablecimientos.length !== 0 && !this.datos.reiniciarHorarioDiasMesEstablecimientos && this.datos.HorarioDiasMesEstablecimientosValores.valor !== 0) {
      this.datos.HorarioDiasMesEstablecimientosValores.valor = this.datos.HorarioDiasMesEstablecimientosValores.valor - 1
      return of(this.datos.HorarioDiasMesEstablecimientos)
    } else {
      if (this.datos.reiniciarHorarioDiasMesEstablecimientos === true) {
        this.datos.reiniciarHorarioDiasMesEstablecimientos = false
      }
      const peticion = this.http.get<HorarioDiasMesEstablecimientos[]>(`${this.API_URI}all/HorarioDiasMesEstablecimientos`)
      peticion.subscribe(
        res => {
          this.datos.HorarioDiasMesEstablecimientos = new Array<HorarioDiasMesEstablecimientos>()
          this.datos.HorarioDiasMesEstablecimientos = res as HorarioDiasMesEstablecimientos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioDiasMesEstablecimientos(horariodiasmesestablecimientos: HorarioDiasMesEstablecimientos): void {
    this.realizarOperacion("HorarioDiasMesEstablecimientos", horariodiasmesestablecimientos).subscribe(
      () => {
        if (horariodiasmesestablecimientos.id != null) {
          const i = this.datos.HorarioDiasMesEstablecimientos.indexOf(horariodiasmesestablecimientos)
          this.datos.HorarioDiasMesEstablecimientos[i] = horariodiasmesestablecimientos
        } else {
          this.http.get<HorarioDiasMesEstablecimientos[]>(`${this.API_URI}all/HorarioDiasMesEstablecimientos`).subscribe(
            res => {
              this.datos.HorarioDiasMesEstablecimientos = new Array<HorarioDiasMesEstablecimientos>()
              this.datos.HorarioDiasMesEstablecimientos = res as HorarioDiasMesEstablecimientos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioDiasMesEstablecimientos(horariodiasmesestablecimientos: HorarioDiasMesEstablecimientos) {
    this.realizarOperacion("HorarioDiasMesEstablecimientos", horariodiasmesestablecimientos, true).subscribe(
      () => {
        const i = this.datos.HorarioDiasMesEstablecimientos.indexOf(horariodiasmesestablecimientos)
        this.datos.HorarioDiasMesEstablecimientos.splice(i, 1)
      }
    )
  }

  public get HorarioDiasMesEventos(): Observable<HorarioDiasMesEventos[]> {
    if (this.datos.HorarioDiasMesEventos.length !== 0 && !this.datos.reiniciarHorarioDiasMesEventos && this.datos.HorarioDiasMesEventosValores.valor !== 0) {
      this.datos.HorarioDiasMesEventosValores.valor = this.datos.HorarioDiasMesEventosValores.valor - 1
      return of(this.datos.HorarioDiasMesEventos)
    } else {
      if (this.datos.reiniciarHorarioDiasMesEventos === true) {
        this.datos.reiniciarHorarioDiasMesEventos = false
      }
      const peticion = this.http.get<HorarioDiasMesEventos[]>(`${this.API_URI}all/HorarioDiasMesEventos`)
      peticion.subscribe(
        res => {
          this.datos.HorarioDiasMesEventos = new Array<HorarioDiasMesEventos>()
          this.datos.HorarioDiasMesEventos = res as HorarioDiasMesEventos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioDiasMesEventos(horariodiasmeseventos: HorarioDiasMesEventos): void {
    this.realizarOperacion("HorarioDiasMesEventos", horariodiasmeseventos).subscribe(
      () => {
        if (horariodiasmeseventos.id != null) {
          const i = this.datos.HorarioDiasMesEventos.indexOf(horariodiasmeseventos)
          this.datos.HorarioDiasMesEventos[i] = horariodiasmeseventos
        } else {
          this.http.get<HorarioDiasMesEventos[]>(`${this.API_URI}all/HorarioDiasMesEventos`).subscribe(
            res => {
              this.datos.HorarioDiasMesEventos = new Array<HorarioDiasMesEventos>()
              this.datos.HorarioDiasMesEventos = res as HorarioDiasMesEventos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioDiasMesEventos(horariodiasmeseventos: HorarioDiasMesEventos) {
    this.realizarOperacion("HorarioDiasMesEventos", horariodiasmeseventos, true).subscribe(
      () => {
        const i = this.datos.HorarioDiasMesEventos.indexOf(horariodiasmeseventos)
        this.datos.HorarioDiasMesEventos.splice(i, 1)
      }
    )
  }

  public get HorarioDiasMesPromociones(): Observable<HorarioDiasMesPromociones[]> {
    if (this.datos.HorarioDiasMesPromociones.length !== 0 && !this.datos.reiniciarHorarioDiasMesPromociones && this.datos.HorarioDiasMesPromocionesValores.valor !== 0) {
      this.datos.HorarioDiasMesPromocionesValores.valor = this.datos.HorarioDiasMesPromocionesValores.valor - 1
      return of(this.datos.HorarioDiasMesPromociones)
    } else {
      if (this.datos.reiniciarHorarioDiasMesPromociones === true) {
        this.datos.reiniciarHorarioDiasMesPromociones = false
      }
      const peticion = this.http.get<HorarioDiasMesPromociones[]>(`${this.API_URI}all/HorarioDiasMesPromociones`)
      peticion.subscribe(
        res => {
          this.datos.HorarioDiasMesPromociones = new Array<HorarioDiasMesPromociones>()
          this.datos.HorarioDiasMesPromociones = res as HorarioDiasMesPromociones[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioDiasMesPromociones(horariodiasmespromociones: HorarioDiasMesPromociones): void {
    this.realizarOperacion("HorarioDiasMesPromociones", horariodiasmespromociones).subscribe(
      () => {
        if (horariodiasmespromociones.id != null) {
          const i = this.datos.HorarioDiasMesPromociones.indexOf(horariodiasmespromociones)
          this.datos.HorarioDiasMesPromociones[i] = horariodiasmespromociones
        } else {
          this.http.get<HorarioDiasMesPromociones[]>(`${this.API_URI}all/HorarioDiasMesPromociones`).subscribe(
            res => {
              this.datos.HorarioDiasMesPromociones = new Array<HorarioDiasMesPromociones>()
              this.datos.HorarioDiasMesPromociones = res as HorarioDiasMesPromociones[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioDiasMesPromociones(horariodiasmespromociones: HorarioDiasMesPromociones) {
    this.realizarOperacion("HorarioDiasMesPromociones", horariodiasmespromociones, true).subscribe(
      () => {
        const i = this.datos.HorarioDiasMesPromociones.indexOf(horariodiasmespromociones)
        this.datos.HorarioDiasMesPromociones.splice(i, 1)
      }
    )
  }

  public get HorarioDiasSemanaEstablecimientos(): Observable<HorarioDiasSemanaEstablecimientos[]> {
    if (this.datos.HorarioDiasSemanaEstablecimientos.length !== 0 && !this.datos.reiniciarHorarioDiasSemanaEstablecimientos && this.datos.HorarioDiasSemanaEstablecimientosValores.valor !== 0) {
      this.datos.HorarioDiasSemanaEstablecimientosValores.valor = this.datos.HorarioDiasSemanaEstablecimientosValores.valor - 1
      return of(this.datos.HorarioDiasSemanaEstablecimientos)
    } else {
      if (this.datos.reiniciarHorarioDiasSemanaEstablecimientos === true) {
        this.datos.reiniciarHorarioDiasSemanaEstablecimientos = false
      }
      const peticion = this.http.get<HorarioDiasSemanaEstablecimientos[]>(`${this.API_URI}all/HorarioDiasSemanaEstablecimientos`)
      peticion.subscribe(
        res => {
          this.datos.HorarioDiasSemanaEstablecimientos = new Array<HorarioDiasSemanaEstablecimientos>()
          this.datos.HorarioDiasSemanaEstablecimientos = res as HorarioDiasSemanaEstablecimientos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioDiasSemanaEstablecimientos(horariodiassemanaestablecimientos: HorarioDiasSemanaEstablecimientos): void {
    this.realizarOperacion("HorarioDiasSemanaEstablecimientos", horariodiassemanaestablecimientos).subscribe(
      () => {
        if (horariodiassemanaestablecimientos.id != null) {
          const i = this.datos.HorarioDiasSemanaEstablecimientos.indexOf(horariodiassemanaestablecimientos)
          this.datos.HorarioDiasSemanaEstablecimientos[i] = horariodiassemanaestablecimientos
        } else {
          this.http.get<HorarioDiasSemanaEstablecimientos[]>(`${this.API_URI}all/HorarioDiasSemanaEstablecimientos`).subscribe(
            res => {
              this.datos.HorarioDiasSemanaEstablecimientos = new Array<HorarioDiasSemanaEstablecimientos>()
              this.datos.HorarioDiasSemanaEstablecimientos = res as HorarioDiasSemanaEstablecimientos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioDiasSemanaEstablecimientos(horariodiassemanaestablecimientos: HorarioDiasSemanaEstablecimientos) {
    this.realizarOperacion("HorarioDiasSemanaEstablecimientos", horariodiassemanaestablecimientos, true).subscribe(
      () => {
        const i = this.datos.HorarioDiasSemanaEstablecimientos.indexOf(horariodiassemanaestablecimientos)
        this.datos.HorarioDiasSemanaEstablecimientos.splice(i, 1)
      }
    )
  }

  public get HorarioDiasSemanaEventos(): Observable<HorarioDiasSemanaEventos[]> {
    if (this.datos.HorarioDiasSemanaEventos.length !== 0 && !this.datos.reiniciarHorarioDiasSemanaEventos && this.datos.HorarioDiasSemanaEventosValores.valor !== 0) {
      this.datos.HorarioDiasSemanaEventosValores.valor = this.datos.HorarioDiasSemanaEventosValores.valor - 1
      return of(this.datos.HorarioDiasSemanaEventos)
    } else {
      if (this.datos.reiniciarHorarioDiasSemanaEventos === true) {
        this.datos.reiniciarHorarioDiasSemanaEventos = false
      }
      const peticion = this.http.get<HorarioDiasSemanaEventos[]>(`${this.API_URI}all/HorarioDiasSemanaEventos`)
      peticion.subscribe(
        res => {
          this.datos.HorarioDiasSemanaEventos = new Array<HorarioDiasSemanaEventos>()
          this.datos.HorarioDiasSemanaEventos = res as HorarioDiasSemanaEventos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioDiasSemanaEventos(horariodiassemanaeventos: HorarioDiasSemanaEventos): void {
    this.realizarOperacion("HorarioDiasSemanaEventos", horariodiassemanaeventos).subscribe(
      () => {
        if (horariodiassemanaeventos.id != null) {
          const i = this.datos.HorarioDiasSemanaEventos.indexOf(horariodiassemanaeventos)
          this.datos.HorarioDiasSemanaEventos[i] = horariodiassemanaeventos
        } else {
          this.http.get<HorarioDiasSemanaEventos[]>(`${this.API_URI}all/HorarioDiasSemanaEventos`).subscribe(
            res => {
              this.datos.HorarioDiasSemanaEventos = new Array<HorarioDiasSemanaEventos>()
              this.datos.HorarioDiasSemanaEventos = res as HorarioDiasSemanaEventos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioDiasSemanaEventos(horariodiassemanaeventos: HorarioDiasSemanaEventos) {
    this.realizarOperacion("HorarioDiasSemanaEventos", horariodiassemanaeventos, true).subscribe(
      () => {
        const i = this.datos.HorarioDiasSemanaEventos.indexOf(horariodiassemanaeventos)
        this.datos.HorarioDiasSemanaEventos.splice(i, 1)
      }
    )
  }

  public get HorarioDiasSemanaPromociones(): Observable<HorarioDiasSemanaPromociones[]> {
    if (this.datos.HorarioDiasSemanaPromociones.length !== 0 && !this.datos.reiniciarHorarioDiasSemanaPromociones && this.datos.HorarioDiasSemanaPromocionesValores.valor !== 0) {
      this.datos.HorarioDiasSemanaPromocionesValores.valor = this.datos.HorarioDiasSemanaPromocionesValores.valor - 1
      return of(this.datos.HorarioDiasSemanaPromociones)
    } else {
      if (this.datos.reiniciarHorarioDiasSemanaPromociones === true) {
        this.datos.reiniciarHorarioDiasSemanaPromociones = false
      }
      const peticion = this.http.get<HorarioDiasSemanaPromociones[]>(`${this.API_URI}all/HorarioDiasSemanaPromociones`)
      peticion.subscribe(
        res => {
          this.datos.HorarioDiasSemanaPromociones = new Array<HorarioDiasSemanaPromociones>()
          this.datos.HorarioDiasSemanaPromociones = res as HorarioDiasSemanaPromociones[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioDiasSemanaPromociones(horariodiassemanapromociones: HorarioDiasSemanaPromociones): void {
    this.realizarOperacion("HorarioDiasSemanaPromociones", horariodiassemanapromociones).subscribe(
      () => {
        if (horariodiassemanapromociones.id != null) {
          const i = this.datos.HorarioDiasSemanaPromociones.indexOf(horariodiassemanapromociones)
          this.datos.HorarioDiasSemanaPromociones[i] = horariodiassemanapromociones
        } else {
          this.http.get<HorarioDiasSemanaPromociones[]>(`${this.API_URI}all/HorarioDiasSemanaPromociones`).subscribe(
            res => {
              this.datos.HorarioDiasSemanaPromociones = new Array<HorarioDiasSemanaPromociones>()
              this.datos.HorarioDiasSemanaPromociones = res as HorarioDiasSemanaPromociones[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioDiasSemanaPromociones(horariodiassemanapromociones: HorarioDiasSemanaPromociones) {
    this.realizarOperacion("HorarioDiasSemanaPromociones", horariodiassemanapromociones, true).subscribe(
      () => {
        const i = this.datos.HorarioDiasSemanaPromociones.indexOf(horariodiassemanapromociones)
        this.datos.HorarioDiasSemanaPromociones.splice(i, 1)
      }
    )
  }

  public get HorarioFechasEstablecimientos(): Observable<HorarioFechasEstablecimientos[]> {
    if (this.datos.HorarioFechasEstablecimientos.length !== 0 && !this.datos.reiniciarHorarioFechasEstablecimientos && this.datos.HorarioFechasEstablecimientosValores.valor !== 0) {
      this.datos.HorarioFechasEstablecimientosValores.valor = this.datos.HorarioFechasEstablecimientosValores.valor - 1
      return of(this.datos.HorarioFechasEstablecimientos)
    } else {
      if (this.datos.reiniciarHorarioFechasEstablecimientos === true) {
        this.datos.reiniciarHorarioFechasEstablecimientos = false
      }
      const peticion = this.http.get<HorarioFechasEstablecimientos[]>(`${this.API_URI}all/HorarioFechasEstablecimientos`)
      peticion.subscribe(
        res => {
          this.datos.HorarioFechasEstablecimientos = new Array<HorarioFechasEstablecimientos>()
          this.datos.HorarioFechasEstablecimientos = res as HorarioFechasEstablecimientos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioFechasEstablecimientos(horariofechasestablecimientos: HorarioFechasEstablecimientos): void {
    this.realizarOperacion("HorarioFechasEstablecimientos", horariofechasestablecimientos).subscribe(
      () => {
        if (horariofechasestablecimientos.id != null) {
          const i = this.datos.HorarioFechasEstablecimientos.indexOf(horariofechasestablecimientos)
          this.datos.HorarioFechasEstablecimientos[i] = horariofechasestablecimientos
        } else {
          this.http.get<HorarioFechasEstablecimientos[]>(`${this.API_URI}all/HorarioFechasEstablecimientos`).subscribe(
            res => {
              this.datos.HorarioFechasEstablecimientos = new Array<HorarioFechasEstablecimientos>()
              this.datos.HorarioFechasEstablecimientos = res as HorarioFechasEstablecimientos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioFechasEstablecimientos(horariofechasestablecimientos: HorarioFechasEstablecimientos) {
    this.realizarOperacion("HorarioFechasEstablecimientos", horariofechasestablecimientos, true).subscribe(
      () => {
        const i = this.datos.HorarioFechasEstablecimientos.indexOf(horariofechasestablecimientos)
        this.datos.HorarioFechasEstablecimientos.splice(i, 1)
      }
    )
  }

  public get HorarioFechasEventos(): Observable<HorarioFechasEventos[]> {
    if (this.datos.HorarioFechasEventos.length !== 0 && !this.datos.reiniciarHorarioFechasEventos && this.datos.HorarioFechasEventosValores.valor !== 0) {
      this.datos.HorarioFechasEventosValores.valor = this.datos.HorarioFechasEventosValores.valor - 1
      return of(this.datos.HorarioFechasEventos)
    } else {
      if (this.datos.reiniciarHorarioFechasEventos === true) {
        this.datos.reiniciarHorarioFechasEventos = false
      }
      const peticion = this.http.get<HorarioFechasEventos[]>(`${this.API_URI}all/HorarioFechasEventos`)
      peticion.subscribe(
        res => {
          this.datos.HorarioFechasEventos = new Array<HorarioFechasEventos>()
          this.datos.HorarioFechasEventos = res as HorarioFechasEventos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioFechasEventos(horariofechaseventos: HorarioFechasEventos): void {
    this.realizarOperacion("HorarioFechasEventos", horariofechaseventos).subscribe(
      () => {
        if (horariofechaseventos.id != null) {
          const i = this.datos.HorarioFechasEventos.indexOf(horariofechaseventos)
          this.datos.HorarioFechasEventos[i] = horariofechaseventos
        } else {
          this.http.get<HorarioFechasEventos[]>(`${this.API_URI}all/HorarioFechasEventos`).subscribe(
            res => {
              this.datos.HorarioFechasEventos = new Array<HorarioFechasEventos>()
              this.datos.HorarioFechasEventos = res as HorarioFechasEventos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioFechasEventos(horariofechaseventos: HorarioFechasEventos) {
    this.realizarOperacion("HorarioFechasEventos", horariofechaseventos, true).subscribe(
      () => {
        const i = this.datos.HorarioFechasEventos.indexOf(horariofechaseventos)
        this.datos.HorarioFechasEventos.splice(i, 1)
      }
    )
  }

  public get HorarioFechasPromociones(): Observable<HorarioFechasPromociones[]> {
    if (this.datos.HorarioFechasPromociones.length !== 0 && !this.datos.reiniciarHorarioFechasPromociones && this.datos.HorarioFechasPromocionesValores.valor !== 0) {
      this.datos.HorarioFechasPromocionesValores.valor = this.datos.HorarioFechasPromocionesValores.valor - 1
      return of(this.datos.HorarioFechasPromociones)
    } else {
      if (this.datos.reiniciarHorarioFechasPromociones === true) {
        this.datos.reiniciarHorarioFechasPromociones = false
      }
      const peticion = this.http.get<HorarioFechasPromociones[]>(`${this.API_URI}all/HorarioFechasPromociones`)
      peticion.subscribe(
        res => {
          this.datos.HorarioFechasPromociones = new Array<HorarioFechasPromociones>()
          this.datos.HorarioFechasPromociones = res as HorarioFechasPromociones[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioFechasPromociones(horariofechaspromociones: HorarioFechasPromociones): void {
    this.realizarOperacion("HorarioFechasPromociones", horariofechaspromociones).subscribe(
      () => {
        if (horariofechaspromociones.id != null) {
          const i = this.datos.HorarioFechasPromociones.indexOf(horariofechaspromociones)
          this.datos.HorarioFechasPromociones[i] = horariofechaspromociones
        } else {
          this.http.get<HorarioFechasPromociones[]>(`${this.API_URI}all/HorarioFechasPromociones`).subscribe(
            res => {
              this.datos.HorarioFechasPromociones = new Array<HorarioFechasPromociones>()
              this.datos.HorarioFechasPromociones = res as HorarioFechasPromociones[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioFechasPromociones(horariofechaspromociones: HorarioFechasPromociones) {
    this.realizarOperacion("HorarioFechasPromociones", horariofechaspromociones, true).subscribe(
      () => {
        const i = this.datos.HorarioFechasPromociones.indexOf(horariofechaspromociones)
        this.datos.HorarioFechasPromociones.splice(i, 1)
      }
    )
  }

  public get HorarioHorasEstablecimientos(): Observable<HorarioHorasEstablecimientos[]> {
    if (this.datos.HorarioHorasEstablecimientos.length !== 0 && !this.datos.reiniciarHorarioHorasEstablecimientos && this.datos.HorarioHorasEstablecimientosValores.valor !== 0) {
      this.datos.HorarioHorasEstablecimientosValores.valor = this.datos.HorarioHorasEstablecimientosValores.valor - 1
      return of(this.datos.HorarioHorasEstablecimientos)
    } else {
      if (this.datos.reiniciarHorarioHorasEstablecimientos === true) {
        this.datos.reiniciarHorarioHorasEstablecimientos = false
      }
      const peticion = this.http.get<HorarioHorasEstablecimientos[]>(`${this.API_URI}all/HorarioHorasEstablecimientos`)
      peticion.subscribe(
        res => {
          this.datos.HorarioHorasEstablecimientos = new Array<HorarioHorasEstablecimientos>()
          this.datos.HorarioHorasEstablecimientos = res as HorarioHorasEstablecimientos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioHorasEstablecimientos(horariohorasestablecimientos: HorarioHorasEstablecimientos): void {
    this.realizarOperacion("HorarioHorasEstablecimientos", horariohorasestablecimientos).subscribe(
      () => {
        if (horariohorasestablecimientos.id != null) {
          const i = this.datos.HorarioHorasEstablecimientos.indexOf(horariohorasestablecimientos)
          this.datos.HorarioHorasEstablecimientos[i] = horariohorasestablecimientos
        } else {
          this.http.get<HorarioHorasEstablecimientos[]>(`${this.API_URI}all/HorarioHorasEstablecimientos`).subscribe(
            res => {
              this.datos.HorarioHorasEstablecimientos = new Array<HorarioHorasEstablecimientos>()
              this.datos.HorarioHorasEstablecimientos = res as HorarioHorasEstablecimientos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioHorasEstablecimientos(horariohorasestablecimientos: HorarioHorasEstablecimientos) {
    this.realizarOperacion("HorarioHorasEstablecimientos", horariohorasestablecimientos, true).subscribe(
      () => {
        const i = this.datos.HorarioHorasEstablecimientos.indexOf(horariohorasestablecimientos)
        this.datos.HorarioHorasEstablecimientos.splice(i, 1)
      }
    )
  }

  public get HorarioHorasEventos(): Observable<HorarioHorasEventos[]> {
    if (this.datos.HorarioHorasEventos.length !== 0 && !this.datos.reiniciarHorarioHorasEventos && this.datos.HorarioHorasEventosValores.valor !== 0) {
      this.datos.HorarioHorasEventosValores.valor = this.datos.HorarioHorasEventosValores.valor - 1
      return of(this.datos.HorarioHorasEventos)
    } else {
      if (this.datos.reiniciarHorarioHorasEventos === true) {
        this.datos.reiniciarHorarioHorasEventos = false
      }
      const peticion = this.http.get<HorarioHorasEventos[]>(`${this.API_URI}all/HorarioHorasEventos`)
      peticion.subscribe(
        res => {
          this.datos.HorarioHorasEventos = new Array<HorarioHorasEventos>()
          this.datos.HorarioHorasEventos = res as HorarioHorasEventos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioHorasEventos(horariohoraseventos: HorarioHorasEventos): void {
    this.realizarOperacion("HorarioHorasEventos", horariohoraseventos).subscribe(
      () => {
        if (horariohoraseventos.id != null) {
          const i = this.datos.HorarioHorasEventos.indexOf(horariohoraseventos)
          this.datos.HorarioHorasEventos[i] = horariohoraseventos
        } else {
          this.http.get<HorarioHorasEventos[]>(`${this.API_URI}all/HorarioHorasEventos`).subscribe(
            res => {
              this.datos.HorarioHorasEventos = new Array<HorarioHorasEventos>()
              this.datos.HorarioHorasEventos = res as HorarioHorasEventos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioHorasEventos(horariohoraseventos: HorarioHorasEventos) {
    this.realizarOperacion("HorarioHorasEventos", horariohoraseventos, true).subscribe(
      () => {
        const i = this.datos.HorarioHorasEventos.indexOf(horariohoraseventos)
        this.datos.HorarioHorasEventos.splice(i, 1)
      }
    )
  }

  public get HorarioHorasPromociones(): Observable<HorarioHorasPromociones[]> {
    if (this.datos.HorarioHorasPromociones.length !== 0 && !this.datos.reiniciarHorarioHorasPromociones && this.datos.HorarioHorasPromocionesValores.valor !== 0) {
      this.datos.HorarioHorasPromocionesValores.valor = this.datos.HorarioHorasPromocionesValores.valor - 1
      return of(this.datos.HorarioHorasPromociones)
    } else {
      if (this.datos.reiniciarHorarioHorasPromociones === true) {
        this.datos.reiniciarHorarioHorasPromociones = false
      }
      const peticion = this.http.get<HorarioHorasPromociones[]>(`${this.API_URI}all/HorarioHorasPromociones`)
      peticion.subscribe(
        res => {
          this.datos.HorarioHorasPromociones = new Array<HorarioHorasPromociones>()
          this.datos.HorarioHorasPromociones = res as HorarioHorasPromociones[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioHorasPromociones(horariohoraspromociones: HorarioHorasPromociones): void {
    this.realizarOperacion("HorarioHorasPromociones", horariohoraspromociones).subscribe(
      () => {
        if (horariohoraspromociones.id != null) {
          const i = this.datos.HorarioHorasPromociones.indexOf(horariohoraspromociones)
          this.datos.HorarioHorasPromociones[i] = horariohoraspromociones
        } else {
          this.http.get<HorarioHorasPromociones[]>(`${this.API_URI}all/HorarioHorasPromociones`).subscribe(
            res => {
              this.datos.HorarioHorasPromociones = new Array<HorarioHorasPromociones>()
              this.datos.HorarioHorasPromociones = res as HorarioHorasPromociones[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioHorasPromociones(horariohoraspromociones: HorarioHorasPromociones) {
    this.realizarOperacion("HorarioHorasPromociones", horariohoraspromociones, true).subscribe(
      () => {
        const i = this.datos.HorarioHorasPromociones.indexOf(horariohoraspromociones)
        this.datos.HorarioHorasPromociones.splice(i, 1)
      }
    )
  }

  public get HorarioMesesEstablecimientos(): Observable<HorarioMesesEstablecimientos[]> {
    if (this.datos.HorarioMesesEstablecimientos.length !== 0 && !this.datos.reiniciarHorarioMesesEstablecimientos && this.datos.HorarioMesesEstablecimientosValores.valor !== 0) {
      this.datos.HorarioMesesEstablecimientosValores.valor = this.datos.HorarioMesesEstablecimientosValores.valor - 1
      return of(this.datos.HorarioMesesEstablecimientos)
    } else {
      if (this.datos.reiniciarHorarioMesesEstablecimientos === true) {
        this.datos.reiniciarHorarioMesesEstablecimientos = false
      }
      const peticion = this.http.get<HorarioMesesEstablecimientos[]>(`${this.API_URI}all/HorarioMesesEstablecimientos`)
      peticion.subscribe(
        res => {
          this.datos.HorarioMesesEstablecimientos = new Array<HorarioMesesEstablecimientos>()
          this.datos.HorarioMesesEstablecimientos = res as HorarioMesesEstablecimientos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioMesesEstablecimientos(horariomesesestablecimientos: HorarioMesesEstablecimientos): void {
    this.realizarOperacion("HorarioMesesEstablecimientos", horariomesesestablecimientos).subscribe(
      () => {
        if (horariomesesestablecimientos.id != null) {
          const i = this.datos.HorarioMesesEstablecimientos.indexOf(horariomesesestablecimientos)
          this.datos.HorarioMesesEstablecimientos[i] = horariomesesestablecimientos
        } else {
          this.http.get<HorarioMesesEstablecimientos[]>(`${this.API_URI}all/HorarioMesesEstablecimientos`).subscribe(
            res => {
              this.datos.HorarioMesesEstablecimientos = new Array<HorarioMesesEstablecimientos>()
              this.datos.HorarioMesesEstablecimientos = res as HorarioMesesEstablecimientos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioMesesEstablecimientos(horariomesesestablecimientos: HorarioMesesEstablecimientos) {
    this.realizarOperacion("HorarioMesesEstablecimientos", horariomesesestablecimientos, true).subscribe(
      () => {
        const i = this.datos.HorarioMesesEstablecimientos.indexOf(horariomesesestablecimientos)
        this.datos.HorarioMesesEstablecimientos.splice(i, 1)
      }
    )
  }

  public get HorarioMesesEventos(): Observable<HorarioMesesEventos[]> {
    if (this.datos.HorarioMesesEventos.length !== 0 && !this.datos.reiniciarHorarioMesesEventos && this.datos.HorarioMesesEventosValores.valor !== 0) {
      this.datos.HorarioMesesEventosValores.valor = this.datos.HorarioMesesEventosValores.valor - 1
      return of(this.datos.HorarioMesesEventos)
    } else {
      if (this.datos.reiniciarHorarioMesesEventos === true) {
        this.datos.reiniciarHorarioMesesEventos = false
      }
      const peticion = this.http.get<HorarioMesesEventos[]>(`${this.API_URI}all/HorarioMesesEventos`)
      peticion.subscribe(
        res => {
          this.datos.HorarioMesesEventos = new Array<HorarioMesesEventos>()
          this.datos.HorarioMesesEventos = res as HorarioMesesEventos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioMesesEventos(horariomeseseventos: HorarioMesesEventos): void {
    this.realizarOperacion("HorarioMesesEventos", horariomeseseventos).subscribe(
      () => {
        if (horariomeseseventos.id != null) {
          const i = this.datos.HorarioMesesEventos.indexOf(horariomeseseventos)
          this.datos.HorarioMesesEventos[i] = horariomeseseventos
        } else {
          this.http.get<HorarioMesesEventos[]>(`${this.API_URI}all/HorarioMesesEventos`).subscribe(
            res => {
              this.datos.HorarioMesesEventos = new Array<HorarioMesesEventos>()
              this.datos.HorarioMesesEventos = res as HorarioMesesEventos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioMesesEventos(horariomeseseventos: HorarioMesesEventos) {
    this.realizarOperacion("HorarioMesesEventos", horariomeseseventos, true).subscribe(
      () => {
        const i = this.datos.HorarioMesesEventos.indexOf(horariomeseseventos)
        this.datos.HorarioMesesEventos.splice(i, 1)
      }
    )
  }

  public get HorarioMesesPromociones(): Observable<HorarioMesesPromociones[]> {
    if (this.datos.HorarioMesesPromociones.length !== 0 && !this.datos.reiniciarHorarioMesesPromociones && this.datos.HorarioMesesPromocionesValores.valor !== 0) {
      this.datos.HorarioMesesPromocionesValores.valor = this.datos.HorarioMesesPromocionesValores.valor - 1
      return of(this.datos.HorarioMesesPromociones)
    } else {
      if (this.datos.reiniciarHorarioMesesPromociones === true) {
        this.datos.reiniciarHorarioMesesPromociones = false
      }
      const peticion = this.http.get<HorarioMesesPromociones[]>(`${this.API_URI}all/HorarioMesesPromociones`)
      peticion.subscribe(
        res => {
          this.datos.HorarioMesesPromociones = new Array<HorarioMesesPromociones>()
          this.datos.HorarioMesesPromociones = res as HorarioMesesPromociones[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHorarioMesesPromociones(horariomesespromociones: HorarioMesesPromociones): void {
    this.realizarOperacion("HorarioMesesPromociones", horariomesespromociones).subscribe(
      () => {
        if (horariomesespromociones.id != null) {
          const i = this.datos.HorarioMesesPromociones.indexOf(horariomesespromociones)
          this.datos.HorarioMesesPromociones[i] = horariomesespromociones
        } else {
          this.http.get<HorarioMesesPromociones[]>(`${this.API_URI}all/HorarioMesesPromociones`).subscribe(
            res => {
              this.datos.HorarioMesesPromociones = new Array<HorarioMesesPromociones>()
              this.datos.HorarioMesesPromociones = res as HorarioMesesPromociones[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHorarioMesesPromociones(horariomesespromociones: HorarioMesesPromociones) {
    this.realizarOperacion("HorarioMesesPromociones", horariomesespromociones, true).subscribe(
      () => {
        const i = this.datos.HorarioMesesPromociones.indexOf(horariomesespromociones)
        this.datos.HorarioMesesPromociones.splice(i, 1)
      }
    )
  }

  public get Horas(): Observable<Horas[]> {
    if (this.datos.Horas.length !== 0. && !this.datos.reiniciarHoras && this.datos.HorasValores.valor !== 0) {
      this.datos.HorasValores.valor = this.datos.HorasValores.valor - 1
      return of(this.datos.Horas)
    } else {
      if (this.datos.reiniciarHoras === true) {
        this.datos.reiniciarHoras = false
      }
      const peticion = this.http.get<Horas[]>(`${this.API_URI}all/Horas`)
      peticion.subscribe(
        res => {
          this.datos.Horas = new Array<Horas>()
          this.datos.Horas = res as Horas[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setHoras(horas: Horas): void {
    this.realizarOperacion("Horas", horas).subscribe(
      () => {
        if (horas.id != null) {
          const i = this.datos.Horas.indexOf(horas)
          this.datos.Horas[i] = horas
        } else {
          this.http.get<Horas[]>(`${this.API_URI}all/Horas`).subscribe(
            res => {
              this.datos.Horas = new Array<Horas>()
              this.datos.Horas = res as Horas[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteHoras(horas: Horas) {
    this.realizarOperacion("Horas", horas, true).subscribe(
      () => {
        const i = this.datos.Horas.indexOf(horas)
        this.datos.Horas.splice(i, 1)
      }
    )
  }

  public get Invitados(): Observable<Invitados[]> {
    if (this.datos.Invitados.length !== 0 && !this.datos.reiniciarInvitados && this.datos.InvitadosValores.valor !== 0) {
      this.datos.InvitadosValores.valor = this.datos.InvitadosValores.valor - 1
      return of(this.datos.Invitados)
    } else {
      if (this.datos.reiniciarInvitados === true) {
        this.datos.reiniciarInvitados = false
      }
      const peticion = this.http.get<Invitados[]>(`${this.API_URI}all/Invitados`)
      peticion.subscribe(
        res => {
          this.datos.Invitados = new Array<Invitados>()
          this.datos.Invitados = res as Invitados[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setInvitados(invitados: Invitados): void {
    this.realizarOperacion("Invitados", invitados).subscribe(
      () => {
        if (invitados.id != null) {
          const i = this.datos.Invitados.indexOf(invitados)
          this.datos.Invitados[i] = invitados
        } else {
          this.http.get<Invitados[]>(`${this.API_URI}all/Invitados`).subscribe(
            res => {
              this.datos.Invitados = new Array<Invitados>()
              this.datos.Invitados = res as Invitados[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteInvitados(invitados: Invitados) {
    this.realizarOperacion("Invitados", invitados, true).subscribe(
      () => {
        const i = this.datos.Invitados.indexOf(invitados)
        this.datos.Invitados.splice(i, 1)
      }
    )
  }

  public get LineasTicket(): Observable<LineasTicket[]> {
    if (this.datos.LineasTicket.length !== 0 && !this.datos.reiniciarLineasTicket && this.datos.LineasTicketValores.valor !== 0) {
      this.datos.LineasTicketValores.valor = this.datos.LineasTicketValores.valor - 1
      return of(this.datos.LineasTicket)
    } else {
      if (this.datos.reiniciarLineasTicket === true) {
        this.datos.reiniciarLineasTicket = false
      }
      const peticion = this.http.get<LineasTicket[]>(`${this.API_URI}all/LineasTicket`)
      peticion.subscribe(
        res => {
          this.datos.LineasTicket = new Array<LineasTicket>()
          this.datos.LineasTicket = res as LineasTicket[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setLineasTicket(lineasticket: LineasTicket): void {
    this.realizarOperacion("LineasTicket", lineasticket).subscribe(
      () => {
        if (lineasticket.id != null) {
          const i = this.datos.LineasTicket.indexOf(lineasticket)
          this.datos.LineasTicket[i] = lineasticket
        } else {
          this.http.get<LineasTicket[]>(`${this.API_URI}all/LineasTicket`).subscribe(
            res => {
              this.datos.LineasTicket = new Array<LineasTicket>()
              this.datos.LineasTicket = res as LineasTicket[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteLineasTicket(lineasticket: LineasTicket) {
    this.realizarOperacion("LineasTicket", lineasticket, true).subscribe(
      () => {
        const i = this.datos.LineasTicket.indexOf(lineasticket)
        this.datos.LineasTicket.splice(i, 1)
      }
    )
  }

  public get Marcas(): Observable<Marcas[]> {
    if (this.datos.Marcas.length !== 0 && !this.datos.reiniciarMarcas && this.datos.MarcasValores.valor !== 0) {
      this.datos.MarcasValores.valor = this.datos.MarcasValores.valor - 1
      return of(this.datos.Marcas)
    } else {
      if (this.datos.reiniciarMarcas === true) {
        this.datos.reiniciarMarcas = false
      }
      const peticion = this.http.get<Marcas[]>(`${this.API_URI}all/Marcas`)
      peticion.subscribe(
        res => {
          this.datos.Marcas = new Array<Marcas>()
          this.datos.Marcas = res as Marcas[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setMarcas(marcas: Marcas): void {
    this.realizarOperacion("Marcas", marcas).subscribe(
      () => {
        if (marcas.id != null) {
          const i = this.datos.Marcas.indexOf(marcas)
          this.datos.Marcas[i] = marcas
        } else {
          this.http.get<Marcas[]>(`${this.API_URI}all/Marcas`).subscribe(
            res => {
              this.datos.Marcas = new Array<Marcas>()
              this.datos.Marcas = res as Marcas[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteMarcas(marcas: Marcas) {
    this.realizarOperacion("Marcas", marcas, true).subscribe(
      () => {
        const i = this.datos.Marcas.indexOf(marcas)
        this.datos.Marcas.splice(i, 1)
      }
    )
  }

  public get Mensajes(): Observable<Mensajes[]> {
    if (this.datos.Mensajes.length !== 0 && !this.datos.reiniciarMensajes && this.datos.MensajesValores.valor !== 0) {
      this.datos.MensajesValores.valor = this.datos.MensajesValores.valor - 1
      return of(this.datos.Mensajes)
    } else {
      if (this.datos.reiniciarMensajes === true) {
        this.datos.reiniciarMensajes = false
      }
      const peticion = this.http.get<Mensajes[]>(`${this.API_URI}all/Mensajes`)
      peticion.subscribe(
        res => {
          this.datos.Mensajes = new Array<Mensajes>()
          this.datos.Mensajes = res as Mensajes[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setMensajes(mensajes: MensajesEnviar): void {
    this.realizarOperacion("Mensajes", mensajes).subscribe(
      () => {
        // Esto tiene que estar comentado, si no puede crear una saturacion tremenda por tener todos los mensajes, es mejor que no lo haga. El chat obtiene el mensaje mediante una subscripcion constante en bucle
        // if (mensajes.id != null) {
        //   const i = this.datos.Mensajes.indexOf(mensajes)
        //   this.datos.Mensajes[i] = mensajes
        // }
        //  else {
        //   this.http.get<Mensajes[]>(`${this.API_URI}all/Mensajes`).subscribe(
        //     res => {
        //       this.datos.Mensajes = new Array<Mensajes>()
        //       this.datos.Mensajes = res as Mensajes[]
        //     },
        //     err => {
        //       this.toastr.error("Error")
        //       console.log(err)
        //     }
        //   )
        // }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteMensajes(mensajes: Mensajes) {
    this.realizarOperacion("Mensajes", mensajes, true).subscribe(
      () => {
        const i = this.datos.Mensajes.indexOf(mensajes)
        this.datos.Mensajes.splice(i, 1)
      }
    )
  }

  public get MesasEstablecimiento(): Observable<MesasEstablecimiento[]> {
    if (this.datos.MesasEstablecimiento.length !== 0 && !this.datos.reiniciarMesasEstablecimiento && this.datos.MesasEstablecimientoValores.valor !== 0) {
      this.datos.MesasEstablecimientoValores.valor = this.datos.MesasEstablecimientoValores.valor - 1
      return of(this.datos.MesasEstablecimiento)
    } else {
      if (this.datos.reiniciarMesasEstablecimiento === true) {
        this.datos.reiniciarMesasEstablecimiento = false
      }
      const peticion = this.http.get<MesasEstablecimiento[]>(`${this.API_URI}all/MesasEstablecimiento`)
      peticion.subscribe(
        res => {
          this.datos.MesasEstablecimiento = new Array<MesasEstablecimiento>()
          this.datos.MesasEstablecimiento = res as MesasEstablecimiento[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setMesasEstablecimiento(mesasestablecimiento: MesasEstablecimiento): void {
    this.realizarOperacion("MesasEstablecimiento", mesasestablecimiento).subscribe(
      () => {
        if (mesasestablecimiento.id != null) {
          const i = this.datos.MesasEstablecimiento.indexOf(mesasestablecimiento)
          this.datos.MesasEstablecimiento[i] = mesasestablecimiento
        } else {
          this.http.get<MesasEstablecimiento[]>(`${this.API_URI}all/MesasEstablecimiento`).subscribe(
            res => {
              this.datos.MesasEstablecimiento = new Array<MesasEstablecimiento>()
              this.datos.MesasEstablecimiento = res as MesasEstablecimiento[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteMesasEstablecimiento(mesasestablecimiento: MesasEstablecimiento) {
    this.realizarOperacion("MesasEstablecimiento", mesasestablecimiento, true).subscribe(
      () => {
        const i = this.datos.MesasEstablecimiento.indexOf(mesasestablecimiento)
        this.datos.MesasEstablecimiento.splice(i, 1)
      }
    )
  }

  public get Meses(): Observable<Meses[]> {
    if (this.datos.Meses.length !== 0. && !this.datos.reiniciarMeses && this.datos.MesesValores.valor !== 0) {
      this.datos.MesesValores.valor = this.datos.MesesValores.valor - 1
      return of(this.datos.Meses)
    } else {
      if (this.datos.reiniciarMeses === true) {
        this.datos.reiniciarMeses = false
      }
      const peticion = this.http.get<Meses[]>(`${this.API_URI}all/Meses`)
      peticion.subscribe(
        res => {
          this.datos.Meses = new Array<Meses>()
          this.datos.Meses = res as Meses[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setMeses(meses: Meses): void {
    this.realizarOperacion("Meses", meses).subscribe(
      () => {
        if (meses.id != null) {
          const i = this.datos.Meses.indexOf(meses)
          this.datos.Meses[i] = meses
        } else {
          this.http.get<Meses[]>(`${this.API_URI}all/Meses`).subscribe(
            res => {
              this.datos.Meses = new Array<Meses>()
              this.datos.Meses = res as Meses[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteMeses(meses: Meses) {
    this.realizarOperacion("Meses", meses, true).subscribe(
      () => {
        const i = this.datos.Meses.indexOf(meses)
        this.datos.Meses.splice(i, 1)
      }
    )
  }

  public get MiembrosGrupos(): Observable<MiembrosGrupos[]> {
    if (this.datos.MiembrosGrupos.length !== 0 && !this.datos.reiniciarMiembrosGrupos && this.datos.MiembrosGruposValores.valor !== 0) {
      this.datos.MiembrosGruposValores.valor = this.datos.MiembrosGruposValores.valor - 1
      return of(this.datos.MiembrosGrupos)
    } else {
      if (this.datos.reiniciarMiembrosGrupos === true) {
        this.datos.reiniciarMiembrosGrupos = false
      }
      const peticion = this.http.get<MiembrosGrupos[]>(`${this.API_URI}all/MiembrosGrupos`)
      peticion.subscribe(
        res => {
          this.datos.MiembrosGrupos = new Array<MiembrosGrupos>()
          this.datos.MiembrosGrupos = res as MiembrosGrupos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setMiembrosGrupos(miembrosgrupos: MiembrosGrupos): void {
    this.realizarOperacion("MiembrosGrupos", miembrosgrupos).subscribe(
      () => {
        if (miembrosgrupos.id != null) {
          const i = this.datos.MiembrosGrupos.indexOf(miembrosgrupos)
          this.datos.MiembrosGrupos[i] = miembrosgrupos
        } else {
          this.http.get<MiembrosGrupos[]>(`${this.API_URI}all/MiembrosGrupos`).subscribe(
            res => {
              this.datos.MiembrosGrupos = new Array<MiembrosGrupos>()
              this.datos.MiembrosGrupos = res as MiembrosGrupos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteMiembrosGrupos(miembrosgrupos: MiembrosGrupos) {
    this.realizarOperacion("MiembrosGrupos", miembrosgrupos, true).subscribe(
      () => {
        const i = this.datos.MiembrosGrupos.indexOf(miembrosgrupos)
        this.datos.MiembrosGrupos.splice(i, 1)
      }
    )
  }

  public get MiembrosGruposConsumicion(): Observable<MiembrosGruposConsumicion[]> {
    if (this.datos.MiembrosGruposConsumicion.length !== 0 && !this.datos.reiniciarMiembrosGruposConsumicion && this.datos.MiembrosGruposConsumicionValores.valor !== 0) {
      this.datos.MiembrosGruposConsumicionValores.valor = this.datos.MiembrosGruposConsumicionValores.valor - 1
      return of(this.datos.MiembrosGruposConsumicion)
    } else {
      if (this.datos.reiniciarMiembrosGruposConsumicion === true) {
        this.datos.reiniciarMiembrosGruposConsumicion = false
      }
      const peticion = this.http.get<MiembrosGruposConsumicion[]>(`${this.API_URI}all/MiembrosGruposConsumicion`)
      peticion.subscribe(
        res => {
          this.datos.MiembrosGruposConsumicion = new Array<MiembrosGruposConsumicion>()
          this.datos.MiembrosGruposConsumicion = res as MiembrosGruposConsumicion[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setMiembrosGruposConsumicion(miembrosgruposconsumicion: MiembrosGruposConsumicion): void {
    this.realizarOperacion("MiembrosGruposConsumicion", miembrosgruposconsumicion).subscribe(
      () => {
        if (miembrosgruposconsumicion.id != null) {
          const i = this.datos.MiembrosGruposConsumicion.indexOf(miembrosgruposconsumicion)
          this.datos.MiembrosGruposConsumicion[i] = miembrosgruposconsumicion
        } else {
          this.http.get<MiembrosGruposConsumicion[]>(`${this.API_URI}all/MiembrosGruposConsumicion`).subscribe(
            res => {
              this.datos.MiembrosGruposConsumicion = new Array<MiembrosGruposConsumicion>()
              this.datos.MiembrosGruposConsumicion = res as MiembrosGruposConsumicion[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteMiembrosGruposConsumicion(miembrosgruposconsumicion: MiembrosGruposConsumicion) {
    this.realizarOperacion("MiembrosGruposConsumicion", miembrosgruposconsumicion, true).subscribe(
      () => {
        const i = this.datos.MiembrosGruposConsumicion.indexOf(miembrosgruposconsumicion)
        this.datos.MiembrosGruposConsumicion.splice(i, 1)
      }
    )
  }

  public get MotivosInhabilitacion(): Observable<MotivosInhabilitacion[]> {
    if (this.datos.MotivosInhabilitacion.length !== 0 && !this.datos.reiniciarMotivosInhabilitacion && this.datos.MotivosInhabilitacionValores.valor !== 0) {
      this.datos.MotivosInhabilitacionValores.valor = this.datos.MotivosInhabilitacionValores.valor - 1
      return of(this.datos.MotivosInhabilitacion)
    } else {
      if (this.datos.reiniciarMotivosInhabilitacion === true) {
        this.datos.reiniciarMotivosInhabilitacion = false
      }
      const peticion = this.http.get<MotivosInhabilitacion[]>(`${this.API_URI}all/Paises`)
      peticion.subscribe(
        res => {
          this.datos.MotivosInhabilitacion = new Array<MotivosInhabilitacion>()
          this.datos.MotivosInhabilitacion = res as MotivosInhabilitacion[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setMotivosInhabilitacion(motivosInhabilitacion: MotivosInhabilitacion) {
    this.realizarOperacion("MotivosInhabilitacion", motivosInhabilitacion).subscribe(
      () => {
        if (motivosInhabilitacion.id !== null) {
          const i = this.datos.MotivosInhabilitacion.indexOf(motivosInhabilitacion)
          this.datos.MotivosInhabilitacion[i] = motivosInhabilitacion
        } else {
          this.http.get<MotivosInhabilitacion[]>(`${this.API_URI}/all/MotivosInhabilitacion`).subscribe(
            res => {
              this.datos.MotivosInhabilitacion = new Array<MotivosInhabilitacion>()
              this.datos.MotivosInhabilitacion = res as MotivosInhabilitacion[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteMotivosInhabilitacion(motivosinhabilitacion: MotivosInhabilitacion) {
    this.realizarOperacion("MotivosInhabilitacion", motivosinhabilitacion, true).subscribe(
      () => {
        const i = this.datos.MotivosInhabilitacion.indexOf(motivosinhabilitacion)
        this.datos.MotivosInhabilitacion.splice(i, 1)
      }
    )
  }

  public get Paises(): Observable<Paises[]> {
    if (this.datos.Paises.length !== 0 && !this.datos.reiniciarPaises && this.datos.PaisesValores.valor !== 0) {
      this.datos.PaisesValores.valor = this.datos.PaisesValores.valor - 1
      return of(this.datos.Paises)
    } else {
      if (this.datos.reiniciarPaises === true) {
        this.datos.reiniciarPaises = false
      }
      const peticion = this.http.get<Paises[]>(`${this.API_URI}all/Paises`)
      peticion.subscribe(
        res => {
          this.datos.Paises = new Array<Paises>()
          this.datos.Paises = res as Paises[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }



  public setPaises(paises: Paises): void {
    this.realizarOperacion("Paises", paises).subscribe(
      () => {
        if (paises.id != null) {
          const i = this.datos.Paises.indexOf(paises)
          this.datos.Paises[i] = paises
        } else {
          this.http.get<Paises[]>(`${this.API_URI}all/Paises`).subscribe(
            res => {
              this.datos.Paises = new Array<Paises>()
              this.datos.Paises = res as Paises[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePaises(paises: Paises) {
    this.realizarOperacion("Paises", paises, true).subscribe(
      () => {
        const i = this.datos.Paises.indexOf(paises)
        this.datos.Paises.splice(i, 1)
      }
    )
  }

  public get Personas(): Observable<Personas[]> {
    if (this.datos.Personas.length !== 0 && !this.datos.reiniciarPersonas && this.datos.PersonasValores.valor !== 0) {
      this.datos.PersonasValores.valor = this.datos.PersonasValores.valor - 1
      return of(this.datos.Personas)
    } else {
      if (this.datos.reiniciarPersonas === true) {
        this.datos.reiniciarPersonas = false
      }
      const peticion = this.http.get<Personas[]>(`${this.API_URI}all/Personas`)
      peticion.subscribe(
        res => {
          this.datos.Personas = new Array<Personas>()
          this.datos.Personas = res as Personas[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPersonas(personas: Personas): void {
    this.realizarOperacion("Personas", personas).subscribe(
      () => {
        if (personas.id != null) {
          const i = this.datos.Personas.indexOf(personas)
          this.datos.Personas[i] = personas
        } else {
          this.http.get<Personas[]>(`${this.API_URI}all/Personas`).subscribe(
            res => {
              this.datos.Personas = new Array<Personas>()
              this.datos.Personas = res as Personas[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePersonas(personas: Personas) {
    this.realizarOperacion("Personas", personas, true).subscribe(
      () => {
        const i = this.datos.Personas.indexOf(personas)
        this.datos.Personas.splice(i, 1)
      }
    )
  }

  public get PersonasContactoEmpresa(): Observable<PersonasContactoEmpresa[]> {
    if (this.datos.PersonasContactoEmpresa.length !== 0 && !this.datos.reiniciarPersonasContactoEmpresa && this.datos.PersonasContactoEmpresaValores.valor !== 0) {
      this.datos.PersonasContactoEmpresaValores.valor = this.datos.PersonasContactoEmpresaValores.valor - 1
      return of(this.datos.PersonasContactoEmpresa)
    } else {
      if (this.datos.reiniciarPersonasContactoEmpresa === true) {
        this.datos.reiniciarPersonasContactoEmpresa = false
      }
      const peticion = this.http.get<PersonasContactoEmpresa[]>(`${this.API_URI}all/PersonasContactoEmpresa`)
      peticion.subscribe(
        res => {
          this.datos.PersonasContactoEmpresa = new Array<PersonasContactoEmpresa>()
          this.datos.PersonasContactoEmpresa = res as PersonasContactoEmpresa[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPersonasContactoEmpresa(personascontactoempresa: PersonasContactoEmpresa): void {
    this.realizarOperacion("PersonasContactoEmpresa", personascontactoempresa).subscribe(
      () => {
        if (personascontactoempresa.id != null) {
          const i = this.datos.PersonasContactoEmpresa.indexOf(personascontactoempresa)
          this.datos.PersonasContactoEmpresa[i] = personascontactoempresa
        } else {
          this.http.get<PersonasContactoEmpresa[]>(`${this.API_URI}all/PersonasContactoEmpresa`).subscribe(
            res => {
              this.datos.PersonasContactoEmpresa = new Array<PersonasContactoEmpresa>()
              this.datos.PersonasContactoEmpresa = res as PersonasContactoEmpresa[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePersonasContactoEmpresa(personascontactoempresa: PersonasContactoEmpresa) {
    this.realizarOperacion("PersonasContactoEmpresa", personascontactoempresa, true).subscribe(
      () => {
        const i = this.datos.PersonasContactoEmpresa.indexOf(personascontactoempresa)
        this.datos.PersonasContactoEmpresa.splice(i, 1)
      }
    )
  }

  public get PersonasContactoEstablecimiento(): Observable<PersonasContactoEstablecimiento[]> {
    if (this.datos.PersonasContactoEstablecimiento.length !== 0 && !this.datos.reiniciarPersonasContactoEstablecimiento && this.datos.PersonasContactoEstablecimientoValores.valor !== 0) {
      this.datos.PersonasContactoEstablecimientoValores.valor = this.datos.PersonasContactoEstablecimientoValores.valor - 1
      return of(this.datos.PersonasContactoEstablecimiento)
    } else {
      if (this.datos.reiniciarPersonasContactoEstablecimiento === true) {
        this.datos.reiniciarPersonasContactoEstablecimiento = false
      }
      const peticion = this.http.get<PersonasContactoEstablecimiento[]>(`${this.API_URI}all/PersonasContactoEstablecimiento`)
      peticion.subscribe(
        res => {
          this.datos.PersonasContactoEstablecimiento = new Array<PersonasContactoEstablecimiento>()
          this.datos.PersonasContactoEstablecimiento = res as PersonasContactoEstablecimiento[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPersonasContactoEstablecimiento(personascontactoestablecimiento: PersonasContactoEstablecimiento): void {
    this.realizarOperacion("PersonasContactoEstablecimiento", personascontactoestablecimiento).subscribe(
      () => {
        if (personascontactoestablecimiento.id != null) {
          const i = this.datos.PersonasContactoEstablecimiento.indexOf(personascontactoestablecimiento)
          this.datos.PersonasContactoEstablecimiento[i] = personascontactoestablecimiento
        } else {
          this.http.get<PersonasContactoEstablecimiento[]>(`${this.API_URI}all/PersonasContactoEstablecimiento`).subscribe(
            res => {
              this.datos.PersonasContactoEstablecimiento = new Array<PersonasContactoEstablecimiento>()
              this.datos.PersonasContactoEstablecimiento = res as PersonasContactoEstablecimiento[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePersonasContactoEstablecimiento(personascontactoestablecimiento: PersonasContactoEstablecimiento) {
    this.realizarOperacion("PersonasContactoEstablecimiento", personascontactoestablecimiento, true).subscribe(
      () => {
        const i = this.datos.PersonasContactoEstablecimiento.indexOf(personascontactoestablecimiento)
        this.datos.PersonasContactoEstablecimiento.splice(i, 1)
      }
    )
  }

  public get PersonasContactoMarcas(): Observable<PersonasContactoMarcas[]> {
    if (this.datos.PersonasContactoMarcas.length !== 0 && !this.datos.reiniciarPersonasContactoMarcas && this.datos.PersonasContactoMarcasValores.valor !== 0) {
      this.datos.PersonasContactoMarcasValores.valor = this.datos.PersonasContactoMarcasValores.valor - 1
      return of(this.datos.PersonasContactoMarcas)
    } else {
      if (this.datos.reiniciarPersonasContactoMarcas === true) {
        this.datos.reiniciarPersonasContactoMarcas = false
      }
      const peticion = this.http.get<PersonasContactoMarcas[]>(`${this.API_URI}all/PersonasContactoMarcas`)
      peticion.subscribe(
        res => {
          this.datos.PersonasContactoMarcas = new Array<PersonasContactoMarcas>()
          this.datos.PersonasContactoMarcas = res as PersonasContactoMarcas[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPersonasContactoMarcas(personascontactomarcas: PersonasContactoMarcas): void {
    this.realizarOperacion("PersonasContactoMarcas", personascontactomarcas).subscribe(
      () => {
        if (personascontactomarcas.id != null) {
          const i = this.datos.PersonasContactoMarcas.indexOf(personascontactomarcas)
          this.datos.PersonasContactoMarcas[i] = personascontactomarcas
        } else {
          this.http.get<PersonasContactoMarcas[]>(`${this.API_URI}all/PersonasContactoMarcas`).subscribe(
            res => {
              this.datos.PersonasContactoMarcas = new Array<PersonasContactoMarcas>()
              this.datos.PersonasContactoMarcas = res as PersonasContactoMarcas[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePersonasContactoMarcas(personascontactomarcas: PersonasContactoMarcas) {
    this.realizarOperacion("PersonasContactoMarcas", personascontactomarcas, true).subscribe(
      () => {
        const i = this.datos.PersonasContactoMarcas.indexOf(personascontactomarcas)
        this.datos.PersonasContactoMarcas.splice(i, 1)
      }
    )
  }

  public get PersonasEstablecimientos(): Observable<PersonasEstablecimientos[]> {
    if (this.datos.PersonasEstablecimientos.length !== 0 && !this.datos.reiniciarPersonasEstablecimientos && this.datos.PersonasEstablecimientosValores.valor !== 0) {
      this.datos.PersonasEstablecimientosValores.valor = this.datos.PersonasEstablecimientosValores.valor - 1
      return of(this.datos.PersonasEstablecimientos)
    } else {
      if (this.datos.reiniciarPersonasEstablecimientos === true) {
        this.datos.reiniciarPersonasEstablecimientos = false
      }
      const peticion = this.http.get<PersonasEstablecimientos[]>(`${this.API_URI}all/PersonasEstablecimientos`)
      peticion.subscribe(
        res => {
          this.datos.PersonasEstablecimientos = new Array<PersonasEstablecimientos>()
          this.datos.PersonasEstablecimientos = res as PersonasEstablecimientos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPersonasEstablecimientos(personasestablecimientos: PersonasEstablecimientos): void {
    this.realizarOperacion("PersonasEstablecimientos", personasestablecimientos).subscribe(
      () => {
        if (personasestablecimientos.id != null) {
          const i = this.datos.PersonasEstablecimientos.indexOf(personasestablecimientos)
          this.datos.PersonasEstablecimientos[i] = personasestablecimientos
        } else {
          this.http.get<PersonasEstablecimientos[]>(`${this.API_URI}all/PersonasEstablecimientos`).subscribe(
            res => {
              this.datos.PersonasEstablecimientos = new Array<PersonasEstablecimientos>()
              this.datos.PersonasEstablecimientos = res as PersonasEstablecimientos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePersonasEstablecimientos(personasestablecimientos: PersonasEstablecimientos) {
    this.realizarOperacion("PersonasEstablecimientos", personasestablecimientos, true).subscribe(
      () => {
        const i = this.datos.PersonasEstablecimientos.indexOf(personasestablecimientos)
        this.datos.PersonasEstablecimientos.splice(i, 1)
      }
    )
  }

  public get Productos(): Observable<Productos[]> {
    if (this.datos.Productos.length !== 0 && !this.datos.reiniciarProductos && this.datos.ProductosValores.valor !== 0) {
      this.datos.ProductosValores.valor = this.datos.ProductosValores.valor - 1
      return of(this.datos.Productos)
    } else {
      if (this.datos.reiniciarProductos === true) {
        this.datos.reiniciarProductos = false
      }
      const peticion = this.http.get<Productos[]>(`${this.API_URI}all/Productos`)
      peticion.subscribe(
        res => {
          this.datos.Productos = new Array<Productos>()
          this.datos.Productos = res as Productos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setProductos(productos: Productos): void {
    this.realizarOperacion("Productos", productos).subscribe(
      () => {
        if (productos.id != null) {
          const i = this.datos.Productos.indexOf(productos)
          this.datos.Productos[i] = productos
        } else {
          this.http.get<Productos[]>(`${this.API_URI}all/Productos`).subscribe(
            res => {
              this.datos.Productos = new Array<Productos>()
              this.datos.Productos = res as Productos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteProductos(productos: Productos) {
    this.realizarOperacion("Productos", productos, true).subscribe(
      () => {
        const i = this.datos.Productos.indexOf(productos)
        this.datos.Productos.splice(i, 1)
      }
    )
  }

  public get Promociones(): Observable<Promociones[]> {
    if (this.datos.Promociones.length !== 0 && !this.datos.reiniciarPromociones && this.datos.PromocionesValores.valor !== 0) {
      this.datos.PromocionesValores.valor = this.datos.PromocionesValores.valor - 1
      return of(this.datos.Promociones)
    } else {
      if (this.datos.reiniciarPromociones === true) {
        this.datos.reiniciarPromociones = false
      }
      const peticion = this.http.get<Promociones[]>(`${this.API_URI}all/Promociones`)
      peticion.subscribe(
        res => {
          this.datos.Promociones = new Array<Promociones>()
          this.datos.Promociones = res as Promociones[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPromociones(promociones: Promociones): void {
    this.realizarOperacion("Promociones", promociones).subscribe(
      () => {
        if (promociones.id != null) {
          const i = this.datos.Promociones.indexOf(promociones)
          this.datos.Promociones[i] = promociones
        } else {
          this.http.get<Promociones[]>(`${this.API_URI}all/Promociones`).subscribe(
            res => {
              this.datos.Promociones = new Array<Promociones>()
              this.datos.Promociones = res as Promociones[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePromociones(promociones: Promociones) {
    this.realizarOperacion("Promociones", promociones, true).subscribe(
      () => {
        const i = this.datos.Promociones.indexOf(promociones)
        this.datos.Promociones.splice(i, 1)
      }
    )
  }

  public get PromocionesProductos(): Observable<PromocionesProductos[]> {
    if (this.datos.PromocionesProductos.length !== 0 && !this.datos.reiniciarPromocionesProductos && this.datos.PromocionesProductosValores.valor !== 0) {
      this.datos.PromocionesProductosValores.valor = this.datos.PromocionesProductosValores.valor - 1
      return of(this.datos.PromocionesProductos)
    } else {
      if (this.datos.reiniciarPromocionesProductos === true) {
        this.datos.reiniciarPromocionesProductos = false
      }
      const peticion = this.http.get<PromocionesProductos[]>(`${this.API_URI}all/PromocionesProductos`)
      peticion.subscribe(
        res => {
          this.datos.PromocionesProductos = new Array<PromocionesProductos>()
          this.datos.PromocionesProductos = res as PromocionesProductos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPromocionesProductos(promocionesproductos: PromocionesProductos): void {
    this.realizarOperacion("PromocionesProductos", promocionesproductos).subscribe(
      () => {
        if (promocionesproductos.id != null) {
          const i = this.datos.PromocionesProductos.indexOf(promocionesproductos)
          this.datos.PromocionesProductos[i] = promocionesproductos
        } else {
          this.http.get<PromocionesProductos[]>(`${this.API_URI}all/PromocionesProductos`).subscribe(
            res => {
              this.datos.PromocionesProductos = new Array<PromocionesProductos>()
              this.datos.PromocionesProductos = res as PromocionesProductos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePromocionesProductos(promocionesproductos: PromocionesProductos) {
    this.realizarOperacion("PromocionesProductos", promocionesproductos, true).subscribe(
      () => {
        const i = this.datos.PromocionesProductos.indexOf(promocionesproductos)
        this.datos.PromocionesProductos.splice(i, 1)
      }
    )
  }

  public get PublicidadEmpresa(): Observable<PublicidadEmpresa[]> {
    if (this.datos.PublicidadEmpresa.length !== 0 && !this.datos.reiniciarPublicidadEmpresa && this.datos.PublicidadEmpresaValores.valor !== 0) {
      this.datos.PublicidadEmpresaValores.valor = this.datos.PublicidadEmpresaValores.valor - 1
      return of(this.datos.PublicidadEmpresa)
    } else {
      if (this.datos.reiniciarPublicidadEmpresa === true) {
        this.datos.reiniciarPublicidadEmpresa = false
      }
      const peticion = this.http.get<PublicidadEmpresa[]>(`${this.API_URI}all/PublicidadEmpresa`)
      peticion.subscribe(
        res => {
          this.datos.PublicidadEmpresa = new Array<PublicidadEmpresa>()
          this.datos.PublicidadEmpresa = res as PublicidadEmpresa[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPublicidadEmpresa(publicidadempresa: PublicidadEmpresa): void {
    this.realizarOperacion("PublicidadEmpresa", publicidadempresa).subscribe(
      () => {
        if (publicidadempresa.id != null) {
          const i = this.datos.PublicidadEmpresa.indexOf(publicidadempresa)
          this.datos.PublicidadEmpresa[i] = publicidadempresa
        } else {
          this.http.get<PublicidadEmpresa[]>(`${this.API_URI}all/PublicidadEmpresa`).subscribe(
            res => {
              this.datos.PublicidadEmpresa = new Array<PublicidadEmpresa>()
              this.datos.PublicidadEmpresa = res as PublicidadEmpresa[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePublicidadEmpresa(publicidadempresa: PublicidadEmpresa) {
    this.realizarOperacion("PublicidadEmpresa", publicidadempresa, true).subscribe(
      () => {
        const i = this.datos.PublicidadEmpresa.indexOf(publicidadempresa)
        this.datos.PublicidadEmpresa.splice(i, 1)
      }
    )
  }

  public get PublicidadEstablecimiento(): Observable<PublicidadEstablecimiento[]> {
    if (this.datos.PublicidadEstablecimiento.length !== 0 && !this.datos.reiniciarPublicidadEstablecimiento && this.datos.PublicidadEstablecimientoValores.valor !== 0) {
      this.datos.PublicidadEstablecimientoValores.valor = this.datos.PublicidadEstablecimientoValores.valor - 1
      return of(this.datos.PublicidadEstablecimiento)
    } else {
      if (this.datos.reiniciarPublicidadEstablecimiento === true) {
        this.datos.reiniciarPublicidadEstablecimiento = false
      }
      const peticion = this.http.get<PublicidadEstablecimiento[]>(`${this.API_URI}all/PublicidadEstablecimiento`)
      peticion.subscribe(
        res => {
          this.datos.PublicidadEstablecimiento = new Array<PublicidadEstablecimiento>()
          this.datos.PublicidadEstablecimiento = res as PublicidadEstablecimiento[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPublicidadEstablecimiento(publicidadestablecimiento: PublicidadEstablecimiento): void {
    this.realizarOperacion("PublicidadEstablecimiento", publicidadestablecimiento).subscribe(
      () => {
        if (publicidadestablecimiento.id != null) {
          const i = this.datos.PublicidadEstablecimiento.indexOf(publicidadestablecimiento)
          this.datos.PublicidadEstablecimiento[i] = publicidadestablecimiento
        } else {
          this.http.get<PublicidadEstablecimiento[]>(`${this.API_URI}all/PublicidadEstablecimiento`).subscribe(
            res => {
              this.datos.PublicidadEstablecimiento = new Array<PublicidadEstablecimiento>()
              this.datos.PublicidadEstablecimiento = res as PublicidadEstablecimiento[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePublicidadEstablecimiento(publicidadestablecimiento: PublicidadEstablecimiento) {
    this.realizarOperacion("PublicidadEstablecimiento", publicidadestablecimiento, true).subscribe(
      () => {
        const i = this.datos.PublicidadEstablecimiento.indexOf(publicidadestablecimiento)
        this.datos.PublicidadEstablecimiento.splice(i, 1)
      }
    )
  }

  public get PublicidadEvento(): Observable<PublicidadEvento[]> {
    if (this.datos.PublicidadEvento.length !== 0 && !this.datos.reiniciarPublicidadEvento && this.datos.PublicidadEventoValores.valor !== 0) {
      this.datos.PublicidadEventoValores.valor = this.datos.PublicidadEventoValores.valor - 1
      return of(this.datos.PublicidadEvento)
    } else {
      if (this.datos.reiniciarPublicidadEvento === true) {
        this.datos.reiniciarPublicidadEvento = false
      }
      const peticion = this.http.get<PublicidadEvento[]>(`${this.API_URI}all/PublicidadEvento`)
      peticion.subscribe(
        res => {
          this.datos.PublicidadEvento = new Array<PublicidadEvento>()
          this.datos.PublicidadEvento = res as PublicidadEvento[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPublicidadEvento(publicidadevento: PublicidadEvento): void {
    this.realizarOperacion("PublicidadEvento", publicidadevento).subscribe(
      () => {
        if (publicidadevento.id != null) {
          const i = this.datos.PublicidadEvento.indexOf(publicidadevento)
          this.datos.PublicidadEvento[i] = publicidadevento
        } else {
          this.http.get<PublicidadEvento[]>(`${this.API_URI}all/PublicidadEvento`).subscribe(
            res => {
              this.datos.PublicidadEvento = new Array<PublicidadEvento>()
              this.datos.PublicidadEvento = res as PublicidadEvento[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePublicidadEvento(publicidadevento: PublicidadEvento) {
    this.realizarOperacion("PublicidadEvento", publicidadevento, true).subscribe(
      () => {
        const i = this.datos.PublicidadEvento.indexOf(publicidadevento)
        this.datos.PublicidadEvento.splice(i, 1)
      }
    )
  }

  public get PublicidadProducto(): Observable<PublicidadProducto[]> {
    if (this.datos.PublicidadProducto.length !== 0 && !this.datos.reiniciarPublicidadProducto && this.datos.PublicidadProductoValores.valor !== 0) {
      this.datos.PublicidadProductoValores.valor = this.datos.PublicidadProductoValores.valor - 1
      return of(this.datos.PublicidadProducto)
    } else {
      if (this.datos.reiniciarPublicidadProducto === true) {
        this.datos.reiniciarPublicidadProducto = false
      }
      const peticion = this.http.get<PublicidadProducto[]>(`${this.API_URI}all/PublicidadProducto`)
      peticion.subscribe(
        res => {
          this.datos.PublicidadProducto = new Array<PublicidadProducto>()
          this.datos.PublicidadProducto = res as PublicidadProducto[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPublicidadProducto(publicidadproducto: PublicidadProducto): void {
    this.realizarOperacion("PublicidadProducto", publicidadproducto).subscribe(
      () => {
        if (publicidadproducto.id != null) {
          const i = this.datos.PublicidadProducto.indexOf(publicidadproducto)
          this.datos.PublicidadProducto[i] = publicidadproducto
        } else {
          this.http.get<PublicidadProducto[]>(`${this.API_URI}all/PublicidadProducto`).subscribe(
            res => {
              this.datos.PublicidadProducto = new Array<PublicidadProducto>()
              this.datos.PublicidadProducto = res as PublicidadProducto[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePublicidadProducto(publicidadproducto: PublicidadProducto) {
    this.realizarOperacion("PublicidadProducto", publicidadproducto, true).subscribe(
      () => {
        const i = this.datos.PublicidadProducto.indexOf(publicidadproducto)
        this.datos.PublicidadProducto.splice(i, 1)
      }
    )
  }

  public get PublicidadPromocion(): Observable<PublicidadPromocion[]> {
    if (this.datos.PublicidadPromocion.length !== 0 && !this.datos.reiniciarPublicidadPromocion && this.datos.PublicidadPromocionValores.valor !== 0) {
      this.datos.PublicidadPromocionValores.valor = this.datos.PublicidadPromocionValores.valor - 1
      return of(this.datos.PublicidadPromocion)
    } else {
      if (this.datos.reiniciarPublicidadPromocion === true) {
        this.datos.reiniciarPublicidadPromocion = false
      }
      const peticion = this.http.get<PublicidadPromocion[]>(`${this.API_URI}all/PublicidadPromocion`)
      peticion.subscribe(
        res => {
          this.datos.PublicidadPromocion = new Array<PublicidadPromocion>()
          this.datos.PublicidadPromocion = res as PublicidadPromocion[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPublicidadPromocion(publicidadpromocion: PublicidadPromocion): void {
    this.realizarOperacion("PublicidadPromocion", publicidadpromocion).subscribe(
      () => {
        if (publicidadpromocion.id != null) {
          const i = this.datos.PublicidadPromocion.indexOf(publicidadpromocion)
          this.datos.PublicidadPromocion[i] = publicidadpromocion
        } else {
          this.http.get<PublicidadPromocion[]>(`${this.API_URI}all/PublicidadPromocion`).subscribe(
            res => {
              this.datos.PublicidadPromocion = new Array<PublicidadPromocion>()
              this.datos.PublicidadPromocion = res as PublicidadPromocion[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePublicidadPromocion(publicidadpromocion: PublicidadPromocion) {
    this.realizarOperacion("PublicidadPromocion", publicidadpromocion, true).subscribe(
      () => {
        const i = this.datos.PublicidadPromocion.indexOf(publicidadpromocion)
        this.datos.PublicidadPromocion.splice(i, 1)
      }
    )
  }

  public get Puestos(): Observable<Puestos[]> {
    if (this.datos.Puestos.length !== 0 && !this.datos.reiniciarPuestos && this.datos.PuestosValores.valor !== 0) {
      this.datos.PuestosValores.valor = this.datos.PuestosValores.valor - 1
      return of(this.datos.Puestos)
    } else {
      if (this.datos.reiniciarPuestos === true) {
        this.datos.reiniciarPuestos = false
      }
      const peticion = this.http.get<Puestos[]>(`${this.API_URI}all/Puestos`)
      peticion.subscribe(
        res => {
          this.datos.Puestos = new Array<Puestos>()
          this.datos.Puestos = res as Puestos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setPuestos(puestos: Puestos): void {
    this.realizarOperacion("Puestos", puestos).subscribe(
      () => {
        if (puestos.id != null) {
          const i = this.datos.Puestos.indexOf(puestos)
          this.datos.Puestos[i] = puestos
        } else {
          this.http.get<Puestos[]>(`${this.API_URI}all/Puestos`).subscribe(
            res => {
              this.datos.Puestos = new Array<Puestos>()
              this.datos.Puestos = res as Puestos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deletePuestos(puestos: Puestos) {
    this.realizarOperacion("Puestos", puestos, true).subscribe(
      () => {
        const i = this.datos.Puestos.indexOf(puestos)
        this.datos.Puestos.splice(i, 1)
      }
    )
  }

  public get Requisitos(): Observable<Requisitos[]> {
    if (this.datos.Requisitos.length !== 0 && !this.datos.reiniciarRequisitos && this.datos.RequisitosValores.valor !== 0) {
      this.datos.RequisitosValores.valor = this.datos.RequisitosValores.valor - 1
      return of(this.datos.Requisitos)
    } else {
      if (this.datos.reiniciarRequisitos === true) {
        this.datos.reiniciarRequisitos = false
      }
      const peticion = this.http.get<Requisitos[]>(`${this.API_URI}all/Requisitos`)
      peticion.subscribe(
        res => {
          this.datos.Requisitos = new Array<Requisitos>()
          this.datos.Requisitos = res as Requisitos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setRequisitos(requisitos: Requisitos): void {
    this.realizarOperacion("Requisitos", requisitos).subscribe(
      () => {
        if (requisitos.id != null) {
          const i = this.datos.Requisitos.indexOf(requisitos)
          this.datos.Requisitos[i] = requisitos
        } else {
          this.http.get<Requisitos[]>(`${this.API_URI}all/Requisitos`).subscribe(
            res => {
              this.datos.Requisitos = new Array<Requisitos>()
              this.datos.Requisitos = res as Requisitos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteRequisitos(requisitos: Requisitos) {
    this.realizarOperacion("Requisitos", requisitos, true).subscribe(
      () => {
        const i = this.datos.Requisitos.indexOf(requisitos)
        this.datos.Requisitos.splice(i, 1)
      }
    )
  }

  public get RequisitosEvento(): Observable<RequisitosEvento[]> {
    if (this.datos.RequisitosEvento.length !== 0 && !this.datos.reiniciarRequisitosEvento && this.datos.RequisitosEventoValores.valor !== 0) {
      this.datos.RequisitosEventoValores.valor = this.datos.RequisitosEventoValores.valor - 1
      return of(this.datos.RequisitosEvento)
    } else {
      if (this.datos.reiniciarRequisitosEvento === true) {
        this.datos.reiniciarRequisitosEvento = false
      }
      const peticion = this.http.get<RequisitosEvento[]>(`${this.API_URI}all/RequisitosEvento`)
      peticion.subscribe(
        res => {
          this.datos.RequisitosEvento = new Array<RequisitosEvento>()
          this.datos.RequisitosEvento = res as RequisitosEvento[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setRequisitosEvento(requisitosevento: RequisitosEvento): void {
    this.realizarOperacion("RequisitosEvento", requisitosevento).subscribe(
      () => {
        if (requisitosevento.id != null) {
          const i = this.datos.RequisitosEvento.indexOf(requisitosevento)
          this.datos.RequisitosEvento[i] = requisitosevento
        } else {
          this.http.get<RequisitosEvento[]>(`${this.API_URI}all/RequisitosEvento`).subscribe(
            res => {
              this.datos.RequisitosEvento = new Array<RequisitosEvento>()
              this.datos.RequisitosEvento = res as RequisitosEvento[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteRequisitosEvento(requisitosevento: RequisitosEvento) {
    this.realizarOperacion("RequisitosEvento", requisitosevento, true).subscribe(
      () => {
        const i = this.datos.RequisitosEvento.indexOf(requisitosevento)
        this.datos.RequisitosEvento.splice(i, 1)
      }
    )
  }

  public get Telefonos(): Observable<Telefonos[]> {
    if (this.datos.Telefonos.length !== 0 && !this.datos.reiniciarTelefonos && this.datos.TelefonosValores.valor !== 0) {
      this.datos.TelefonosValores.valor = this.datos.TelefonosValores.valor - 1
      return of(this.datos.Telefonos)
    } else {
      if (this.datos.reiniciarTelefonos === true) {
        this.datos.reiniciarTelefonos = false
      }
      const peticion = this.http.get<Telefonos[]>(`${this.API_URI}all/Telefonos`)
      peticion.subscribe(
        res => {
          this.datos.Telefonos = new Array<Telefonos>()
          this.datos.Telefonos = res as Telefonos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setTelefonos(telefonos: Telefonos): void {
    this.realizarOperacion("Telefonos", telefonos).subscribe(
      () => {
        if (telefonos.id != null) {
          const i = this.datos.Telefonos.indexOf(telefonos)
          this.datos.Telefonos[i] = telefonos
        } else {
          this.http.get<Telefonos[]>(`${this.API_URI}all/Telefonos`).subscribe(
            res => {
              this.datos.Telefonos = new Array<Telefonos>()
              this.datos.Telefonos = res as Telefonos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteTelefonos(telefonos: Telefonos) {
    this.realizarOperacion("Telefonos", telefonos, true).subscribe(
      () => {
        const i = this.datos.Telefonos.indexOf(telefonos)
        this.datos.Telefonos.splice(i, 1)
      }
    )
  }

  public get TelefonosPersona(): Observable<TelefonosPersona[]> {
    if (this.datos.TelefonosPersona.length !== 0 && !this.datos.reiniciarTelefonosPersona && this.datos.TelefonosPersonaValores.valor !== 0) {
      this.datos.TelefonosPersonaValores.valor = this.datos.TelefonosPersonaValores.valor - 1
      return of(this.datos.TelefonosPersona)
    } else {
      if (this.datos.reiniciarTelefonosPersona === true) {
        this.datos.reiniciarTelefonosPersona = false
      }
      const peticion = this.http.get<TelefonosPersona[]>(`${this.API_URI}all/TelefonosPersona`)
      peticion.subscribe(
        res => {
          this.datos.TelefonosPersona = new Array<TelefonosPersona>()
          this.datos.TelefonosPersona = res as TelefonosPersona[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setTelefonosPersona(telefonospersona: TelefonosPersona): void {
    this.realizarOperacion("TelefonosPersona", telefonospersona).subscribe(
      () => {
        if (telefonospersona.id != null) {
          const i = this.datos.TelefonosPersona.indexOf(telefonospersona)
          this.datos.TelefonosPersona[i] = telefonospersona
        } else {
          this.http.get<TelefonosPersona[]>(`${this.API_URI}all/TelefonosPersona`).subscribe(
            res => {
              this.datos.TelefonosPersona = new Array<TelefonosPersona>()
              this.datos.TelefonosPersona = res as TelefonosPersona[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteTelefonosPersona(telefonospersona: TelefonosPersona) {
    this.realizarOperacion("TelefonosPersona", telefonospersona, true).subscribe(
      () => {
        const i = this.datos.TelefonosPersona.indexOf(telefonospersona)
        this.datos.TelefonosPersona.splice(i, 1)
      }
    )
  }

  public get Tickets(): Observable<Tickets[]> {
    if (this.datos.Tickets.length !== 0 && !this.datos.reiniciarTickets && this.datos.TicketsValores.valor !== 0) {
      this.datos.TicketsValores.valor = this.datos.TicketsValores.valor - 1
      return of(this.datos.Tickets)
    } else {
      if (this.datos.reiniciarTickets === true) {
        this.datos.reiniciarTickets = false
      }
      const peticion = this.http.get<Tickets[]>(`${this.API_URI}all/Tickets`)
      peticion.subscribe(
        res => {
          this.datos.Tickets = new Array<Tickets>()
          this.datos.Tickets = res as Tickets[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setTickets(tickets: Tickets): void {
    this.realizarOperacion("Tickets", tickets).subscribe(
      () => {
        if (tickets.id != null) {
          const i = this.datos.Tickets.indexOf(tickets)
          this.datos.Tickets[i] = tickets
        } else {
          this.http.get<Tickets[]>(`${this.API_URI}all/Tickets`).subscribe(
            res => {
              this.datos.Tickets = new Array<Tickets>()
              this.datos.Tickets = res as Tickets[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteTickets(tickets: Tickets) {
    this.realizarOperacion("Tickets", tickets, true).subscribe(
      () => {
        const i = this.datos.Tickets.indexOf(tickets)
        this.datos.Tickets.splice(i, 1)
      }
    )
  }

  public get TiposCategorias(): Observable<TiposCategorias[]> {
    if (this.datos.TiposCategorias.length !== 0 && !this.datos.reiniciarTiposCategorias && this.datos.TiposCategoriasValores.valor !== 0) {
      this.datos.TiposCategoriasValores.valor = this.datos.TiposCategoriasValores.valor - 1
      return of(this.datos.TiposCategorias)
    } else {
      if (this.datos.reiniciarTiposCategorias === true) {
        this.datos.reiniciarTiposCategorias = false
      }
      const peticion = this.http.get<TiposCategorias[]>(`${this.API_URI}all/TiposCategorias`)
      peticion.subscribe(
        res => {
          this.datos.TiposCategorias = new Array<TiposCategorias>()
          this.datos.TiposCategorias = res as TiposCategorias[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setTiposCategorias(tiposcategorias: TiposCategorias): void {
    this.realizarOperacion("TiposCategorias", tiposcategorias).subscribe(
      () => {
        if (tiposcategorias.id != null) {
          const i = this.datos.TiposCategorias.indexOf(tiposcategorias)
          this.datos.TiposCategorias[i] = tiposcategorias
        } else {
          this.http.get<TiposCategorias[]>(`${this.API_URI}all/TiposCategorias`).subscribe(
            res => {
              this.datos.TiposCategorias = new Array<TiposCategorias>()
              this.datos.TiposCategorias = res as TiposCategorias[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteTiposCategorias(tiposcategorias: TiposCategorias) {
    this.realizarOperacion("TiposCategorias", tiposcategorias, true).subscribe(
      () => {
        const i = this.datos.TiposCategorias.indexOf(tiposcategorias)
        this.datos.TiposCategorias.splice(i, 1)
      }
    )
  }

  public get TiposEstablecimientos(): Observable<TiposEstablecimientos[]> {
    if (this.datos.TiposEstablecimientos.length !== 0 && !this.datos.reiniciarTiposEstablecimientos && this.datos.TiposEstablecimientosValores.valor !== 0) {
      this.datos.TiposEstablecimientosValores.valor = this.datos.TiposEstablecimientosValores.valor - 1
      return of(this.datos.TiposEstablecimientos)
    } else {
      if (this.datos.reiniciarTiposEstablecimientos === true) {
        this.datos.reiniciarTiposEstablecimientos = false
      }
      const peticion = this.http.get<TiposEstablecimientos[]>(`${this.API_URI}all/TiposEstablecimientos`)
      peticion.subscribe(
        res => {
          this.datos.TiposEstablecimientos = new Array<TiposEstablecimientos>()
          this.datos.TiposEstablecimientos = res as TiposEstablecimientos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setTiposEstablecimientos(tiposestablecimientos: TiposEstablecimientos): void {
    this.realizarOperacion("TiposEstablecimientos", tiposestablecimientos).subscribe(
      () => {
        if (tiposestablecimientos.id != null) {
          const i = this.datos.TiposEstablecimientos.indexOf(tiposestablecimientos)
          this.datos.TiposEstablecimientos[i] = tiposestablecimientos
        } else {
          this.http.get<TiposEstablecimientos[]>(`${this.API_URI}all/TiposEstablecimientos`).subscribe(
            res => {
              this.datos.TiposEstablecimientos = new Array<TiposEstablecimientos>()
              this.datos.TiposEstablecimientos = res as TiposEstablecimientos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteTiposEstablecimientos(tiposestablecimientos: TiposEstablecimientos) {
    this.realizarOperacion("TiposEstablecimientos", tiposestablecimientos, true).subscribe(
      () => {
        const i = this.datos.TiposEstablecimientos.indexOf(tiposestablecimientos)
        this.datos.TiposEstablecimientos.splice(i, 1)
      }
    )
  }

  public get TiposEventos(): Observable<TiposEventos[]> {
    if (this.datos.TiposEventos.length !== 0 && !this.datos.reiniciarTiposEventos && this.datos.TiposEventosValores.valor !== 0) {
      this.datos.TiposEventosValores.valor = this.datos.TiposEventosValores.valor - 1
      return of(this.datos.TiposEventos)
    } else {
      if (this.datos.reiniciarTiposEventos === true) {
        this.datos.reiniciarTiposEventos = false
      }
      const peticion = this.http.get<TiposEventos[]>(`${this.API_URI}all/TiposEventos`)
      peticion.subscribe(
        res => {
          this.datos.TiposEventos = new Array<TiposEventos>()
          this.datos.TiposEventos = res as TiposEventos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setTiposEventos(tiposeventos: TiposEventos): void {
    this.realizarOperacion("TiposEventos", tiposeventos).subscribe(
      () => {
        if (tiposeventos.id != null) {
          const i = this.datos.TiposEventos.indexOf(tiposeventos)
          this.datos.TiposEventos[i] = tiposeventos
        } else {
          this.http.get<TiposEventos[]>(`${this.API_URI}all/TiposEventos`).subscribe(
            res => {
              this.datos.TiposEventos = new Array<TiposEventos>()
              this.datos.TiposEventos = res as TiposEventos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteTiposEventos(tiposeventos: TiposEventos) {
    this.realizarOperacion("TiposEventos", tiposeventos, true).subscribe(
      () => {
        const i = this.datos.TiposEventos.indexOf(tiposeventos)
        this.datos.TiposEventos.splice(i, 1)
      }
    )
  }

  public get TiposMesas(): Observable<TiposMesas[]> {
    if (this.datos.TiposMesas.length !== 0 && !this.datos.reiniciarTiposMesas && this.datos.TiposMesasValores.valor !== 0) {
      this.datos.TiposMesasValores.valor = this.datos.TiposMesasValores.valor - 1
      return of(this.datos.TiposMesas)
    } else {
      if (this.datos.reiniciarTiposMesas === true) {
        this.datos.reiniciarTiposMesas = false
      }
      const peticion = this.http.get<TiposMesas[]>(`${this.API_URI}all/TiposMesas`)
      peticion.subscribe(
        res => {
          this.datos.TiposMesas = new Array<TiposMesas>()
          this.datos.TiposMesas = res as TiposMesas[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setTiposMesas(tiposmesas: TiposMesas): void {
    this.realizarOperacion("TiposMesas", tiposmesas).subscribe(
      () => {
        if (tiposmesas.id != null) {
          const i = this.datos.TiposMesas.indexOf(tiposmesas)
          this.datos.TiposMesas[i] = tiposmesas
        } else {
          this.http.get<TiposMesas[]>(`${this.API_URI}all/TiposMesas`).subscribe(
            res => {
              this.datos.TiposMesas = new Array<TiposMesas>()
              this.datos.TiposMesas = res as TiposMesas[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteTiposMesas(tiposmesas: TiposMesas) {
    this.realizarOperacion("TiposMesas", tiposmesas, true).subscribe(
      () => {
        const i = this.datos.TiposMesas.indexOf(tiposmesas)
        this.datos.TiposMesas.splice(i, 1)
      }
    )
  }

  public get TiposProductos(): Observable<TiposProductos[]> {
    if (this.datos.TiposProductos.length !== 0 && !this.datos.reiniciarTiposProductos && this.datos.TiposProductosValores.valor !== 0) {
      this.datos.TiposProductosValores.valor = this.datos.TiposProductosValores.valor - 1
      return of(this.datos.TiposProductos)
    } else {
      if (this.datos.reiniciarTiposProductos === true) {
        this.datos.reiniciarTiposProductos = false
      }
      const peticion = this.http.get<TiposProductos[]>(`${this.API_URI}all/TiposProductos`)
      peticion.subscribe(
        res => {
          this.datos.TiposProductos = new Array<TiposProductos>()
          this.datos.TiposProductos = res as TiposProductos[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setTiposProductos(tiposproductos: TiposProductos): void {
    this.realizarOperacion("TiposProductos", tiposproductos).subscribe(
      () => {
        if (tiposproductos.id != null) {
          const i = this.datos.TiposProductos.indexOf(tiposproductos)
          this.datos.TiposProductos[i] = tiposproductos
        } else {
          this.http.get<TiposProductos[]>(`${this.API_URI}all/TiposProductos`).subscribe(
            res => {
              this.datos.TiposProductos = new Array<TiposProductos>()
              this.datos.TiposProductos = res as TiposProductos[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteTiposProductos(tiposproductos: TiposProductos) {
    this.realizarOperacion("TiposProductos", tiposproductos, true).subscribe(
      () => {
        const i = this.datos.TiposProductos.indexOf(tiposproductos)
        this.datos.TiposProductos.splice(i, 1)
      }
    )
  }

  public get TiposPromociones(): Observable<TiposPromociones[]> {
    if (this.datos.TiposPromociones.length !== 0 && !this.datos.reiniciarTiposPromociones && this.datos.TiposPromocionesValores.valor !== 0) {
      this.datos.TiposPromocionesValores.valor = this.datos.TiposPromocionesValores.valor - 1
      return of(this.datos.TiposPromociones)
    } else {
      if (this.datos.reiniciarTiposPromociones === true) {
        this.datos.reiniciarTiposPromociones = false
      }
      const peticion = this.http.get<TiposPromociones[]>(`${this.API_URI}all/TiposPromociones`)
      peticion.subscribe(
        res => {
          this.datos.TiposPromociones = new Array<TiposPromociones>()
          this.datos.TiposPromociones = res as TiposPromociones[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setTiposPromociones(tipospromociones: TiposPromociones): void {
    this.realizarOperacion("TiposPromociones", tipospromociones).subscribe(
      () => {
        if (tipospromociones.id != null) {
          const i = this.datos.TiposPromociones.indexOf(tipospromociones)
          this.datos.TiposPromociones[i] = tipospromociones
        } else {
          this.http.get<TiposPromociones[]>(`${this.API_URI}all/TiposPromociones`).subscribe(
            res => {
              this.datos.TiposPromociones = new Array<TiposPromociones>()
              this.datos.TiposPromociones = res as TiposPromociones[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteTiposPromociones(tipospromociones: TiposPromociones) {
    this.realizarOperacion("TiposPromociones", tipospromociones, true).subscribe(
      () => {
        const i = this.datos.TiposPromociones.indexOf(tipospromociones)
        this.datos.TiposPromociones.splice(i, 1)
      }
    )
  }

  public get Usuarios(): Observable<Usuarios[]> {
    if (this.datos.Usuarios.length !== 0 && !this.datos.reiniciarUsuarios && this.datos.UsuariosValores.valor !== 0) {
      this.datos.UsuariosValores.valor = this.datos.UsuariosValores.valor - 1
      return of(this.datos.Usuarios)
    } else {
      if (this.datos.reiniciarUsuarios === true) {
        this.datos.reiniciarUsuarios = false
      }
      const peticion = this.http.get<Usuarios[]>(`${this.API_URI}all/Usuarios`)
      peticion.subscribe(
        res => {
          this.datos.Usuarios = new Array<Usuarios>()
          this.datos.Usuarios = res as Usuarios[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setUsuarios(usuarios: Usuarios): void {
    this.realizarOperacion("Usuarios", usuarios).subscribe(
      () => {
        if (usuarios.id != null) {
          const i = this.datos.Usuarios.indexOf(usuarios)
          this.datos.Usuarios[i] = usuarios
        } else {
          this.http.get<Usuarios[]>(`${this.API_URI}all/Usuarios`).subscribe(
            res => {
              this.datos.Usuarios = new Array<Usuarios>()
              this.datos.Usuarios = res as Usuarios[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteUsuarios(usuarios: Usuarios) {
    this.realizarOperacion("Usuarios", usuarios, true).subscribe(
      () => {
        const i = this.datos.Usuarios.indexOf(usuarios)
        this.datos.Usuarios.splice(i, 1)
      }
    )
  }

  public get UsuariosRegistrandose(): Observable<UsuariosRegistrandose[]> {
    if (this.datos.UsuariosRegistrandose.length !== 0 && !this.datos.reiniciarUsuariosRegistrandose && this.datos.UsuariosRegistrandoseValores.valor !== 0) {
      this.datos.UsuariosRegistrandoseValores.valor = this.datos.UsuariosRegistrandoseValores.valor - 1
      return of(this.datos.UsuariosRegistrandose)
    } else {
      if (this.datos.reiniciarUsuariosRegistrandose === true) {
        this.datos.reiniciarUsuariosRegistrandose = false
      }
      const peticion = this.http.get<UsuariosRegistrandose[]>(`${this.API_URI}all/UsuariosRegistrandose`)
      peticion.subscribe(
        res => {
          this.datos.UsuariosRegistrandose = new Array<UsuariosRegistrandose>()
          this.datos.UsuariosRegistrandose = res as UsuariosRegistrandose[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setUsuariosRegistrandose(usuariosRegistrandose: UsuariosRegistrandose): void {
    this.realizarOperacion("UsuariosRegistrandose", usuariosRegistrandose).subscribe(
      () => {
        if (usuariosRegistrandose.id != null) {
          const i = this.datos.UsuariosRegistrandose.indexOf(usuariosRegistrandose)
          this.datos.UsuariosRegistrandose[i] = usuariosRegistrandose
        } else {
          this.http.get<UsuariosRegistrandose[]>(`${this.API_URI}all/UsuariosRegistrandose`).subscribe(
            res => {
              this.datos.UsuariosRegistrandose = new Array<UsuariosRegistrandose>()
              this.datos.UsuariosRegistrandose = res as UsuariosRegistrandose[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteUsuariosRegistrandose(usuariosregistrandose: UsuariosRegistrandose) {
    this.realizarOperacion("UsuariosRegistrandose", usuariosregistrandose, true).subscribe(
      () => {
        const i = this.datos.UsuariosRegistrandose.indexOf(usuariosregistrandose)
        this.datos.UsuariosRegistrandose.splice(i, 1)
      }
    )
  }

  public get Ventajas(): Observable<Ventajas[]> {
    if (this.datos.Ventajas.length !== 0 && !this.datos.reiniciarVentajas && this.datos.VentajasValores.valor !== 0) {
      this.datos.VentajasValores.valor = this.datos.VentajasValores.valor - 1
      return of(this.datos.Ventajas)
    } else {
      if (this.datos.reiniciarVentajas === true) {
        this.datos.reiniciarVentajas = false
      }
      const peticion = this.http.get<Ventajas[]>(`${this.API_URI}all/Ventajas`)
      peticion.subscribe(
        res => {
          this.datos.Ventajas = new Array<Ventajas>()
          this.datos.Ventajas = res as Ventajas[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setVentajas(ventajas: Ventajas): void {
    this.realizarOperacion("Ventajas", ventajas).subscribe(
      () => {
        if (ventajas.id != null) {
          const i = this.datos.Ventajas.indexOf(ventajas)
          this.datos.Ventajas[i] = ventajas
        } else {
          this.http.get<Ventajas[]>(`${this.API_URI}all/Ventajas`).subscribe(
            res => {
              this.datos.Ventajas = new Array<Ventajas>()
              this.datos.Ventajas = res as Ventajas[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteVentajas(ventajas: Ventajas) {
    this.realizarOperacion("Ventajas", ventajas, true).subscribe(
      () => {
        const i = this.datos.Ventajas.indexOf(ventajas)
        this.datos.Ventajas.splice(i, 1)
      }
    )
  }

  public get VentajasCategorias(): Observable<VentajasCategorias[]> {
    if (this.datos.VentajasCategorias.length !== 0 && !this.datos.reiniciarVentajasCategorias && this.datos.VentajasCategoriasValores.valor !== 0) {
      this.datos.VentajasCategoriasValores.valor = this.datos.VentajasCategoriasValores.valor - 1
      return of(this.datos.VentajasCategorias)
    } else {
      if (this.datos.reiniciarVentajasCategorias === true) {
        this.datos.reiniciarVentajasCategorias = false
      }
      const peticion = this.http.get<VentajasCategorias[]>(`${this.API_URI}all/VentajasCategorias`)
      peticion.subscribe(
        res => {
          this.datos.VentajasCategorias = new Array<VentajasCategorias>()
          this.datos.VentajasCategorias = res as VentajasCategorias[]
        },
        err => {
          this.toastr.error("Error")
          console.log(err)
        }
      )
      return peticion
    }
  }


  public setVentajasCategorias(ventajascategorias: VentajasCategorias): void {
    this.realizarOperacion("VentajasCategorias", ventajascategorias).subscribe(
      () => {
        if (ventajascategorias.id != null) {
          const i = this.datos.VentajasCategorias.indexOf(ventajascategorias)
          this.datos.VentajasCategorias[i] = ventajascategorias
        } else {
          this.http.get<VentajasCategorias[]>(`${this.API_URI}all/VentajasCategorias`).subscribe(
            res => {
              this.datos.VentajasCategorias = new Array<VentajasCategorias>()
              this.datos.VentajasCategorias = res as VentajasCategorias[]
            },
            err => {
              this.toastr.error("Error")
              console.log(err)
            }
          )
        }
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  public deleteVentajasCategorias(ventajascategorias: VentajasCategorias) {
    this.realizarOperacion("VentajasCategorias", ventajascategorias, true).subscribe(
      () => {
        const i = this.datos.VentajasCategorias.indexOf(ventajascategorias)
        this.datos.VentajasCategorias.splice(i, 1)
      }
    )
  }

  public procedureCreateUserAndEmail(email: string, contrasena: string, social: number) {
    const sqlProcedure: SqlProcedure = { nombre: "createEmailAndUser", valores: [email, contrasena, social, new Date()] }
    this.api.doProcedure(sqlProcedure).subscribe(
      () => {
        this.datos.reiniciarEmails = true
        this.datos.reiniciarUsuariosRegistrandose = true
        this.Emails.subscribe()
        this.UsuariosRegistrandose.subscribe()
      },
      err => {
        this.toastr.error("Error")
        console.log(err)
      }
    )
  }

  private realizarOperacion(tabla: string, elemento: any, borrar?: boolean) {
    if (borrar) {
      return this.api.delete(this.formarDelete(tabla, elemento))
    } else {
      if (elemento.id != null) {
        return this.api.put(this.formarUpdate(tabla, elemento))
      } else {
        return this.api.post(this.formarInsert(tabla, elemento))
      }
    }
  }

  private formarInsert(tabla: string, elemento: any) {
    const claves = Object.keys(elemento)
    if (elemento.id !== undefined && elemento.id !== null && elemento.id !== "") {
      claves.splice(claves.indexOf("id"))
    }
    elemento.creado = new Date()
    elemento.modificado = new Date()
    const respuesta: SqlInsert = {
      tabla: tabla,
      valores: this.formarCampoValor(elemento)
    }
    return respuesta
  }

  private formarUpdate(tabla: string, elemento: any) {
    elemento.modificado = new Date()
    const respuesta: SqlUpdate = {
      tabla: tabla,
      valores: this.formarCampoValor(elemento),
      where: [{ campo: "id", logico: "=", valor: elemento.id }]
    }
    return respuesta
  }

  private formarDelete(tabla: string, elemento: any) {
    const respuesta: SqlDelete = {
      tabla: tabla,
      where: [{ campo: "id", logico: "=", valor: elemento.id }]
    }
    return respuesta
  }

  private formarCampoValor(elemento: any) {
    return Object.keys(elemento).filter(x => elemento[x] !== null && elemento[x] !== undefined).map(x => {
      return {
        campo: String(x),
        valor: elemento[x]
      }
    })
  }


}
import { Injectable } from '@angular/core';
import { DatosService } from '../datos/datos.service';
import { Observable, of } from 'rxjs';
import { Amigos, Archivos, ArchivosCategoria, ArchivosEmpresa, ArchivosEstablecimiento, ArchivosEvento, ArchivosMarca, ArchivosProducto, ArchivosPromocion, Caracteristicas, CaracteristicasDeProductos, CaracteristicasEvento, CaracteristicasProducto, Categorias, Descripciones, DescripcionesEvento, DiasMes, DiasSemana, Direcciones, DireccionesPersona, Emails, EmailsPersona, Empresas, Establecimientos, Eventos, EventosEstablecimientos, FaxsPersona, Fechas, Grupos, GruposConsumicion, HorarioDiasMesEstablecimientos, HorarioDiasMesEventos, HorarioDiasMesPromociones, HorarioDiasSemanaEstablecimientos, HorarioDiasSemanaEventos, HorarioDiasSemanaPromociones, HorarioFechasEstablecimientos, HorarioFechasEventos, HorarioFechasPromociones, HorarioHorasEstablecimientos, HorarioHorasEventos, HorarioHorasPromociones, HorarioMesesEstablecimientos, HorarioMesesEventos, HorarioMesesPromociones, Horas, Invitados, LineasTicket, Marcas, MesasEstablecimiento, Meses, MiembrosGrupos, MiembrosGruposConsumicion, Paises, Personas, PersonasContactoEmpresa, PersonasContactoEstablecimiento, PersonasContactoMarcas, PersonasEstablecimientos, Productos, Promociones, PromocionesProductos, PublicidadEmpresa, PublicidadEstablecimiento, PublicidadEvento, PublicidadProducto, PublicidadPromocion, Puestos, Requisitos, RequisitosEvento, Telefonos, TelefonosPersona, Tickets, TiposCategorias, TiposEstablecimientos, TiposEventos, TiposMesas, TiposProductos, TiposPromociones, Usuarios, Ventajas, VentajasCategorias, UsuariosRegistrandose, MotivosInhabilitacion } from '@nighty/models';
import { APIService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { SqlInsert, SqlUpdate, SqlDelete } from '@nighty/interfaces-sql';
import { SqlCampoValor } from "@nighty/interfaces-sql";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GetterSetterService {

  API_URI = "http://localhost:3333/api/"

  constructor(private http: HttpClient, private datos: DatosService, private api: APIService, private toastr: ToastrService) { }

  public get Amigos(): Observable<Amigos[]> {
    if (this.datos.Amigos.length !== 0 && !this.datos.reiniciarAmigos) {
      return of(this.datos.Amigos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Archivos.length !== 0. && !this.datos.reiniciarArchivos) {
      return of(this.datos.Archivos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.ArchivosCategoria.length !== 0 && !this.datos.reiniciarArchivosCategoria) {
      return of(this.datos.ArchivosCategoria)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.ArchivosEmpresa.length !== 0 && !this.datos.reiniciarArchivosEmpresa) {
      return of(this.datos.ArchivosEmpresa)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.ArchivosEstablecimiento.length !== 0 && !this.datos.reiniciarArchivosEstablecimiento) {
      return of(this.datos.ArchivosEstablecimiento)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.ArchivosEvento.length !== 0 && !this.datos.reiniciarArchivosEvento) {
      return of(this.datos.ArchivosEvento)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.ArchivosMarca.length !== 0 && !this.datos.reiniciarArchivosMarca) {
      return of(this.datos.ArchivosMarca)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.ArchivosProducto.length !== 0 && !this.datos.reiniciarArchivosProducto) {
      return of(this.datos.ArchivosProducto)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.ArchivosPromocion.length !== 0 && !this.datos.reiniciarArchivosPromocion) {
      return of(this.datos.ArchivosPromocion)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Caracteristicas.length !== 0 && !this.datos.reiniciarCaracteristicas) {
      return of(this.datos.Caracteristicas)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.CaracteristicasDeProductos.length !== 0 && !this.datos.reiniciarCaracteristicasDeProductos) {
      return of(this.datos.CaracteristicasDeProductos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.CaracteristicasEvento.length !== 0 && !this.datos.reiniciarCaracteristicasEvento) {
      return of(this.datos.CaracteristicasEvento)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.CaracteristicasProducto.length !== 0 && !this.datos.reiniciarCaracteristicasProducto) {
      return of(this.datos.CaracteristicasProducto)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Categorias.length !== 0 && !this.datos.reiniciarCategorias) {
      return of(this.datos.Categorias)
    } else {
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
          this.toastr.show("Creado")
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

  public get Descripciones(): Observable<Descripciones[]> {
    if (this.datos.Descripciones.length !== 0 && !this.datos.reiniciarDescripciones) {
      return of(this.datos.Descripciones)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.DescripcionesEvento.length !== 0 && !this.datos.reiniciarDescripcionesEvento) {
      return of(this.datos.DescripcionesEvento)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.DiasMes.length !== 0 && !this.datos.reiniciarDiasMes) {
      return of(this.datos.DiasMes)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.DiasSemana.length !== 0 && !this.datos.reiniciarDiasSemana) {
      return of(this.datos.DiasSemana)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Direcciones.length !== 0 && !this.datos.reiniciarDirecciones) {
      return of(this.datos.Direcciones)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.DireccionesPersona.length !== 0 && !this.datos.reiniciarDireccionesPersona) {
      return of(this.datos.DireccionesPersona)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Emails.length !== 0 && !this.datos.reiniciarEmails) {
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
          this.toastr.show("Creado")
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
    if (this.datos.EmailsPersona.length !== 0 && !this.datos.reiniciarEmailsPersona) {
      return of(this.datos.EmailsPersona)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Empresas.length !== 0 && !this.datos.reiniciarEmpresas) {
      return of(this.datos.Empresas)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Establecimientos.length !== 0 && !this.datos.reiniciarEstablecimientos) {
      return of(this.datos.Establecimientos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Eventos.length !== 0 && !this.datos.reiniciarEventos) {
      return of(this.datos.Eventos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.EventosEstablecimientos.length !== 0 && !this.datos.reiniciarEventosEstablecimientos) {
      return of(this.datos.EventosEstablecimientos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.FaxsPersona.length !== 0 && !this.datos.reiniciarFaxsPersona) {
      return of(this.datos.FaxsPersona)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Fechas.length !== 0 && !this.datos.reiniciarFechas) {
      return of(this.datos.Fechas)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Grupos.length !== 0 && !this.datos.reiniciarGrupos) {
      return of(this.datos.Grupos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.GruposConsumicion.length !== 0 && !this.datos.reiniciarGruposConsumicion) {
      return of(this.datos.GruposConsumicion)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioDiasMesEstablecimientos.length !== 0 && !this.datos.reiniciarHorarioDiasMesEstablecimientos) {
      return of(this.datos.HorarioDiasMesEstablecimientos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioDiasMesEventos.length !== 0 && !this.datos.reiniciarHorarioDiasMesEventos) {
      return of(this.datos.HorarioDiasMesEventos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioDiasMesPromociones.length !== 0 && !this.datos.reiniciarHorarioDiasMesPromociones) {
      return of(this.datos.HorarioDiasMesPromociones)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioDiasSemanaEstablecimientos.length !== 0 && !this.datos.reiniciarHorarioDiasSemanaEstablecimientos) {
      return of(this.datos.HorarioDiasSemanaEstablecimientos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioDiasSemanaEventos.length !== 0 && !this.datos.reiniciarHorarioDiasSemanaEventos) {
      return of(this.datos.HorarioDiasSemanaEventos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioDiasSemanaPromociones.length !== 0 && !this.datos.reiniciarHorarioDiasSemanaPromociones) {
      return of(this.datos.HorarioDiasSemanaPromociones)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioFechasEstablecimientos.length !== 0 && !this.datos.reiniciarHorarioFechasEstablecimientos) {
      return of(this.datos.HorarioFechasEstablecimientos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioFechasEventos.length !== 0 && !this.datos.reiniciarHorarioFechasEventos) {
      return of(this.datos.HorarioFechasEventos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioFechasPromociones.length !== 0 && !this.datos.reiniciarHorarioFechasPromociones) {
      return of(this.datos.HorarioFechasPromociones)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioHorasEstablecimientos.length !== 0 && !this.datos.reiniciarHorarioHorasEstablecimientos) {
      return of(this.datos.HorarioHorasEstablecimientos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioHorasEventos.length !== 0 && !this.datos.reiniciarHorarioHorasEventos) {
      return of(this.datos.HorarioHorasEventos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioHorasPromociones.length !== 0 && !this.datos.reiniciarHorarioHorasPromociones) {
      return of(this.datos.HorarioHorasPromociones)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioMesesEstablecimientos.length !== 0 && !this.datos.reiniciarHorarioMesesEstablecimientos) {
      return of(this.datos.HorarioMesesEstablecimientos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioMesesEventos.length !== 0 && !this.datos.reiniciarHorarioMesesEventos) {
      return of(this.datos.HorarioMesesEventos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.HorarioMesesPromociones.length !== 0 && !this.datos.reiniciarHorarioMesesPromociones) {
      return of(this.datos.HorarioMesesPromociones)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Horas.length !== 0. && !this.datos.reiniciarHoras) {
      return of(this.datos.Horas)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Invitados.length !== 0 && !this.datos.reiniciarInvitados) {
      return of(this.datos.Invitados)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.LineasTicket.length !== 0 && !this.datos.reiniciarLineasTicket) {
      return of(this.datos.LineasTicket)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Marcas.length !== 0 && !this.datos.reiniciarMarcas) {
      return of(this.datos.Marcas)
    } else {
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
          this.toastr.show("Creado")
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

  public get MesasEstablecimiento(): Observable<MesasEstablecimiento[]> {
    if (this.datos.MesasEstablecimiento.length !== 0 && !this.datos.reiniciarMesasEstablecimiento) {
      return of(this.datos.MesasEstablecimiento)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Meses.length !== 0. && !this.datos.reiniciarMeses) {
      return of(this.datos.Meses)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.MiembrosGrupos.length !== 0 && !this.datos.reiniciarMiembrosGrupos) {
      return of(this.datos.MiembrosGrupos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.MiembrosGruposConsumicion.length !== 0 && !this.datos.reiniciarMiembrosGruposConsumicion) {
      return of(this.datos.MiembrosGruposConsumicion)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.MotivosInhabilitacion.length !== 0 && !this.datos.reiniciarMotivosInhabilitacion) {
      return of(this.datos.MotivosInhabilitacion)
    } else {
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
    if (this.datos.Paises.length !== 0 && !this.datos.reiniciarPaises) {
      return of(this.datos.Paises)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Personas.length !== 0 && !this.datos.reiniciarPersonas) {
      return of(this.datos.Personas)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.PersonasContactoEmpresa.length !== 0 && !this.datos.reiniciarPersonasContactoEmpresa) {
      return of(this.datos.PersonasContactoEmpresa)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.PersonasContactoEstablecimiento.length !== 0 && !this.datos.reiniciarPersonasContactoEstablecimiento) {
      return of(this.datos.PersonasContactoEstablecimiento)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.PersonasContactoMarcas.length !== 0 && !this.datos.reiniciarPersonasContactoMarcas) {
      return of(this.datos.PersonasContactoMarcas)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.PersonasEstablecimientos.length !== 0 && !this.datos.reiniciarPersonasEstablecimientos) {
      return of(this.datos.PersonasEstablecimientos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Productos.length !== 0 && !this.datos.reiniciarProductos) {
      return of(this.datos.Productos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Promociones.length !== 0 && !this.datos.reiniciarPromociones) {
      return of(this.datos.Promociones)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.PromocionesProductos.length !== 0 && !this.datos.reiniciarPromocionesProductos) {
      return of(this.datos.PromocionesProductos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.PublicidadEmpresa.length !== 0 && !this.datos.reiniciarPublicidadEmpresa) {
      return of(this.datos.PublicidadEmpresa)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.PublicidadEstablecimiento.length !== 0 && !this.datos.reiniciarPublicidadEstablecimiento) {
      return of(this.datos.PublicidadEstablecimiento)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.PublicidadEvento.length !== 0 && !this.datos.reiniciarPublicidadEvento) {
      return of(this.datos.PublicidadEvento)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.PublicidadProducto.length !== 0 && !this.datos.reiniciarPublicidadProducto) {
      return of(this.datos.PublicidadProducto)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.PublicidadPromocion.length !== 0 && !this.datos.reiniciarPublicidadPromocion) {
      return of(this.datos.PublicidadPromocion)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Puestos.length !== 0 && !this.datos.reiniciarPuestos) {
      return of(this.datos.Puestos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Requisitos.length !== 0 && !this.datos.reiniciarRequisitos) {
      return of(this.datos.Requisitos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.RequisitosEvento.length !== 0 && !this.datos.reiniciarRequisitosEvento) {
      return of(this.datos.RequisitosEvento)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Telefonos.length !== 0 && !this.datos.reiniciarTelefonos) {
      return of(this.datos.Telefonos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.TelefonosPersona.length !== 0 && !this.datos.reiniciarTelefonosPersona) {
      return of(this.datos.TelefonosPersona)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Tickets.length !== 0 && !this.datos.reiniciarTickets) {
      return of(this.datos.Tickets)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.TiposCategorias.length !== 0 && !this.datos.reiniciarTiposCategorias) {
      return of(this.datos.TiposCategorias)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.TiposEstablecimientos.length !== 0 && !this.datos.reiniciarTiposEstablecimientos) {
      return of(this.datos.TiposEstablecimientos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.TiposEventos.length !== 0 && !this.datos.reiniciarTiposEventos) {
      return of(this.datos.TiposEventos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.TiposMesas.length !== 0 && !this.datos.reiniciarTiposMesas) {
      return of(this.datos.TiposMesas)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.TiposProductos.length !== 0 && !this.datos.reiniciarTiposProductos) {
      return of(this.datos.TiposProductos)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.TiposPromociones.length !== 0 && !this.datos.reiniciarTiposPromociones) {
      return of(this.datos.TiposPromociones)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.Usuarios.length !== 0 && !this.datos.reiniciarUsuarios) {
      return of(this.datos.Usuarios)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.UsuariosRegistrandose.length !== 0 && !this.datos.reiniciarUsuariosRegistrandose) {
      return of(this.datos.UsuariosRegistrandose)
    } else {
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
    if (this.datos.Ventajas.length !== 0 && !this.datos.reiniciarVentajas) {
      return of(this.datos.Ventajas)
    } else {
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
          this.toastr.show("Creado")
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
    if (this.datos.VentajasCategorias.length !== 0 && !this.datos.reiniciarVentajasCategorias) {
      return of(this.datos.VentajasCategorias)
    } else {
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
          this.toastr.show("Creado")
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
    return Object.keys(elemento).map(x => {
      return {
        campo: String(x),
        valor: elemento[x]
      }
    })
  }

}
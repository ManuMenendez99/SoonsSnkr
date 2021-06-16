import { Injectable } from '@angular/core';
import { DatosService } from '../datos/datos.service';
import { Observable, of } from 'rxjs';
import {Usuarios,UsuariosRegistrandose,Paises,Ciudades,Direcciones,DireccionesUsuario,Marcas,Categorias,MensajeriasAceptadas,Productos,Tags,TagsProducto,ImagenesProductos,Stock,Descuentos, Archivos, ImagenesMarcas, ResetPassword
  //  PaymentsOrdersPaypal, SellerProtectionDisputeCategoriesOrdersPaypal, ItemsOrdersPaypal, PagosPaypal, LinksOrdersPaypal, OrdersPaypal, ItemsComprasOrderPaypal, ComprasOrderPaypal, PayersPaypal, UnidadesOrdersPaypal
} from '@Soons/models';
import { APIService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { SqlInsert, SqlUpdate, SqlDelete, SqlProcedure } from '@Soons/interfaces-sql';
import { SqlCampoValor } from "@Soons/interfaces-sql";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GetterSetterService {

  API_URI = "http://localhost:3333/api/"

  constructor(private http: HttpClient, private datos: DatosService, private api: APIService, private toastr: ToastrService) { }

  public get Usuarios(): Observable<Usuarios[]> {
    if (this.datos.Usuarios.length !== 0 && this.datos.reiniciarUsuarios && this.datos.UsuariosValores.valor !== 0) {
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
          this.toastr.error("Error en peticion a base de datos en tabla Usuarios")
          console.log(err)
        }
      )
      return peticion
    }
  }
  
  public setUsuarios(usuarios: Usuarios): void {
    this.realizarOperacion("Usuarios", usuarios).subscribe(
      () => {
        if (usuarios.id !== null) {
          const i = this.datos.Usuarios.indexOf(usuarios)
          this.datos.Usuarios[i] = usuarios
        } else {
          this.http.get<Usuarios[]>(`${this.API_URI}all/Usuarios`).subscribe(
            res => {
              this.datos.Usuarios = new Array<Usuarios>()
              this.datos.Usuarios = res as Usuarios[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Usuarios")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Usuarios")
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
    if (this.datos.UsuariosRegistrandose.length !== 0 && this.datos.reiniciarUsuariosRegistrandose && this.datos.UsuariosRegistrandoseValores.valor !== 0) {
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
          this.toastr.error("Error en peticion a base de datos en tabla UsuariosRegistrandose")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setUsuariosRegistrandose(usuariosRegistrandose: UsuariosRegistrandose): void {
    this.realizarOperacion("UsuariosRegistrandose", usuariosRegistrandose).subscribe(
      () => {
        if (usuariosRegistrandose.id !== null) {
          const i = this.datos.UsuariosRegistrandose.indexOf(usuariosRegistrandose)
          this.datos.UsuariosRegistrandose[i] = usuariosRegistrandose
        } else {
          this.http.get<UsuariosRegistrandose[]>(`${this.API_URI}all/UsuariosRegistrandose`).subscribe(
            res => {
              this.datos.UsuariosRegistrandose = new Array<UsuariosRegistrandose>()
              this.datos.UsuariosRegistrandose = res as UsuariosRegistrandose[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla UsuariosRegistrandose")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla UsuariosRegistrandose")
        console.log(err)
      }
    )
  }

  public deleteUsuariosRegistrandose(usuariosRegistrandose: UsuariosRegistrandose) {
    this.realizarOperacion("UsuariosRegistrandose", usuariosRegistrandose, true).subscribe(
      () => {
        const i = this.datos.UsuariosRegistrandose.indexOf(usuariosRegistrandose)
        this.datos.UsuariosRegistrandose.splice(i, 1)
      }
    )
  }

  public get Paises(): Observable<Paises[]> {
    if (this.datos.Paises.length !== 0 && this.datos.reiniciarPaises && this.datos.PaisesValores.valor !== 0) {
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
          this.toastr.error("Error en peticion a base de datos en tabla Paises")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setPaises(paises: Paises): void {
    this.realizarOperacion("Paises", paises).subscribe(
      () => {
        if (paises.id !== null) {
          const i = this.datos.Paises.indexOf(paises)
          this.datos.Paises[i] = paises
        } else {
          this.http.get<Paises[]>(`${this.API_URI}all/Paises`).subscribe(
            res => {
              this.datos.Paises = new Array<Paises>()
              this.datos.Paises = res as Paises[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Paises")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Paises")
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

  public get Ciudades(): Observable<Ciudades[]> {
    if (this.datos.Ciudades.length !== 0 && this.datos.reiniciarCiudades && this.datos.CiudadesValores.valor !== 0) {
      this.datos.CiudadesValores.valor = this.datos.CiudadesValores.valor - 1
      return of(this.datos.Ciudades)
    } else {
      if (this.datos.reiniciarCiudades === true) {
        this.datos.reiniciarCiudades = false
      }
      const peticion = this.http.get<Ciudades[]>(`${this.API_URI}all/Ciudades`)
      peticion.subscribe(
        res => {
          this.datos.Ciudades = new Array<Ciudades>()
          this.datos.Ciudades = res as Ciudades[]
        },
        err => {
          this.toastr.error("Error en peticion a base de datos en tabla Ciudades")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setCiudades(ciudades: Ciudades): void {
    this.realizarOperacion("Ciudades", ciudades).subscribe(
      () => {
        if (ciudades.id !== null) {
          const i = this.datos.Ciudades.indexOf(ciudades)
          this.datos.Ciudades[i] = ciudades
        } else {
          this.http.get<Ciudades[]>(`${this.API_URI}all/Ciudades`).subscribe(
            res => {
              this.datos.Ciudades = new Array<Ciudades>()
              this.datos.Ciudades = res as Ciudades[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Ciudades")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Ciudades")
        console.log(err)
      }
    )
  }

  public deleteCiudades(ciudades: Ciudades) {
    this.realizarOperacion("Ciudades", ciudades, true).subscribe(
      () => {
        const i = this.datos.Ciudades.indexOf(ciudades)
        this.datos.Ciudades.splice(i, 1)
      }
    )
  }

  public get Direcciones(): Observable<Direcciones[]> {
    if (this.datos.Direcciones.length !== 0 && this.datos.reiniciarDirecciones && this.datos.DireccionesValores.valor !== 0) {
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
          this.toastr.error("Error en peticion a base de datos en tabla Direcciones")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setDirecciones(direcciones: Direcciones): void {
    this.realizarOperacion("Direcciones", direcciones).subscribe(
      () => {
        if (direcciones.id !== null) {
          const i = this.datos.Direcciones.indexOf(direcciones)
          this.datos.Direcciones[i] = direcciones
        } else {
          this.http.get<Direcciones[]>(`${this.API_URI}all/Direcciones`).subscribe(
            res => {
              this.datos.Direcciones = new Array<Direcciones>()
              this.datos.Direcciones = res as Direcciones[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Direcciones")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Direcciones")
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

  public get DireccionesUsuario(): Observable<DireccionesUsuario[]> {
    if (this.datos.DireccionesUsuario.length !== 0 && this.datos.reiniciarDireccionesUsuario && this.datos.DireccionesUsuarioValores.valor !== 0) {
      this.datos.DireccionesUsuarioValores.valor = this.datos.DireccionesUsuarioValores.valor - 1
      return of(this.datos.DireccionesUsuario)
    } else {
      if (this.datos.reiniciarDireccionesUsuario === true) {
        this.datos.reiniciarDireccionesUsuario = false
      }
      const peticion = this.http.get<DireccionesUsuario[]>(`${this.API_URI}all/DireccionesUsuario`)
      peticion.subscribe(
        res => {
          this.datos.DireccionesUsuario = new Array<DireccionesUsuario>()
          this.datos.DireccionesUsuario = res as DireccionesUsuario[]
        },
        err => {
          this.toastr.error("Error en peticion a base de datos en tabla DireccionesUsuario")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setDireccionesUsuario(direccionesUsuario: DireccionesUsuario): void {
    this.realizarOperacion("DireccionesUsuario", direccionesUsuario).subscribe(
      () => {
        if (direccionesUsuario.id !== null) {
          const i = this.datos.DireccionesUsuario.indexOf(direccionesUsuario)
          this.datos.DireccionesUsuario[i] = direccionesUsuario
        } else {
          this.http.get<DireccionesUsuario[]>(`${this.API_URI}all/DireccionesUsuario`).subscribe(
            res => {
              this.datos.DireccionesUsuario = new Array<DireccionesUsuario>()
              this.datos.DireccionesUsuario = res as DireccionesUsuario[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla DireccionesUsuario")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla DireccionesUsuario")
        console.log(err)
      }
    )
  }

  public deleteDireccionesUsuario(direccionesUsuario: DireccionesUsuario) {
    this.realizarOperacion("DireccionesUsuario", direccionesUsuario, true).subscribe(
      () => {
        const i = this.datos.DireccionesUsuario.indexOf(direccionesUsuario)
        this.datos.DireccionesUsuario.splice(i, 1)
      }
    )
  }

  public get Marcas(): Observable<Marcas[]> {
    if (this.datos.Marcas.length !== 0 && this.datos.reiniciarMarcas && this.datos.MarcasValores.valor !== 0) {
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
          this.toastr.error("Error en peticion a base de datos en tabla Marcas")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setMarcas(marcas: Marcas): void {
    this.realizarOperacion("Marcas", marcas).subscribe(
      () => {
        if (marcas.id !== null) {
          const i = this.datos.Marcas.indexOf(marcas)
          this.datos.Marcas[i] = marcas
        } else {
          this.http.get<Marcas[]>(`${this.API_URI}all/Marcas`).subscribe(
            res => {
              this.datos.Marcas = new Array<Marcas>()
              this.datos.Marcas = res as Marcas[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Marcas")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Marcas")
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

  public get Categorias(): Observable<Categorias[]> {
    if (this.datos.Categorias.length !== 0 && this.datos.reiniciarCategorias && this.datos.CategoriasValores.valor !== 0) {
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
          this.toastr.error("Error en peticion a base de datos en tabla Categorias")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setCategorias(categorias: Categorias): void {
    this.realizarOperacion("Categorias", categorias).subscribe(
      () => {
        if (categorias.id !== null) {
          const i = this.datos.Categorias.indexOf(categorias)
          this.datos.Categorias[i] = categorias
        } else {
          this.http.get<Categorias[]>(`${this.API_URI}all/Categorias`).subscribe(
            res => {
              this.datos.Categorias = new Array<Categorias>()
              this.datos.Categorias = res as Categorias[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Categorias")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Categorias")
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

  public get Archivos(): Observable<Archivos[]> {
    if (this.datos.Archivos.length !== 0 && this.datos.reiniciarArchivos && this.datos.ArchivosValores.valor !== 0) {
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
          this.toastr.error("Error en peticion a base de datos en tabla Archivos")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setArchivos(archivos: Archivos): void {
    this.realizarOperacion("Archivos", archivos).subscribe(
      () => {
        if (archivos.id !== null) {
          const i = this.datos.Archivos.indexOf(archivos)
          this.datos.Archivos[i] = archivos
        } else {
          this.http.get<Archivos[]>(`${this.API_URI}all/Archivos`).subscribe(
            res => {
              this.datos.Archivos = new Array<Archivos>()
              this.datos.Archivos = res as Archivos[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Archivos")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Archivos")
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

  public get MensajeriasAceptadas(): Observable<MensajeriasAceptadas[]> {
    if (this.datos.MensajeriasAceptadas.length !== 0 && this.datos.reiniciarMensajeriasAceptadas && this.datos.MensajeriasAceptadasValores.valor !== 0) {
      this.datos.MensajeriasAceptadasValores.valor = this.datos.MensajeriasAceptadasValores.valor - 1
      return of(this.datos.MensajeriasAceptadas)
    } else {
      if (this.datos.reiniciarMensajeriasAceptadas === true) {
        this.datos.reiniciarMensajeriasAceptadas = false
      }
      const peticion = this.http.get<MensajeriasAceptadas[]>(`${this.API_URI}all/MensajeriasAceptadas`)
      peticion.subscribe(
        res => {
          this.datos.MensajeriasAceptadas = new Array<MensajeriasAceptadas>()
          this.datos.MensajeriasAceptadas = res as MensajeriasAceptadas[]
        },
        err => {
          this.toastr.error("Error en peticion a base de datos en tabla MensajeriasAceptadas")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setMensajeriasAceptadas(mensajeriasAceptadas: MensajeriasAceptadas): void {
    this.realizarOperacion("MensajeriasAceptadas", mensajeriasAceptadas).subscribe(
      () => {
        if (mensajeriasAceptadas.id !== null) {
          const i = this.datos.MensajeriasAceptadas.indexOf(mensajeriasAceptadas)
          this.datos.MensajeriasAceptadas[i] = mensajeriasAceptadas
        } else {
          this.http.get<MensajeriasAceptadas[]>(`${this.API_URI}all/MensajeriasAceptadas`).subscribe(
            res => {
              this.datos.MensajeriasAceptadas = new Array<MensajeriasAceptadas>()
              this.datos.MensajeriasAceptadas = res as MensajeriasAceptadas[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla MensajeriasAceptadas")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla MensajeriasAceptadas")
        console.log(err)
      }
    )
  }

  public deleteMensajeriasAceptadas(mensajeriasAceptadas: MensajeriasAceptadas) {
    this.realizarOperacion("MensajeriasAceptadas", mensajeriasAceptadas, true).subscribe(
      () => {
        const i = this.datos.MensajeriasAceptadas.indexOf(mensajeriasAceptadas)
        this.datos.MensajeriasAceptadas.splice(i, 1)
      }
    )
  }

  public get Productos(): Observable<Productos[]> {
    if (this.datos.Productos.length !== 0 && this.datos.reiniciarProductos && this.datos.ProductosValores.valor !== 0) {
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
          this.toastr.error("Error en peticion a base de datos en tabla Productos")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setProductos(productos: Productos): void {
    this.realizarOperacion("Productos", productos).subscribe(
      () => {
        if (productos.id !== null) {
          const i = this.datos.Productos.indexOf(productos)
          this.datos.Productos[i] = productos
        } else {
          this.http.get<Productos[]>(`${this.API_URI}all/Productos`).subscribe(
            res => {
              this.datos.Productos = new Array<Productos>()
              this.datos.Productos = res as Productos[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Productos")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Productos")
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

  public get Tags(): Observable<Tags[]> {
    if (this.datos.Tags.length !== 0 && this.datos.reiniciarTags && this.datos.TagsValores.valor !== 0) {
      this.datos.TagsValores.valor = this.datos.TagsValores.valor - 1
      return of(this.datos.Tags)
    } else {
      if (this.datos.reiniciarTags === true) {
        this.datos.reiniciarTags = false
      }
      const peticion = this.http.get<Tags[]>(`${this.API_URI}all/Tags`)
      peticion.subscribe(
        res => {
          this.datos.Tags = new Array<Tags>()
          this.datos.Tags = res as Tags[]
        },
        err => {
          this.toastr.error("Error en peticion a base de datos en tabla Tags")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setTags(tags: Tags): void {
    this.realizarOperacion("Tags", tags).subscribe(
      () => {
        if (tags.id !== null) {
          const i = this.datos.Tags.indexOf(tags)
          this.datos.Tags[i] = tags
        } else {
          this.http.get<Tags[]>(`${this.API_URI}all/Tags`).subscribe(
            res => {
              this.datos.Tags = new Array<Tags>()
              this.datos.Tags = res as Tags[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Tags")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Tags")
        console.log(err)
      }
    )
  }

  public deleteTags(tags: Tags) {
    this.realizarOperacion("Tags", tags, true).subscribe(
      () => {
        const i = this.datos.Tags.indexOf(tags)
        this.datos.Tags.splice(i, 1)
      }
    )
  }

  public get TagsProducto(): Observable<TagsProducto[]> {
    if (this.datos.TagsProducto.length !== 0 && this.datos.reiniciarTagsProducto && this.datos.TagsProductoValores.valor !== 0) {
      this.datos.TagsProductoValores.valor = this.datos.TagsProductoValores.valor - 1
      return of(this.datos.TagsProducto)
    } else {
      if (this.datos.reiniciarTagsProducto === true) {
        this.datos.reiniciarTagsProducto = false
      }
      const peticion = this.http.get<TagsProducto[]>(`${this.API_URI}all/TagsProducto`)
      peticion.subscribe(
        res => {
          this.datos.TagsProducto = new Array<TagsProducto>()
          this.datos.TagsProducto = res as TagsProducto[]
        },
        err => {
          this.toastr.error("Error en peticion a base de datos en tabla TagsProducto")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setTagsProducto(tagsProducto: TagsProducto): void {
    this.realizarOperacion("TagsProducto", tagsProducto).subscribe(
      () => {
        if (tagsProducto.id !== null) {
          const i = this.datos.TagsProducto.indexOf(tagsProducto)
          this.datos.TagsProducto[i] = tagsProducto
        } else {
          this.http.get<TagsProducto[]>(`${this.API_URI}all/TagsProducto`).subscribe(
            res => {
              this.datos.TagsProducto = new Array<TagsProducto>()
              this.datos.TagsProducto = res as TagsProducto[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla TagsProducto")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla TagsProducto")
        console.log(err)
      }
    )
  }

  public deleteTagsProducto(tagsProducto: TagsProducto) {
    this.realizarOperacion("TagsProducto", tagsProducto, true).subscribe(
      () => {
        const i = this.datos.TagsProducto.indexOf(tagsProducto)
        this.datos.TagsProducto.splice(i, 1)
      }
    )
  }

  public get ResetPassword(): Observable<ResetPassword[]> {
    if (this.datos.ResetPassword.length !== 0 && this.datos.reiniciarResetPassword && this.datos.ResetPasswordValores.valor !== 0) {
      this.datos.ResetPasswordValores.valor = this.datos.ResetPasswordValores.valor - 1
      return of(this.datos.ResetPassword)
    } else {
      if (this.datos.reiniciarResetPassword === true) {
        this.datos.reiniciarResetPassword = false
      }
      const peticion = this.http.get<ResetPassword[]>(`${this.API_URI}all/ResetPassword`)
      peticion.subscribe(
        res => {
          this.datos.ResetPassword = new Array<ResetPassword>()
          this.datos.ResetPassword = res as ResetPassword[]
        },
        err => {
          this.toastr.error("Error en peticion a base de datos en tabla ResetPassword")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setResetPassword(resetPassword: ResetPassword): void {
    this.realizarOperacion("ResetPassword", resetPassword).subscribe(
      () => {
        if (resetPassword.id !== null) {
          const i = this.datos.ResetPassword.indexOf(resetPassword)
          this.datos.ResetPassword[i] = resetPassword
        } else {
          this.http.get<ResetPassword[]>(`${this.API_URI}all/ResetPassword`).subscribe(
            res => {
              this.datos.ResetPassword = new Array<ResetPassword>()
              this.datos.ResetPassword = res as ResetPassword[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla ResetPassword")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla ResetPassword")
        console.log(err)
      }
    )
  }

  public deleteResetPassword(resetPassword: ResetPassword) {
    this.realizarOperacion("ResetPassword", resetPassword, true).subscribe(
      () => {
        const i = this.datos.ResetPassword.indexOf(resetPassword)
        this.datos.ResetPassword.splice(i, 1)
      }
    )
  }

  public get ImagenesProductos(): Observable<ImagenesProductos[]> {
    if (this.datos.ImagenesProductos.length !== 0 && this.datos.reiniciarImagenesProductos && this.datos.ImagenesProductosValores.valor !== 0) {
      this.datos.ImagenesProductosValores.valor = this.datos.ImagenesProductosValores.valor - 1
      return of(this.datos.ImagenesProductos)
    } else {
      if (this.datos.reiniciarImagenesProductos === true) {
        this.datos.reiniciarImagenesProductos = false
      }
      const peticion = this.http.get<ImagenesProductos[]>(`${this.API_URI}all/ImagenesProductos`)
      peticion.subscribe(
        res => {
          this.datos.ImagenesProductos = new Array<ImagenesProductos>()
          this.datos.ImagenesProductos = res as ImagenesProductos[]
        },
        err => {
          this.toastr.error("Error en peticion a base de datos en tabla ImagenesProductos")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setImagenesProductos(imagenes: ImagenesProductos): void {
    this.realizarOperacion("ImagenesProductos", imagenes).subscribe(
      () => {
        if (imagenes.id !== null) {
          const i = this.datos.ImagenesProductos.indexOf(imagenes)
          this.datos.ImagenesProductos[i] = imagenes
        } else {
          this.http.get<ImagenesProductos[]>(`${this.API_URI}all/ImagenesProductos`).subscribe(
            res => {
              this.datos.ImagenesProductos = new Array<ImagenesProductos>()
              this.datos.ImagenesProductos = res as ImagenesProductos[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla ImagenesProductos")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla ImagenesProductos")
        console.log(err)
      }
    )
  }

  public deleteImagenesProductos(imagenes: ImagenesProductos) {
    this.realizarOperacion("ImagenesProductos", imagenes, true).subscribe(
      () => {
        const i = this.datos.ImagenesProductos.indexOf(imagenes)
        this.datos.ImagenesProductos.splice(i, 1)
      }
    )
  }

  public get Stock(): Observable<Stock[]> {
    if (this.datos.Stock.length !== 0 && this.datos.reiniciarStock && this.datos.StockValores.valor !== 0) {
      this.datos.StockValores.valor = this.datos.StockValores.valor - 1
      return of(this.datos.Stock)
    } else {
      if (this.datos.reiniciarStock === true) {
        this.datos.reiniciarStock = false
      }
      const peticion = this.http.get<Stock[]>(`${this.API_URI}all/Stock`)
      peticion.subscribe(
        res => {
          this.datos.Stock = new Array<Stock>()
          this.datos.Stock = res as Stock[]
        },
        err => {
          this.toastr.error("Error en peticion a base de datos en tabla Stock")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setStock(stock: Stock): void {
    this.realizarOperacion("Stock", stock).subscribe(
      () => {
        if (stock.id !== null) {
          const i = this.datos.Stock.indexOf(stock)
          this.datos.Stock[i] = stock
        } else {
          this.http.get<Stock[]>(`${this.API_URI}all/Stock`).subscribe(
            res => {
              this.datos.Stock = new Array<Stock>()
              this.datos.Stock = res as Stock[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Stock")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Stock")
        console.log(err)
      }
    )
  }

  public deleteStock(stock: Stock) {
    this.realizarOperacion("Stock", stock, true).subscribe(
      () => {
        const i = this.datos.Stock.indexOf(stock)
        this.datos.Stock.splice(i, 1)
      }
    )
  }

  public get Descuentos(): Observable<Descuentos[]> {
    if (this.datos.Descuentos.length !== 0 && this.datos.reiniciarDescuentos && this.datos.DescuentosValores.valor !== 0) {
      this.datos.DescuentosValores.valor = this.datos.DescuentosValores.valor - 1
      return of(this.datos.Descuentos)
    } else {
      if (this.datos.reiniciarDescuentos === true) {
        this.datos.reiniciarDescuentos = false
      }
      const peticion = this.http.get<Descuentos[]>(`${this.API_URI}all/Descuentos`)
      peticion.subscribe(
        res => {
          this.datos.Descuentos = new Array<Descuentos>()
          this.datos.Descuentos = res as Descuentos[]
        },
        err => {
          this.toastr.error("Error en peticion a base de datos en tabla Descuentos")
          console.log(err)
        }
      )
      return peticion
    }
  }

  public setDescuentos(descuentos: Descuentos): void {
    this.realizarOperacion("Descuentos", descuentos).subscribe(
      () => {
        if (descuentos.id !== null) {
          const i = this.datos.Descuentos.indexOf(descuentos)
          this.datos.Descuentos[i] = descuentos
        } else {
          this.http.get<Descuentos[]>(`${this.API_URI}all/Descuentos`).subscribe(
            res => {
              this.datos.Descuentos = new Array<Descuentos>()
              this.datos.Descuentos = res as Descuentos[]
            },
            err => {
              this.toastr.error("Error en peticion a base de datos en tabla Descuentos")
            }
          )
        }
      },
      err => {
        this.toastr.error("Error en inserción de datos en tabla Descuentos")
        console.log(err)
      }
    )
  }

  public deleteDescuentos(descuentos: Descuentos) {
    this.realizarOperacion("Descuentos", descuentos, true).subscribe(
      () => {
        const i = this.datos.Descuentos.indexOf(descuentos)
        this.datos.Descuentos.splice(i, 1)
      }
    )
  }



  public procedureCreateUserAndEmail(email: string, contrasena: string, social: number) {
    const sqlProcedure: SqlProcedure = { nombre: "crearUsuarioAtemporal", valores: [email, contrasena, social, new Date()] }
    this.api.doProcedure(sqlProcedure).subscribe(
      () => {
        this.datos.reiniciarUsuarios = true
        this.datos.reiniciarUsuariosRegistrandose = true
        this.Usuarios.subscribe()
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
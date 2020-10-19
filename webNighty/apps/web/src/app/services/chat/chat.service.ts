import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Amigos, gruposMiembrosExtendido, Usuarios, Chats, usuarioPersona, Mensajes } from '@nighty/models';
import { APIService } from '../api/api.service';
import { LoginService } from '../firebase/login.service';
interface Estado {
  cargado: boolean
  fallo: boolean
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  gruposUsuario = new Array<gruposMiembrosExtendido>()
  amigos = new Array<Amigos>()
  chats = new Array<Chats>()
  usuariosAmigosPersona = new Array<usuarioPersona>()
  mensajes = new Array<Mensajes>()

  gruposEstado: Estado = { cargado: false, fallo: false }
  amigosEstado: Estado = { cargado: false, fallo: false }
  chatsEstado: Estado = { cargado: false, fallo: false }
  usuariosAmigosPersonaEstado: Estado = { cargado: false, fallo: false }
  mensajesEstado: Estado = { cargado: false, fallo: false }

  chatActual: Chats

  constructor(private api: APIService, private firebase: LoginService, private route: Router) { }

  getGrupos() {
    const intervalGetGrupos = setInterval(() => {
      if (this.firebase.isLogged()) {
        clearInterval(intervalGetGrupos)
        const usuario: Usuarios = this.usuarioInLog
        const query = "select * from gruposMiembrosGrupos where mg_usuario = " + usuario.id
        this.api.get(query).subscribe(
          (res: any) => {
            Object.keys(res).forEach(x => {
              this.gruposUsuario.push({
                id: res[x]["g_id"],
                nombre: res[x]["g_nombre"],
                descripcion: res[x]["g_descripcion"],
                creado: res[x]["g_creado"],
                modificado: res[x]["g_modificado"],
                id_miembros: res[x]["mg_id"],
                grupo_miembros: res[x]["mg_grupo"],
                usuario_miembros: res[x]["mg_usuario"],
                silenciado_miembros: res[x]["mg_silenciado"],
                prioritario_miembros: res[x]["mg_prioritario"],
                creado_miembros: res[x]["mg_creado"],
                modificado_miembros: res[x]["mg_modificado"]
              })
            })
            this.gruposEstado = { cargado: true, fallo: false }
            this.getChats()
          },
          err => {
            this.gruposEstado = { cargado: true, fallo: true }
            console.log(err)
          })
      }
    }, 500)
  }

  getAmigos() {
    const intervaloGetAmigos = setInterval(() => {
      if (this.firebase.isLogged()) {
        clearInterval(intervaloGetAmigos)
        const usuario: Usuarios = this.usuarioInLog
        const query = "SELECT * from amigos where usuario = " + usuario.id + " or amigo = " + usuario.id
        this.api.get(query).subscribe(
          (res: Amigos[]) => {
            this.amigos = new Array<Amigos>()
            this.amigos = res
            this.amigosEstado = { cargado: true, fallo: false }
            this.getUsuariosPersonaAmigos()
          },
          err => {
            this.amigosEstado = { cargado: true, fallo: true }
            console.log(err)
          })
      }
    }, 50)
  }

  getChats() {
    // Hay que obtener las salas, para ello hay que tener los grupos y los amigos para poder obtenerlos
    let idGrupos = this.gruposUsuario.map(x => x.id)

    if (idGrupos.length === 0) {
      idGrupos = [0]
    }
    const query = "SELECT * from chats where grupo in(" + idGrupos.join() + ") or receptor = " + this.usuarioInLog.id + " or emisor = " + this.usuarioInLog.id

    this.api.get(query).subscribe(
      (res: any[]) => {
        this.chats = new Array<Chats>()
        this.chats = res.map(x => {
          const y = x
          y.nombreChat = JSON.parse(x.nombreChat)
          return y
        })
        this.chatsEstado = { cargado: true, fallo: false }
      },
      err => {
        this.chatsEstado = { cargado: true, fallo: true }
        console.log(err)
      }
    )
  }

  getUsuariosPersonaAmigos() {
    const idAmigos = this.amigos.map(x => x.id)

    if (idAmigos.length !== 0) {

      const query = "SELECT * from personaUsuario where u_id in (" + idAmigos.join() + ")"

      this.api.get(query).subscribe(
        (res: any) => {
          this.usuariosAmigosPersona = new Array<usuarioPersona>()
          Object.keys(res).forEach(x => {
            this.usuariosAmigosPersona.push({
              apellidos: res[x]["p_apellidos"],
              categoria_usuarios: res[x]["u_categoria"],
              dap_usuarios: res[x]["u_dap"],
              estado_usuarios: res[x]["u_estado"],
              fechaNacimiento: res[x]["p_fechaNacimiento"],
              logInWith_usuarios: res[x]["u_logInWith"],
              nombre: res[x]["p_nombre"],
              persona_usuarios: res[x]["p_id"],
              uid_usuarios: res[x]["u_uid"],
              creado: res[x]["p_creado"],
              creado_usuarios: res[x]["u_creado"],
              id: res[x]["p_id"],
              id_usuarios: res[x]["u_id"],
              modificado: res[x]["p_modificado"],
              modificado_usuarios: res[x]["u_modificado"],
              motivoInhabilitacion_usuarios: res[x]["u_motivoInhabilitacion"]
            })
          })
          this.chatsEstado = { cargado: true, fallo: false }
        }, err => {
          console.log(err)
          this.chatsEstado = { cargado: true, fallo: true }
        })
    }
  }

  getMensajes(chat: Chats, ultimoMensaje?: Mensajes) {
    console.log(chat.id)
    this.api.chat({ idChat: chat.id, timestamp: ultimoMensaje !== null && ultimoMensaje !== undefined ? ultimoMensaje.creado : new Date() }).subscribe(
      (res: any[]) => {
        this.mensajes = new Array<Mensajes>()
        this.mensajes = res.map(x => {
          const y = {
            chat: x.chat,
            orden: x.orden,
            creado: x.creado,
            emisor: JSON.parse(x.emisor),
            id: x.id,
            mensajeHtml: x.mensajeHtml,
            modificado: x.modificado
          }
          return y
        })
        this.mensajes.sort((a, b) => new Date(a.creado).getTime() - new Date(b.creado).getTime())
        this.mensajesEstado = { cargado: true, fallo: false }
        this.actualizarChat()
      },
      err => {
        this.mensajesEstado = { cargado: true, fallo: true }
        console.log(err)
      }
    )
  }

  scrollBottomMessages() {
    const obj = document.getElementById("scrollMe");
    obj.scrollTo(0, obj.scrollHeight - obj.offsetHeight);
  }

  actualizarChat() {
    const intervaloActualizarChat = setInterval(() => {
      if (this.route.url === "/chat") {

        this.api.chat({ idChat: this.chatActual.id }).subscribe(
          (res: any[]) => {
            const mensajesres = res.map(x => {
              const y = {
                chat: x.chat,
                orden: x.orden,
                creado: x.creado,
                emisor: JSON.parse(x.emisor),
                id: x.id,
                mensajeHtml: x.mensajeHtml,
                modificado: x.modificado
              }
              return y
            })
            if (mensajesres.map(x => x.id).filter(x => !this.mensajes.map(y => y.id).includes(x)).length !== 0) {
              const mensajes = mensajesres.filter(x => !this.mensajes.map(y => y.id).includes(x.id))
              this.mensajes = [...this.mensajes, ...mensajes]
              this.mensajes.sort((a, b) => new Date(a.creado).getTime() - new Date(b.creado).getTime())
              const obj = document.getElementById("scrollMe")
              const scrolled = obj.scrollTop === (obj.scrollHeight - obj.offsetHeight)
              if (scrolled) {
                setTimeout(() => {
                  this.scrollBottomMessages()
                }, 10)
              }
            }
          },
          err => {
            console.log(err)
          }
        )
      } else {
        clearInterval(intervaloActualizarChat)
      }
    }, 100)
  }

  get usuarioInLog(): Usuarios { return this.firebase.UsuarioConectado }
}

import { Injectable } from '@angular/core';
import { Amigos, gruposMiembrosExtendido, Usuarios, Chats, usuarioPersona, Mensajes } from '@nighty/models';
import { APIService } from '../api/api.service';
import { LoginService } from '../firebase/login.service';
interface estado {
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

  gruposEstado: estado = { cargado: false, fallo: false }
  amigosEstado: estado = { cargado: false, fallo: false }
  chatsEstado: estado = { cargado: false, fallo: false }
  usuariosAmigosPersonaEstado: estado = { cargado: false, fallo: false }
  mensajesEstado: estado = { cargado: false, fallo: false }

  chatActual: Chats

  constructor(private api: APIService) { }

  getGrupos() {
    const usuario: Usuarios = this.usuario
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
      },
      err => {
        this.gruposEstado = { cargado: true, fallo: true }
        console.log(err)
      })
  }

  getAmigos() {
    const usuario: Usuarios = this.usuario
    const query = "SELECT * from amigos where usuario = " + usuario.id + " or amigo = " + usuario.id
    this.api.get(query).subscribe(
      (res: Amigos[]) => {
        this.amigos = new Array<Amigos>()
        this.amigos = res
        this.amigosEstado = { cargado: true, fallo: false }
      },
      err => {
        this.amigosEstado = { cargado: true, fallo: true }
        console.log(err)
      })
  }

  getChats() {
    // Hay que obtener las salas, para ello hay que tener los grupos y los amigos para poder obtenerlos
    const idGrupos = this.gruposUsuario.map(x => x.id)

    const query = "SELECT * from chats where grupo in(" + idGrupos.join() + ") or receptor = " + this.usuario.id + " or enviadoPor = " + this.usuario.id

    this.api.get(query).subscribe(
      (res: Chats[]) => {
        this.chats = new Array<Chats>()
        this.chats = res
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

  getMensajes(chat: number, ultimoMensaje: Mensajes) {
    this.api.chat({ idSala: chat, timestamp: ultimoMensaje.creado }).subscribe(
      (res: Mensajes[]) => {
        this.mensajes = new Array<Mensajes>()
        this.mensajes = res
        this.mensajes.sort((a, b) => new Date(a.creado).getTime() - new Date(b.creado).getTime())
        this.mensajesEstado = { cargado: true, fallo: false }
      },
      err => {
        this.mensajesEstado = { cargado: true, fallo: true }
        console.log(err)
      }
    )
  }

  actualizarChat(chat: number) {
    setInterval(() => {
      this.api.chat({ idSala: chat }).subscribe(
        (res: Mensajes[]) => {
          const mensajesId = this.mensajes.map(x => x.id)
          res.filter(x => !mensajesId.includes(x.id))
          this.mensajes = [...this.mensajes, ...res]
          this.mensajes.sort((a, b) => new Date(a.creado).getTime() - new Date(b.creado).getTime())
        },
        err => {
          console.log(err)
        }
      )
    }, 500)
  }

  get usuario(): Usuarios { return JSON.parse(localStorage.getItem("usuario")) }
}

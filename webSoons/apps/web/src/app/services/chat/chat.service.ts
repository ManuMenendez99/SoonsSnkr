import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Amigos, gruposMiembrosExtendido, Usuarios, Chats, usuarioPersona, Mensajes, Personas, MensajesEnviar, UltimaConexionChats, Grupos, MiembrosGrupos } from '@Soons/models';
import { APIService } from '../api/api.service';
import { DialogsService } from '../dialogs/dialogs.service';
import { LoginService } from '../firebase/login.service';
import { GetterSetterService } from '../getterSetter/getter-setter.service';
interface Estado {
  cargado: boolean
  fallo: boolean
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // gruposUsuario = new Array<gruposMiembrosExtendido>()
  // amigos = new Array<Amigos>()
  // chats = new Array<Chats>()
  // usuariosAmigosPersona = new Array<usuarioPersona>()
  // mensajes = new Array<Mensajes>()

  // ultimasConexionesChats = new Array<UltimaConexionChats>();
  // ultimasConexionesChatCargadas = false

  // tieneMensajesNuevosCargados = false
  // sacarLayerMensajeNuevo = false
  
  // gruposEstado: Estado = { cargado: false, fallo: false }
  // amigosEstado: Estado = { cargado: false, fallo: false }
  // chatsEstado: Estado = { cargado: false, fallo: false }
  // usuariosAmigosPersonaEstado: Estado = { cargado: false, fallo: false }
  // mensajesEstado: Estado = { cargado: false, fallo: false }

  // chatActual: Chats

  constructor(private api: APIService, private firebase: LoginService, private route: Router, private getterSetter: GetterSetterService, private dialog: DialogsService) { }

  // getGrupos() {
  //   const intervalGetGrupos = setInterval(() => {
  //     if (this.firebase.isLogged()) {
  //       clearInterval(intervalGetGrupos)
  //       const usuario: Usuarios = this.usuarioInLog
  //       const query = "select * from gruposMiembrosGrupos where mg_usuario = " + usuario.id
  //       this.api.get(query).subscribe(
  //         (res: any) => {
  //           Object.keys(res).forEach(x => {
  //             this.gruposUsuario.push({
  //               id: res[x]["g_id"],
  //               nombre: res[x]["g_nombre"],
  //               descripcion: res[x]["g_descripcion"],
  //               creado: res[x]["g_creado"],
  //               modificado: res[x]["g_modificado"],
  //               id_miembros: res[x]["mg_id"],
  //               grupo_miembros: res[x]["mg_grupo"],
  //               usuario_miembros: res[x]["mg_usuario"],
  //               silenciado_miembros: res[x]["mg_silenciado"],
  //               prioritario_miembros: res[x]["mg_prioritario"],
  //               creado_miembros: res[x]["mg_creado"],
  //               modificado_miembros: res[x]["mg_modificado"]
  //             })
  //           })
  //           this.gruposEstado = { cargado: true, fallo: false }
  //           this.getChats()
  //         },
  //         err => {
  //           this.gruposEstado = { cargado: true, fallo: true }
  //           console.log(err)
  //         })
  //     }
  //   }, 500)
  // }

  // getAmigos() {
  //   const intervaloGetAmigos = setInterval(() => {
  //     if (this.firebase.isLogged()) {
  //       clearInterval(intervaloGetAmigos)
  //       const usuario: Usuarios = this.usuarioInLog
  //       const query = "SELECT * from amigos where usuario = " + usuario.id + " or amigo = " + usuario.id
  //       this.api.get(query).subscribe(
  //         (res: Amigos[]) => {
  //           this.amigos = new Array<Amigos>()
  //           this.amigos = res
  //           this.amigosEstado = { cargado: true, fallo: false }
  //           this.getUsuariosPersonaAmigos()
  //         },
  //         err => {
  //           this.amigosEstado = { cargado: true, fallo: true }
  //           console.log(err)
  //         })
  //     }
  //   }, 50)
  // }

  // getChats() {
  //   let idGrupos = this.gruposUsuario.map(x => x.id)

  //   if (idGrupos.length === 0) {
  //     idGrupos = [0]
  //   }
  //   const query = "SELECT * from chats where grupo in(" + idGrupos.join() + ") or receptor = " + this.usuarioInLog.id + " or emisor = " + this.usuarioInLog.id

  //   this.api.get(query).subscribe(
  //     (res: any[]) => {
  //       this.chats = new Array<Chats>()
  //       this.chats = res.map(x => {
  //         const y = x
  //         y.nombreChat = JSON.parse(x.nombreChat)
  //         return y
  //       })
  //       this.chatsEstado = { cargado: true, fallo: false }
  //     },
  //     err => {
  //       this.chatsEstado = { cargado: true, fallo: true }
  //       console.log(err)
  //     }
  //   )
  // }

  // getUsuariosPersonaAmigos() {
  //   const idAmigos = this.amigos.map(x => x.id)

  //   if (idAmigos.length !== 0) {

  //     const query = "SELECT * from personaUsuario where u_id in (" + idAmigos.join() + ")"

  //     this.api.get(query).subscribe(
  //       (res: any) => {
  //         this.usuariosAmigosPersona = new Array<usuarioPersona>()
  //         Object.keys(res).forEach(x => {
  //           this.usuariosAmigosPersona.push({
  //             apellidos: res[x]["p_apellidos"],
  //             categoria_usuarios: res[x]["u_categoria"],
  //             dap_usuarios: res[x]["u_dap"],
  //             estado_usuarios: res[x]["u_estado"],
  //             fechaNacimiento: res[x]["p_fechaNacimiento"],
  //             logInWith_usuarios: res[x]["u_logInWith"],
  //             nombre: res[x]["p_nombre"],
  //             persona_usuarios: res[x]["p_id"],
  //             uid_usuarios: res[x]["u_uid"],
  //             creado: res[x]["p_creado"],
  //             creado_usuarios: res[x]["u_creado"],
  //             id: res[x]["p_id"],
  //             id_usuarios: res[x]["u_id"],
  //             modificado: res[x]["p_modificado"],
  //             modificado_usuarios: res[x]["u_modificado"],
  //             motivoInhabilitacion_usuarios: res[x]["u_motivoInhabilitacion"]
  //           })
  //         })
  //         this.chatsEstado = { cargado: true, fallo: false }
  //       }, err => {
  //         console.log(err)
  //         this.chatsEstado = { cargado: true, fallo: true }
  //       })
  //   }
  // }

  // getMensajes(chat: Chats, ultimoMensaje?: Mensajes) {
  //   console.log("obteniendo mensajes")
  //   this.api.chat({ idChat: chat.id, timestamp: ultimoMensaje !== null && ultimoMensaje !== undefined ? ultimoMensaje.creado : new Date() }).subscribe(
  //     (res: any[]) => {
  //       this.mensajes = new Array<Mensajes>()
  //       this.mensajes = res.map(x => {
  //         const y = {
  //           chat: x.chat,
  //           orden: x.orden,
  //           creado: x.creado,
  //           emisor: JSON.parse(x.emisor),
  //           id: x.id,
  //           mensajeHtml: x.mensajeHtml,
  //           modificado: x.modificado
  //         }
  //         return y
  //       })
  //       this.mensajes.sort((a, b) => new Date(a.creado).getTime() - new Date(b.creado).getTime())
  //       this.mensajesEstado = { cargado: true, fallo: false }
  //       this.tieneMensajesNuevos()
  //       this.actualizarChat()
  //     },
  //     err => {
  //       this.mensajesEstado = { cargado: true, fallo: true }
  //       console.log(err)
  //     }
  //   )
  // }

  // tieneMensajesNuevos() {
  //   if (this.mensajes.length !== 0) {
  //     console.log(this.usuarioInLog.id)
  //     console.log(this.chatActual.id)
  //     console.log(this.ultimasConexionesChats)
  //     if (this.ultimasConexionesChats.filter(x => x.idUsuario === this.usuarioInLog.id && x.idChat === this.chatActual.id).length !== 0) {
  //       console.log(this.mensajes.filter(x => x.creado >= this.ultimasConexionesChats.find(x => x.idUsuario === this.usuarioInLog.id && x.idChat === this.chatActual.id).ultimaConexion))
  //       this.tieneMensajesNuevosCargados = this.mensajes.filter(x => x.creado >= this.ultimasConexionesChats.find(x => x.idUsuario === this.usuarioInLog.id && x.idChat === this.chatActual.id).ultimaConexion).length !== 0
  //       this.sacarLayerMensajeNuevo = true;
  //     } else {
  //       this.tieneMensajesNuevosCargados = false
  //     }
  //   } else {
  //     this.tieneMensajesNuevosCargados = false
  //   }
  // }

  // scrollBottomMessages() {
  //   const obj = document.getElementById("scrollMe");
  //   obj.scrollTo(0, obj.scrollHeight - obj.offsetHeight);
  // }

  
  // scrollNewMessages() {
  //   console.log("A los nuevos")
  //   const obj = document.getElementById("scrollMe")
  //   obj.scrollTo(0, document.getElementById("contenidoNuevo").offsetTop - 200)
  // }

  // actualizarChat() {
  //   const intervaloActualizarChat = setInterval(() => {
  //     if (this.route.url === "/chat") {
  //       this.api.chat({ idChat: this.chatActual.id }).subscribe(
  //         (res: any[]) => {
  //           const mensajesres = res.map(x => {
  //             const y = {
  //               chat: x.chat,
  //               orden: x.orden,
  //               creado: x.creado,
  //               emisor: JSON.parse(x.emisor),
  //               id: x.id,
  //               mensajeHtml: x.mensajeHtml,
  //               modificado: x.modificado
  //             }
  //             return y
  //           })
  //           if (mensajesres.map(x => x.id).filter(x => !this.mensajes.map(y => y.id).includes(x)).length !== 0) {
  //             const mensajes = mensajesres.filter(x => !this.mensajes.map(y => y.id).includes(x.id))
  //             this.mensajes = [...this.mensajes, ...mensajes]
  //             this.mensajes.sort((a, b) => new Date(a.creado).getTime() - new Date(b.creado).getTime())
  //             const obj = document.getElementById("scrollMe")
  //             const scrolled = obj.scrollTop === (obj.scrollHeight - obj.offsetHeight)
  //             if (scrolled) {
  //               setTimeout(() => {
  //                 this.scrollBottomMessages()
  //               }, 10)
  //             }
  //           }
  //         },
  //         err => {
  //           console.log(err)
  //         }
  //       )
  //     } else {
  //       clearInterval(intervaloActualizarChat)
  //     }
  //   }, 100)
  // }

  // enviarChat(mensaje: MensajesEnviar) {
  //   mensaje.creado = new Date()
  //   mensaje.modificado = new Date()
  //   if (this.chatActual.id !== null && this.chatActual.id !== undefined && this.chatActual.id !== 0) {
  //     this.getterSetter.UltimaConexionChats.subscribe(
  //       res => {
  //         let ultimaConexionChats: UltimaConexionChats = { idChat: this.chatActual.id, idUsuario: this.usuarioInLog.id, ultimaConexion: new Date() }
  //         let ultimasConexionesChats = new Array<UltimaConexionChats>();
  //         ultimasConexionesChats = res as UltimaConexionChats[];
  //         if (ultimasConexionesChats.filter(x => x.idChat === this.chatActual.id && x.idUsuario === this.usuarioInLog.id).length != 0) {
  //           ultimaConexionChats.id = ultimasConexionesChats.find(x => x.idChat === this.chatActual.id && x.idUsuario === this.usuarioInLog.id).id
  //         }
  //         this.reiniciarUltimasConexiones();
  //         this.getterSetter.setUltimaConexionChats(ultimaConexionChats);
  //         this.scrollBottomMessages()
  //       }
  //     )
  //   }
  //   this.getterSetter.setMensajes(mensaje)
  // }

  // ultimaConexionChat() {
  //   return this.getterSetter.UltimaConexionChats;
  // }

  // reiniciarUltimasConexiones() {
  //   this.ultimaConexionChat().subscribe(
  //     res => {
  //       this.ultimasConexionesChatCargadas = true
  //       let ultimasConexionesChats = new Array<UltimaConexionChats>();
  //       ultimasConexionesChats = res as UltimaConexionChats[];
  //       this.ultimasConexionesChats = ultimasConexionesChats.filter(x => x.idUsuario === this.usuarioInLog.id)
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

  // crearGrupo() {
  //   const idAmigos: Array<number> = [...this.amigos.filter(x => x.usuario !== this.usuarioInLog.id).map(x => x.usuario),...this.amigos.filter(x => x.amigo !== this.usuarioInLog.id).map(x => x.amigo)]
  //   this.getterSetter.Personas.subscribe(
  //     res => {
  //       const Personas: Array<Personas> = res as Personas[]
  //       this.dialog.abrirCrearGrupoChat(Personas.filter(x => idAmigos.includes(x.id)), this.amigos, this.personaInLog).beforeClosed().subscribe(
  //         (result: any = undefined) => {
  //           const nombre = result.nombre
  //           const descripcion = result.descripcion
  //           const administradores = result.administradoresç 
  //           const usuarios = result.usuarios

            
  //           const grupo:Grupos = {nombre: nombre,descripcion: descripcion}
  //           const miembrosGrupo: MiembrosGrupos = {grupo: ,usuario: ,}

            
  //           this.getterSetter.setGrupos(grupo);
  //           //HAY QUE PONER ROL EN LA BASE DE DATOS
  //         }
  //       )
  //     },
  //     err => {

  //     }
  //   )
    
  // }

  // get usuarioInLog(): Usuarios { return this.firebase.UsuarioConectado }
  // get personaInLog(): Personas { return this.firebase.PersonaConectado }
}

import { Grupos, Personas } from './models';

export interface gruposMiembrosExtendido extends Grupos {
    id_miembros?: number
    grupo_miembros: number
    usuario_miembros: number
    silenciado_miembros?: Date
    prioritario_miembros?: boolean
    creado_miembros?: Date
    modificado_miembros?: Date
}

export interface usuarioPersona extends Personas {
    id_usuarios?: number
    persona_usuarios: number
    categoria_usuarios: number
    uid_usuarios: string
    dap_usuarios: string
    estado_usuarios: string
    // 1 - Email, 2 - Google, 3 - Facebook, 4 - Twitter
    logInWith_usuarios: number
    motivoInhabilitacion_usuarios?: number
    creado_usuarios?: Date
    modificado_usuarios?: Date
}
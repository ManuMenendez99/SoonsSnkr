import { Usuarios } from "@nighty/models";

export interface Habilitacion extends Usuarios {
    habilitacion: boolean
}

export interface GoogleUser {
    name: string,
    photoUrl: string,
    email: string,
    uid: string
}

export interface ChatObtencion {
    idSala: number,
    // el rango es desde el timestamp
    timestamp?: Date
}
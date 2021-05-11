import { Usuarios } from "@Soons/models";

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
    idChat: number,
    // el rango es desde el timestamp
    timestamp?: Date
}
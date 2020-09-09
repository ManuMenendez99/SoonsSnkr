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
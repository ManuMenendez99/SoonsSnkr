import { Marcas, Productos, Stock, TagsProducto, Usuarios } from "./models";

export interface Links {
    href: string
    method: string
    rel: string
    title: string
}

export interface ProductosCompleto {
    producto: Productos
    marca: Marcas
    stockProducto: Stock[]
    tagsProducto: TagsProducto[]
}

export interface ProductosCompletoAdministracion {
    producto: Productos
    marca: Marcas
    stockProducto: Stock
    tagsProducto: TagsProducto[]
    usuario: Usuarios
}
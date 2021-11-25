import { Categorias, Marcas, Productos, Stock, Tags, TagsProducto, Usuarios } from "./models";

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
    tags: Tags[]
    categoria: Categorias
}

export interface ProductosCompletoAdministracion {
    producto: Productos
    marca: Marcas
    stockProducto: Stock
    tags: Tags[]
    usuario: Usuarios
    categorias: Categorias
}
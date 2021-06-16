import { Injectable } from '@angular/core';
import { ResetPassword, Usuarios, UsuariosRegistrandose, Paises, Ciudades, Direcciones, DireccionesUsuario, Marcas, Categorias, Productos, Tags, TagsProducto, ImagenesProductos, Stock, Descuentos, MensajeriasAceptadas, Archivos, ImagenesMarcas } from "@Soons/models";
interface ValorDefecto {
  valor: number,
  defecto: number
}
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  Usuarios = new Array<Usuarios>()
  reiniciarUsuarios = false
  UsuariosValores: ValorDefecto = { valor: 0, defecto: 1 }

  Archivos = new Array<Archivos>()
  reiniciarArchivos = false
  ArchivosValores: ValorDefecto = { valor: 0, defecto: 1 }

  UsuariosRegistrandose = new Array<UsuariosRegistrandose>()
  reiniciarUsuariosRegistrandose = false
  UsuariosRegistrandoseValores: ValorDefecto = { valor: 0, defecto: 1 }

  Paises = new Array<Paises>()
  reiniciarPaises = false
  PaisesValores: ValorDefecto = { valor: 0, defecto: 1 }

  Ciudades = new Array<Ciudades>()
  reiniciarCiudades = false
  CiudadesValores: ValorDefecto = { valor: 0, defecto: 1 }

  Direcciones = new Array<Direcciones>()
  reiniciarDirecciones = false
  DireccionesValores: ValorDefecto = { valor: 0, defecto: 1 }

  DireccionesUsuario = new Array<DireccionesUsuario>()
  reiniciarDireccionesUsuario = false
  DireccionesUsuarioValores: ValorDefecto = { valor: 0, defecto: 1 }

  Marcas = new Array<Marcas>()
  reiniciarMarcas = false
  MarcasValores: ValorDefecto = { valor: 0, defecto: 1 }

  Categorias = new Array<Categorias>()
  reiniciarCategorias = false
  CategoriasValores: ValorDefecto = { valor: 0, defecto: 1 }

  MensajeriasAceptadas = new Array<MensajeriasAceptadas>()
  reiniciarMensajeriasAceptadas = false
  MensajeriasAceptadasValores: ValorDefecto = { valor: 0, defecto: 1 }

  Productos = new Array<Productos>()
  reiniciarProductos = false
  ProductosValores: ValorDefecto = { valor: 0, defecto: 1 }

  Tags = new Array<Tags>()
  reiniciarTags = false
  TagsValores: ValorDefecto = { valor: 0, defecto: 1 }

  TagsProducto = new Array<TagsProducto>()
  reiniciarTagsProducto = false
  TagsProductoValores: ValorDefecto = { valor: 0, defecto: 1 }

  ImagenesProductos = new Array<ImagenesProductos>()
  reiniciarImagenesProductos = false
  ImagenesProductosValores: ValorDefecto = { valor: 0, defecto: 1 }

  ResetPassword = new Array<ResetPassword>()
  reiniciarResetPassword = false
  ResetPasswordValores: ValorDefecto = { valor: 0, defecto: 1 }

  Stock = new Array<Stock>()
  reiniciarStock = false
  StockValores: ValorDefecto = { valor: 0, defecto: 1 }

  Descuentos = new Array<Descuentos>()
  reiniciarDescuentos = false
  DescuentosValores: ValorDefecto = { valor: 0, defecto: 1 }

  constructor() { }
}

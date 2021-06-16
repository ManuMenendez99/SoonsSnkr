export interface Usuarios {
  id?: number
  uid: string
  role?: number
  email: String
  nombre: String
  apellidos: String
  contrasena: String
  telefono: number
  fechaNacimiento: Date
  logInWith: number
  preferencias: number
  creado?: Date
  modificado?: Date
};

export interface Archivos {
  id?: number
  nombre: String
  mime: String
  extension: String
  size: number
  codigo: String
  usuario: number
  archivoFoto: boolean
  creado?: Date
  modificado?: Date
}

export interface MensajeriasAceptadas {
  id?: number
  usuario: number
  publicidad: boolean
  venta: boolean
  compra: boolean
  administrador: boolean
  descuento: boolean
  stock: boolean
  creado?: Date
  modificado?: Date
}

export interface UsuariosRegistrandose {
  id?: number
  email: String
  contrasena?: String
  logInWith: number
  creado?: Date
  modificado?: Date
};
export interface Paises {
  id?: number
  codigo: String
  nombre: String
  creado?: Date
  modificado?: Date
};
export interface Ciudades {
  id?: number
  nombre: String
  paisId: number
  creado?: Date
  modificado?: Date
};
export interface Direcciones {
  id?: number
  ciudadId: number
  direccion: String
  codigoPostal: number
  creado?: Date
  modificado?: Date
};
export interface DireccionesUsuario {
  id?: number
  usuario: number
  direccion: number
  principal?: boolean
  creado?: Date
  modificado?: Date
};
export interface Marcas {
  id?: number
  nombre: String
  archivo: number
  descripcion: String
  creado?: Date
  modificado?: Date
};
export interface Categorias {
  id?: number
  nombre: String
  creado?: Date
  modificado?: Date
};
export interface Productos {
  id?: number
  nombre: String
  categoria: number
  sku?: String
  precio: number
  descuento?: number
  descripcion?: String
  genero: number
  creado?: Date
  modificado?: Date
};
export interface Tags {
  id?: number
  nombre: String
  creado?: Date
  modificado?: Date
};
export interface TagsProducto {
  id?: number
  tagId: number
  productoId: number
  creado?: Date
  modificado?: Date
};
export interface ImagenesProductos {
  id?: number
  imagen: String
  productoId: number
  creado?: Date
  modificado?: Date
};
export interface ImagenesMarcas {
  id?: number
  imagen: String
  marcaId: number
  creado?: Date
  modificado?: Date
};
export interface Stock {
  id?: number
  talla: number
  productoId: number
  cantidad?: number
  creado?: Date
  modificado?: Date
};
export interface Descuentos {
  id?: number
  codigo: number
  descuento?: number
  creado?: Date
  modificado?: Date
};

export interface ResetPassword {
  id?: number
  usuarioId: number
  contrasenaOriginal: string
  creado?: Date
  modificado?: Date
}
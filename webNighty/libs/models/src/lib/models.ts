export interface Amigos {
  id?: number
  usuario: number
  amigo: number
  silenciado: Date
  bloqueado: boolean
  prioritario: boolean
  creado?: Date
  modificado?: Date
}

export interface Archivos {
  id?: number
  codigo: string
  nombre: string
  mime: string
  extension: string
  size: number
  usuario: number
  direccionOnline?: string
  creado?: Date
  modificado?: Date
  archivoFoto?: boolean
}

export interface ArchivosCategoria {
  id?: number
  archivo: number
  categoria: number
  cabecera?: boolean
  orden: number
  creado?: Date
  modificado?: Date
}

export interface ArchivosEmpresa {
  id?: number
  archivo: number
  empresa: number
  cabecera?: boolean
  orden: number
  creado?: Date
  modificado?: Date
}

export interface ArchivosEstablecimiento {
  id?: number
  archivo: number
  establecimiento: number
  cabecera?: boolean
  orden: number
  creado?: Date
  modificado?: Date
}

export interface ArchivosEvento {
  id?: number
  archivo: number
  evento: number
  cabecera?: boolean
  orden: number
  creado?: Date
  modificado?: Date
}

export interface ArchivosMarca {
  id?: number
  archivo: number
  marca: number
  cabecera?: boolean
  orden: number
  creado?: Date
  modificado?: Date
}

export interface ArchivosProducto {
  id?: number
  archivo: number
  producto: number
  cabecera?: boolean
  orden: number
  creado?: Date
  modificado?: Date
}

export interface ArchivosPromocion {
  id?: number
  archivo: number
  promocion: number
  cabecera?: boolean
  orden: number
  creado?: Date
  modificado?: Date
}

export interface Caracteristicas {
  id?: number
  texto: string
  creado?: Date
  modificado?: Date
}

export interface CaracteristicasDeProductos {
  id?: number
  caracteristica: string
  creado?: Date
  modificado?: Date
}

export interface CaracteristicasEvento {
  id?: number
  caracteristica?: number
  evento?: number
  orden?: number
  creado?: Date
  modificado?: Date
}

export interface CaracteristicasProducto {
  id?: number
  caracteristica: number
  producto: number
  creado?: Date
  modificado?: Date
}

export interface Categorias {
  id?: number
  nombre: string
  tipoCategoria: number
  creado?: Date
  modificado?: Date
}

export interface Chats {
  id?: number
  enviadoPor?: number
  receptor?: number
  grupo?: number
  nombreChat: string
  tipoChat: boolean
  creado?: Date
  modificado?: Date
}

export interface Descripciones {
  id?: number
  texto: string
  creado?: Date
  modificado?: Date
}

export interface DescripcionesEvento {
  id?: number
  descripcion?: number
  evento?: number
  orden?: number
  creado?: Date
  modificado?: Date
}

export interface DiasMes {
  id?: number
  diaMesInicio: number
  diaMesFin: number
  creado?: Date
  modificado?: Date
}

export interface DiasSemana {
  id?: number
  diaInicio?: number
  diaFin?: number
  creado?: Date
  modificado?: Date
}

export interface Direcciones {
  id?: number
  direccion: string
  piso?: number
  puerta?: string
  escalera?: string
  localidad: number
  codigoPostal: number
  pais: number
  creado?: Date
  modificado?: Date
}

export interface DireccionesPersona {
  id?: number
  direccion: number
  persona: number
  orden: number
  creado?: Date
  modificado?: Date
}

export interface Emails {
  id?: number
  email: string
  creado?: Date
  modificado?: Date
}

export interface EmailsPersona {
  id?: number
  email: number
  persona: number
  orden: number
  creado?: Date
  modificado?: Date
}

export interface Empresas {
  id?: number
  nombre: string
  creado?: Date
  modificado?: Date
}

export interface Establecimientos {
  id?: number
  nombre: string
  empresa: number
  tipoEstablecimiento: number
  codigo: string
  creado?: Date
  modificado?: Date
}

export interface Eventos {
  id?: number
  nombre: string
  precioEntrada: number
  tipoEventos: number
  creado?: Date
  modificado?: Date
}

export interface EventosEstablecimientos {
  id?: number
  evento: number
  establecimiento: number
  creado?: Date
  modificado?: Date
}

export interface FaxsPersona {
  id?: number
  fax: number
  persona: number
  orden: number
  creado?: Date
  modificado?: Date
}

export interface Fechas {
  id?: number
  fechaInicio: Date
  fechaFin: Date
  creado?: Date
  modificado?: Date
}

export interface Grupos {
  id?: number
  nombre: string
  descripcion: string
  creado?: Date
  modificado?: Date
}

export interface GruposConsumicion {
  id?: number
  codigo: string
  creado?: Date
  modificado?: Date
}

export interface HorarioDiasMesEstablecimientos {
  id?: number
  fecha: number
  establecimiento: number
  creado?: Date
  modificado?: Date
}

export interface HorarioDiasMesEventos {
  id?: number
  fecha: number
  evento: number
  creado?: Date
  modificado?: Date
}

export interface HorarioDiasMesPromociones {
  id?: number
  fecha: number
  promocion: number
  creado?: Date
  modificado?: Date
}

export interface HorarioDiasSemanaEstablecimientos {
  id?: number
  fecha: number
  establecimiento: number
  creado?: Date
  modificado?: Date
}

export interface HorarioDiasSemanaEventos {
  id?: number
  fecha: number
  evento: number
  creado?: Date
  modificado?: Date
}

export interface HorarioDiasSemanaPromociones {
  id?: number
  fecha: number
  promocion: number
  creado?: Date
  modificado?: Date
}

export interface HorarioFechasEstablecimientos {
  id?: number
  fecha: number
  establecimiento: number
  creado?: Date
  modificado?: Date
}

export interface HorarioFechasEventos {
  id?: number
  fecha: number
  evento: number
  creado?: Date
  modificado?: Date
}

export interface HorarioFechasPromociones {
  id?: number
  fecha: number
  promocion: number
  creado?: Date
  modificado?: Date
}

export interface HorarioHorasEstablecimientos {
  id?: number
  fecha: number
  establecimiento: number
  creado?: Date
  modificado?: Date
}

export interface HorarioHorasEventos {
  id?: number
  fecha: number
  evento: number
  creado?: Date
  modificado?: Date
}

export interface HorarioHorasPromociones {
  id?: number
  fecha: number
  promocion: number
  creado?: Date
  modificado?: Date
}

export interface HorarioMesesEstablecimientos {
  id?: number
  fecha: number
  establecimiento: number
  creado?: Date
  modificado?: Date
}

export interface HorarioMesesEventos {
  id?: number
  fecha: number
  evento: number
  creado?: Date
  modificado?: Date
}

export interface HorarioMesesPromociones {
  id?: number
  fecha: number
  promocion: number
  creado?: Date
  modificado?: Date
}

export interface Horas {
  id?: number
  horaInicio?: number
  horaFin?: number
  creado?: Date
  modificado?: Date
}

export interface Invitados {
  id?: number
  usuario: number
  email: string
  usuarioGanado?: boolean
  codigo: string
  creado?: Date
  modificado?: Date
}

export interface LineasTicket {
  id?: number
  ticket: number
  producto: number
  usuario: number
  cantidad: number
  creado?: Date
  modificado?: Date
}

export interface Marcas {
  id?: number
  nombre: string
  descripcion: string
  imagen: number
  creado?: Date
  modificado?: Date
}

export interface Mensajes {
  id?: number
  chat: number
  mensajeHtml: string
  creado?: Date
  modificado?: Date
}

export interface MesasEstablecimiento {
  id?: number
  codigo: string
  tipoMesa: number
  sillas: number
  numero: number
  creado?: Date
  modificado?: Date
}

export interface Meses {
  id?: number
  mesInicio: number
  mesFin: number
  creado?: Date
  modificado?: Date
}

export interface MiembrosGrupos {
  id?: number
  grupo: number
  usuario: number
  silenciado?: Date
  prioritario?: boolean
  creado?: Date
  modificado?: Date
}

export interface MiembrosGruposConsumicion {
  id?: number
  grupo: number
  usuario: number
  creado?: Date
  modificado?: Date
}

export interface MotivosInhabilitacion {
  id?: number
  texto: string
  creado?: Date,
  modificado?: Date
}

export interface Paises {
  id?: number
  nombre: string
  creado?: Date
  modificado?: Date
}

export interface Personas {
  id?: number
  nombre: string
  apellidos: string
  fechaNacimiento: Date
  creado?: Date
  modificado?: Date
}

export interface PersonasContactoEmpresa {
  id?: number
  personaEmpresa: number
  empresa: number
  orden: number
  creado?: Date
  modificado?: Date
}

export interface PersonasContactoEstablecimiento {
  id?: number
  personaEstablecimiento: number
  establecimiento: number
  orden: number
  creado?: Date
  modificado?: Date
}

export interface PersonasContactoMarcas {
  id?: number
  personaMarca: number
  marca: number
  orden: number
  creado?: Date
  modificado?: Date
}

export interface PersonasEstablecimientos {
  id?: number
  establecimiento: number
  persona: number
  puesto: number
  creado?: Date
  modificado?: Date
}

export interface Productos {
  id?: number
  nombre: string
  descripcion: string
  tipoProducto: number
  creado?: Date
  modificado?: Date
}

export interface Promociones {
  id?: number
  nombre: string
  descripcion: string
  titulo: string
  tipoPromocion: number
  creado?: Date
  modificado?: Date
}

export interface PromocionesProductos {
  id?: number
  promocion: number
  producto: number
  precio: number
  creado?: Date
  modificado?: Date
}

export interface PublicidadEmpresa {
  id?: number
  empresa: number
  precio: number
  fechaInicio: Date
  fechaFin: Date
  creado?: Date
  modificado?: Date
}

export interface PublicidadEstablecimiento {
  id?: number
  establecimiento: number
  precio: number
  fechaInicio: Date
  fechaFin: Date
  creado?: Date
  modificado?: Date
}

export interface PublicidadEvento {
  id?: number
  evento: number
  precio: number
  fechaInicio: Date
  fechaFin: Date
  creado?: Date
  modificado?: Date
}

export interface PublicidadProducto {
  id?: number
  producto: number
  precio: number
  fechaInicio: Date
  fechaFin: Date
  creado?: Date
  modificado?: Date
}

export interface PublicidadPromocion {
  id?: number
  promocion: number
  precio: number
  fechaInicio: Date
  fechaFin: Date
  creado?: Date
  modificado?: Date
}

export interface Puestos {
  id?: number
  nombre: string
  creado?: Date
  modificado?: Date
}

export interface Requisitos {
  id?: number
  texto: string
  creado?: Date
  modificado?: Date
}

export interface RequisitosEvento {
  id?: number
  requisito?: number
  evento?: number
  orden?: number
  creado?: Date
  modificado?: Date
}

export interface Telefonos {
  id?: number
  telefono: number
  prefijo: number
  creado?: Date
  modificado?: Date
}

export interface TelefonosPersona {
  id?: number
  telefono: number
  persona: number
  orden: number
  creado?: Date
  modificado?: Date
}

export interface Tickets {
  id?: number
  mesa: number
  grupoConsumiciones: number
  creado?: Date
  modificado?: Date
}

export interface TiposCategorias {
  id?: number
  nombre: string
  creado?: Date
  modificado?: Date
}

export interface TiposEstablecimientos {
  id?: number
  nombre: string
  creado?: Date
  modificado?: Date
}

export interface TiposEventos {
  id?: number
  nombre: string
  creado?: Date
  modificado?: Date
}

export interface TiposMesas {
  id?: number
  nombre: string
  creado?: Date
  modificado?: Date
}

export interface TiposProductos {
  id?: number
  nombre: string
  creado?: Date
  modificado?: Date
}

export interface TiposPromociones {
  id?: number
  nombre: string
  creado?: Date
  modificado?: Date
}

export interface Usuarios {
  id?: number
  persona: number
  categoria: number
  uid: string
  dap: string
  estado: string
  // 1 - Email, 2 - Google, 3 - Facebook, 4 - Twitter
  logInWith: number
  motivoInhabilitacion?: number
  creado?: Date
  modificado?: Date
}

export interface UsuariosRegistrandose {
  id?: number
  email: string,
  contrasena?: string
  creado?: Date,
  logInWith: number,
  modificado?: Date
}

export interface Ventajas {
  id?: number
  nombre: string
  promocion: number
  creado?: Date
  modificado?: Date
}

export interface VentajasCategorias {
  id?: number
  categoria: number
  ventaja: number
  creado?: Date
  modificado?: Date
}

export interface ProcedureCreateEmailAndUser {
  email: string
  contrasena: string
  timestamp: Date
  social: number
}
interface IdCreadoModificado {
  id?: number
  creado?: Date
  modificado?: Date
}

export interface Amigos extends IdCreadoModificado {
  usuario: number
  amigo: number
  silenciado: Date
  bloqueado: boolean
  prioritario: boolean
}

export interface Archivos extends IdCreadoModificado {
  codigo: string
  nombre: string
  mime: string
  extension: string
  size: number
  usuario: number
  direccionOnline?: string
  archivoFoto?: boolean
}

export interface ArchivosCategoria extends IdCreadoModificado {
  archivo: number
  categoria: number
  cabecera?: boolean
  orden: number
}

export interface ArchivosEmpresa extends IdCreadoModificado {
  archivo: number
  empresa: number
  cabecera?: boolean
  orden: number
}

export interface ArchivosEstablecimiento extends IdCreadoModificado {
  archivo: number
  establecimiento: number
  cabecera?: boolean
  orden: number
}

export interface ArchivosEvento extends IdCreadoModificado {
  archivo: number
  evento: number
  cabecera?: boolean
  orden: number
}

export interface ArchivosMarca extends IdCreadoModificado {
  archivo: number
  marca: number
  cabecera?: boolean
  orden: number
}

export interface ArchivosProducto extends IdCreadoModificado {
  archivo: number
  producto: number
  cabecera?: boolean
  orden: number
}

export interface ArchivosPromocion extends IdCreadoModificado {
  archivo: number
  promocion: number
  cabecera?: boolean
  orden: number
}

export interface Caracteristicas extends IdCreadoModificado {
  texto: string
}

export interface CaracteristicasDeProductos extends IdCreadoModificado {
  caracteristica: string
}

export interface CaracteristicasEvento extends IdCreadoModificado {
  caracteristica?: number
  evento?: number
  orden?: number
}

export interface CaracteristicasProducto extends IdCreadoModificado {
  caracteristica: number
  producto: number
}

export interface Categorias extends IdCreadoModificado {
  nombre: string
  tipoCategoria: number
}

export interface Chats extends IdCreadoModificado {
  emisor?: number
  receptor?: number
  grupo?: number
  nombreChat: [{ id: number, nombre: string }]
  tipoChat: boolean
}

export interface ComprasOrderPaypal extends IdCreadoModificado {
  AmountCurrencyCode: string
  AmountValue: number
  AmountBreakdownItemTotalCurrencyCode: string
  AmountBreakdownItemTotalValue: number
  orderId: number
  referenceID: string,
  payeeMerchantId: string,
  payeeEmailAddress: string,
  address_line_1: string
  admin_area_1: string
  admin_area_2: string
  country_code: string
  postal_code: string
  nombre: string
}

export interface Descripciones extends IdCreadoModificado {
  texto: string
}

export interface DescripcionesEvento extends IdCreadoModificado {
  descripcion?: number
  evento?: number
  orden?: number
}

export interface DiasMes extends IdCreadoModificado {
  diaMesInicio: number
  diaMesFin: number
}

export interface DiasSemana extends IdCreadoModificado {
  diaInicio?: number
  diaFin?: number
}

export interface Direcciones extends IdCreadoModificado {
  direccion: string
  piso?: number
  puerta?: string
  escalera?: string
  localidad: number
  codigoPostal: number
  pais: number
}

export interface DireccionesPersona extends IdCreadoModificado {
  direccion: number
  persona: number
  orden: number
}

export interface Emails extends IdCreadoModificado {
  email: string
}

export interface EmailsPersona extends IdCreadoModificado {
  email: number
  persona: number
  orden: number
}

export interface Empresas extends IdCreadoModificado {
  nombre: string
}

export interface Establecimientos extends IdCreadoModificado {
  nombre: string
  empresa: number
  tipoEstablecimiento: number
  codigo: string
}

export interface Eventos extends IdCreadoModificado {
  nombre: string
  precioEntrada: number
  tipoEventos: number
}

export interface EventosEstablecimientos extends IdCreadoModificado {
  evento: number
  establecimiento: number
}

export interface FaxsPersona extends IdCreadoModificado {
  fax: number
  persona: number
  orden: number
}

export interface Fechas extends IdCreadoModificado {
  fechaInicio: Date
  fechaFin: Date
}

export interface Grupos extends IdCreadoModificado {
  nombre: string
  descripcion: string
}

export interface GruposConsumicion extends IdCreadoModificado {
  codigo: string
}

export interface HorarioDiasMesEstablecimientos extends IdCreadoModificado {
  fecha: number
  establecimiento: number
}

export interface HorarioDiasMesEventos extends IdCreadoModificado {
  fecha: number
  evento: number
}

export interface HorarioDiasMesPromociones extends IdCreadoModificado {
  fecha: number
  promocion: number
}

export interface HorarioDiasSemanaEstablecimientos extends IdCreadoModificado {
  fecha: number
  establecimiento: number
}

export interface HorarioDiasSemanaEventos extends IdCreadoModificado {
  fecha: number
  evento: number
}

export interface HorarioDiasSemanaPromociones extends IdCreadoModificado {
  fecha: number
  promocion: number
}

export interface HorarioFechasEstablecimientos extends IdCreadoModificado {
  fecha: number
  establecimiento: number
}

export interface HorarioFechasEventos extends IdCreadoModificado {
  fecha: number
  evento: number
}

export interface HorarioFechasPromociones extends IdCreadoModificado {
  fecha: number
  promocion: number
}

export interface HorarioHorasEstablecimientos extends IdCreadoModificado {
  fecha: number
  establecimiento: number
}

export interface HorarioHorasEventos extends IdCreadoModificado {
  fecha: number
  evento: number
}

export interface HorarioHorasPromociones extends IdCreadoModificado {
  fecha: number
  promocion: number
}

export interface HorarioMesesEstablecimientos extends IdCreadoModificado {
  fecha: number
  establecimiento: number
}

export interface HorarioMesesEventos extends IdCreadoModificado {
  fecha: number
  evento: number
}

export interface HorarioMesesPromociones extends IdCreadoModificado {
  fecha: number
  promocion: number
}

export interface Horas extends IdCreadoModificado {
  horaInicio?: number
  horaFin?: number
}

export interface Invitados extends IdCreadoModificado {
  usuario: number
  email: string
  usuarioGanado?: boolean
  codigo: string
}

export interface ItemsComprasOrderPaypal extends IdCreadoModificado {
  idCompra: number
  category: string
  nombre: string
  quantity: number
  unitAmountCurrencyCode: string
  unitAmountValue: number
}

export interface LineasTicket extends IdCreadoModificado {
  ticket: number
  producto: number
  usuario: number
  cantidad: number
}

export interface LinksOrdersPaypal extends IdCreadoModificado {
  href: string
  rel: string
  method: string
  title: string
  orderId: number
}

export interface Marcas extends IdCreadoModificado {
  nombre: string
  descripcion: string
  imagen: number
}

export interface Mensajes extends IdCreadoModificado {
  chat: number
  mensajeHtml: string
  orden: number
  emisor: { id: number, nombre: string }
}

export interface MensajesEnviar extends IdCreadoModificado {
  chat: number
  mensajeHtml: string
  orden: number
  emisor: string
}

export interface MesasEstablecimiento extends IdCreadoModificado {
  codigo: string
  tipoMesa: number
  sillas: number
  numero: number
}

export interface Meses extends IdCreadoModificado {
  mesInicio: number
  mesFin: number
}

export interface MiembrosGrupos extends IdCreadoModificado {
  grupo: number
  usuario: number
  silenciado?: Date
  prioritario?: boolean
}

export interface MiembrosGruposConsumicion extends IdCreadoModificado {
  grupo: number
  usuario: number
}

export interface MotivosInhabilitacion extends IdCreadoModificado {
  texto: string
  creado?: Date,
  modificado?: Date
}

export interface OrdersPaypal extends IdCreadoModificado {
  idPaypal: string
  intent: string
  estado: string
  createTimePaypal: string
  payerId: number
  updateTimePaypal?: string
}

export interface PagosPaypal extends IdCreadoModificado {
  billingToken: string
  facilitatorAccessToken?: string
  orderId: number
  payerId: number
  paymentID: string
}

export interface Paises extends IdCreadoModificado {
  nombre: string
}

export interface PayersPaypal extends IdCreadoModificado {
  idPaypal: string
  emailAddress: string
  addressCountryCode: string
  nameGivenName: string
  nameSurname: string
}

export interface Personas extends IdCreadoModificado {
  nombre: string
  apellidos: string
  fechaNacimiento: Date
}

export interface PersonasContactoEmpresa extends IdCreadoModificado {
  personaEmpresa: number
  empresa: number
  orden: number
}

export interface PersonasContactoEstablecimiento extends IdCreadoModificado {
  personaEstablecimiento: number
  establecimiento: number
  orden: number
}

export interface PersonasContactoMarcas extends IdCreadoModificado {
  personaMarca: number
  marca: number
  orden: number
}

export interface PersonasEstablecimientos extends IdCreadoModificado {
  establecimiento: number
  persona: number
  puesto: number
}

export interface Productos extends IdCreadoModificado {
  nombre: string
  descripcion: string
  tipoProducto: number
}

export interface Promociones extends IdCreadoModificado {
  nombre: string
  descripcion: string
  titulo: string
  tipoPromocion: number
}

export interface PromocionesProductos extends IdCreadoModificado {
  promocion: number
  producto: number
  precio: number
}

export interface PublicidadEmpresa extends IdCreadoModificado {
  empresa: number
  precio: number
  fechaInicio: Date
  fechaFin: Date
}

export interface PublicidadEstablecimiento extends IdCreadoModificado {
  establecimiento: number
  precio: number
  fechaInicio: Date
  fechaFin: Date
}

export interface PublicidadEvento extends IdCreadoModificado {
  evento: number
  precio: number
  fechaInicio: Date
  fechaFin: Date
}

export interface PublicidadProducto extends IdCreadoModificado {
  producto: number
  precio: number
  fechaInicio: Date
  fechaFin: Date
}

export interface PublicidadPromocion extends IdCreadoModificado {
  promocion: number
  precio: number
  fechaInicio: Date
  fechaFin: Date
}

export interface Puestos extends IdCreadoModificado {
  nombre: string
}

export interface PurchaseUnits extends IdCreadoModificado {
  breakdownHandlingValue: number
  breakdownHandlingCurrencyCode: string
  breakdownInsuranceValue: number
  breakdownInsuranceCurrencyCode: string
  breakdownitemTotalValue: number
  breakdownitemTotalCurrencyCode: string
  breakdownShippingValue: number
  breakdownShippingCurrencyCode: string
  breakdownShippingDiscountValue: number
  breakdownShippingDiscountCurrencyCode: string
  breakdownCurrencyCode: string
  breakDownValue: number
  descripcion: string
  idOrder: number
}

export interface LinksPurchaseUnits extends IdCreadoModificado {
  href: string
  method: string
  rel: string
  title: string
  idPaymentsPurchaseUnits: number
}

export interface PaymentsPurchaseUnits extends IdCreadoModificado {
  amountValue: number
  amountCurrencyCode: string
  createTime: Date
  finalCapture: boolean
  idPaypal: string
  idPurchase: number
  estado: string
  updateTime: Date
}

export interface SellerProtectionDisputeCategoriesPurchaseUnits extends IdCreadoModificado {
  contenido: string
  idPaymentsPurchaseUnits: number
}

export interface ItemsPurchaseUnits extends IdCreadoModificado {
  nombre: string
  quantity: number
  taxValue: number
  taxCurrencyCode: string
  unitAmountValue: number
  unitAmountCurrencyCode: string
}

export interface Requisitos extends IdCreadoModificado {
  texto: string
}

export interface RequisitosEvento extends IdCreadoModificado {
  requisito?: number
  evento?: number
  orden?: number
}

export interface Telefonos extends IdCreadoModificado {
  telefono: number
  prefijo: number
}

export interface TelefonosPersona extends IdCreadoModificado {
  telefono: number
  persona: number
  orden: number
}

export interface Tickets extends IdCreadoModificado {
  mesa: number
  grupoConsumiciones: number
}

export interface TiposCategorias extends IdCreadoModificado {
  nombre: string
}

export interface TiposEstablecimientos extends IdCreadoModificado {
  nombre: string
}

export interface TiposEventos extends IdCreadoModificado {
  nombre: string
}

export interface TiposMesas extends IdCreadoModificado {
  nombre: string
}

export interface TiposProductos extends IdCreadoModificado {
  nombre: string
}

export interface TiposPromociones extends IdCreadoModificado {
  nombre: string
}

export interface Usuarios extends IdCreadoModificado {
  persona: number
  categoria: number
  uid: string
  dap: string
  estado: string
  // 1 - Email, 2 - Google, 3 - Facebook, 4 - Twitter
  logInWith: number
  motivoInhabilitacion?: number
}

export interface UsuariosRegistrandose extends IdCreadoModificado {
  email: string,
  contrasena?: string
  creado?: Date,
  logInWith: number,
  modificado?: Date
}

export interface Ventajas extends IdCreadoModificado {
  nombre: string
  promocion: number
}

export interface VentajasCategorias extends IdCreadoModificado {
  categoria: number
  ventaja: number
}

export interface ProcedureCreateEmailAndUser extends IdCreadoModificado {
  contrasena: string
  timestamp: Date
  social: number
}
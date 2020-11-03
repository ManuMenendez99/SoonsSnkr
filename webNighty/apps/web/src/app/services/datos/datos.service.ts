import { Injectable } from '@angular/core';
import {
  Amigos, Archivos, ArchivosCategoria, ArchivosEmpresa, ArchivosEstablecimiento, ArchivosEvento,
  ArchivosMarca, ArchivosProducto, ArchivosPromocion, Caracteristicas, CaracteristicasDeProductos,
  CaracteristicasEvento, CaracteristicasProducto, Categorias, Descripciones, DescripcionesEvento,
  DiasMes, DiasSemana, Direcciones, DireccionesPersona, Emails, EmailsPersona, Empresas, Establecimientos,
  Eventos, EventosEstablecimientos, FaxsPersona, Fechas, Grupos, GruposConsumicion, HorarioDiasMesEstablecimientos,
  HorarioDiasMesEventos, HorarioDiasMesPromociones, HorarioDiasSemanaEstablecimientos, HorarioDiasSemanaEventos,
  HorarioDiasSemanaPromociones, HorarioFechasEstablecimientos, HorarioFechasEventos, HorarioFechasPromociones,
  HorarioHorasEstablecimientos, HorarioHorasEventos, HorarioHorasPromociones, HorarioMesesEstablecimientos,
  HorarioMesesEventos, HorarioMesesPromociones, Horas, Invitados, LineasTicket, Marcas, MesasEstablecimiento,
  Meses, MiembrosGrupos, MiembrosGruposConsumicion, Paises, Personas, PersonasContactoEmpresa,
  PersonasContactoEstablecimiento, PersonasContactoMarcas, PersonasEstablecimientos, Productos,
  Promociones, PromocionesProductos, PublicidadEmpresa, PublicidadEstablecimiento, PublicidadEvento,
  PublicidadProducto, PublicidadPromocion, Puestos, Requisitos, RequisitosEvento, Telefonos, TelefonosPersona,
  Tickets, TiposCategorias, TiposEstablecimientos, TiposEventos, TiposMesas, TiposProductos, TiposPromociones,
  Usuarios, UsuariosRegistrandose, Ventajas, VentajasCategorias, MotivosInhabilitacion, Chats, Mensajes,
  PayersPaypal, ComprasOrderPaypal, ItemsComprasOrderPaypal, OrdersPaypal, LinksOrdersPaypal, PagosPaypal,
  ItemsPurchaseUnits, SellerProtectionDisputeCategoriesPurchaseUnits, LinksPurchaseUnits, PaymentsPurchaseUnits,
  PurchaseUnits
} from "@nighty/models";
interface ValorDefecto {
  valor: number,
  defecto: number
}
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  Amigos = new Array<Amigos>()
  Archivos = new Array<Archivos>()
  ArchivosCategoria = new Array<ArchivosCategoria>()
  ArchivosEmpresa = new Array<ArchivosEmpresa>()
  ArchivosEstablecimiento = new Array<ArchivosEstablecimiento>()
  ArchivosEvento = new Array<ArchivosEvento>()
  ArchivosMarca = new Array<ArchivosMarca>()
  ArchivosProducto = new Array<ArchivosProducto>()
  ArchivosPromocion = new Array<ArchivosPromocion>()
  Caracteristicas = new Array<Caracteristicas>()
  CaracteristicasDeProductos = new Array<CaracteristicasDeProductos>()
  CaracteristicasEvento = new Array<CaracteristicasEvento>()
  CaracteristicasProducto = new Array<CaracteristicasProducto>()
  Categorias = new Array<Categorias>()
  Chats = new Array<Chats>()
  ComprasOrderPaypal = new Array<ComprasOrderPaypal>()
  Descripciones = new Array<Descripciones>()
  DescripcionesEvento = new Array<DescripcionesEvento>()
  DiasMes = new Array<DiasMes>()
  DiasSemana = new Array<DiasSemana>()
  Direcciones = new Array<Direcciones>()
  DireccionesPersona = new Array<DireccionesPersona>()
  Emails = new Array<Emails>()
  EmailsPersona = new Array<EmailsPersona>()
  Empresas = new Array<Empresas>()
  Establecimientos = new Array<Establecimientos>()
  Eventos = new Array<Eventos>()
  EventosEstablecimientos = new Array<EventosEstablecimientos>()
  FaxsPersona = new Array<FaxsPersona>()
  Fechas = new Array<Fechas>()
  Grupos = new Array<Grupos>()
  GruposConsumicion = new Array<GruposConsumicion>()
  HorarioDiasMesEstablecimientos = new Array<HorarioDiasMesEstablecimientos>()
  HorarioDiasMesEventos = new Array<HorarioDiasMesEventos>()
  HorarioDiasMesPromociones = new Array<HorarioDiasMesPromociones>()
  HorarioDiasSemanaEstablecimientos = new Array<HorarioDiasSemanaEstablecimientos>()
  HorarioDiasSemanaEventos = new Array<HorarioDiasSemanaEventos>()
  HorarioDiasSemanaPromociones = new Array<HorarioDiasSemanaPromociones>()
  HorarioFechasEstablecimientos = new Array<HorarioFechasEstablecimientos>()
  HorarioFechasEventos = new Array<HorarioFechasEventos>()
  HorarioFechasPromociones = new Array<HorarioFechasPromociones>()
  HorarioHorasEstablecimientos = new Array<HorarioHorasEstablecimientos>()
  HorarioHorasEventos = new Array<HorarioHorasEventos>()
  HorarioHorasPromociones = new Array<HorarioHorasPromociones>()
  HorarioMesesEstablecimientos = new Array<HorarioMesesEstablecimientos>()
  HorarioMesesEventos = new Array<HorarioMesesEventos>()
  HorarioMesesPromociones = new Array<HorarioMesesPromociones>()
  Horas = new Array<Horas>()
  Invitados = new Array<Invitados>()
  ItemsComprasOrderPaypal = new Array<ItemsComprasOrderPaypal>()
  ItemsPurchaseUnits = new Array<ItemsPurchaseUnits>()
  LineasTicket = new Array<LineasTicket>()
  LinksOrdersPaypal = new Array<LinksOrdersPaypal>()
  LinksPurchaseUnits = new Array<LinksPurchaseUnits>()
  Marcas = new Array<Marcas>()
  Mensajes = new Array<Mensajes>()
  MesasEstablecimiento = new Array<MesasEstablecimiento>()
  Meses = new Array<Meses>()
  MiembrosGrupos = new Array<MiembrosGrupos>()
  MiembrosGruposConsumicion = new Array<MiembrosGruposConsumicion>()
  MotivosInhabilitacion = new Array<MotivosInhabilitacion>()
  OrdersPaypal = new Array<OrdersPaypal>()
  PagosPaypal = new Array<PagosPaypal>()
  Paises = new Array<Paises>()
  PayersPaypal = new Array<PayersPaypal>()
  PaymentsPurchaseUnits = new Array<PaymentsPurchaseUnits>()
  Personas = new Array<Personas>()
  PersonasContactoEmpresa = new Array<PersonasContactoEmpresa>()
  PersonasContactoEstablecimiento = new Array<PersonasContactoEstablecimiento>()
  PersonasContactoMarcas = new Array<PersonasContactoMarcas>()
  PersonasEstablecimientos = new Array<PersonasEstablecimientos>()
  Productos = new Array<Productos>()
  Promociones = new Array<Promociones>()
  PromocionesProductos = new Array<PromocionesProductos>()
  PublicidadEmpresa = new Array<PublicidadEmpresa>()
  PublicidadEstablecimiento = new Array<PublicidadEstablecimiento>()
  PublicidadEvento = new Array<PublicidadEvento>()
  PublicidadProducto = new Array<PublicidadProducto>()
  PublicidadPromocion = new Array<PublicidadPromocion>()
  Puestos = new Array<Puestos>()
  PurchaseUnits = new Array<PurchaseUnits>()
  Requisitos = new Array<Requisitos>()
  RequisitosEvento = new Array<RequisitosEvento>()
  SellerProtectionDisputeCategoriesPurchaseUnits = new Array<SellerProtectionDisputeCategoriesPurchaseUnits>()
  Telefonos = new Array<Telefonos>()
  TelefonosPersona = new Array<TelefonosPersona>()
  Tickets = new Array<Tickets>()
  TiposCategorias = new Array<TiposCategorias>()
  TiposEstablecimientos = new Array<TiposEstablecimientos>()
  TiposEventos = new Array<TiposEventos>()
  TiposMesas = new Array<TiposMesas>()
  TiposProductos = new Array<TiposProductos>()
  TiposPromociones = new Array<TiposPromociones>()
  Usuarios = new Array<Usuarios>()
  UsuariosRegistrandose = new Array<UsuariosRegistrandose>()
  Ventajas = new Array<Ventajas>()
  VentajasCategorias = new Array<VentajasCategorias>()


  reiniciarAmigos = false
  reiniciarArchivos = false
  reiniciarArchivosCategoria = false
  reiniciarArchivosEmpresa = false
  reiniciarArchivosEstablecimiento = false
  reiniciarArchivosEvento = false
  reiniciarArchivosMarca = false
  reiniciarArchivosProducto = false
  reiniciarArchivosPromocion = false
  reiniciarCaracteristicas = false
  reiniciarCaracteristicasDeProductos = false
  reiniciarCaracteristicasEvento = false
  reiniciarCaracteristicasProducto = false
  reiniciarCategorias = false
  reiniciarComprasOrderPaypal = false;
  reiniciarChats = false
  reiniciarDescripciones = false
  reiniciarDescripcionesEvento = false
  reiniciarDiasMes = false
  reiniciarDiasSemana = false
  reiniciarDirecciones = false
  reiniciarDireccionesPersona = false
  reiniciarEmails = false
  reiniciarEmailsPersona = false
  reiniciarEmpresas = false
  reiniciarEstablecimientos = false
  reiniciarEventos = false
  reiniciarEventosEstablecimientos = false
  reiniciarFaxsPersona = false
  reiniciarFechas = false
  reiniciarGrupos = false
  reiniciarGruposConsumicion = false
  reiniciarHorarioDiasMesEstablecimientos = false
  reiniciarHorarioDiasMesEventos = false
  reiniciarHorarioDiasMesPromociones = false
  reiniciarHorarioDiasSemanaEstablecimientos = false
  reiniciarHorarioDiasSemanaEventos = false
  reiniciarHorarioDiasSemanaPromociones = false
  reiniciarHorarioFechasEstablecimientos = false
  reiniciarHorarioFechasEventos = false
  reiniciarHorarioFechasPromociones = false
  reiniciarHorarioHorasEstablecimientos = false
  reiniciarHorarioHorasEventos = false
  reiniciarHorarioHorasPromociones = false
  reiniciarHorarioMesesEstablecimientos = false
  reiniciarHorarioMesesEventos = false
  reiniciarHorarioMesesPromociones = false
  reiniciarHoras = false
  reiniciarInvitados = false
  reiniciarItemsComprasOrderPaypal = false;
  reiniciarItemsPurchaseUnits = false;
  reiniciarLineasTicket = false
  reiniciarLinksOrdersPaypal = false;
  reiniciarLinksPurchaseUnits = false;
  reiniciarMarcas = false
  reiniciarMensajes = false
  reiniciarMesasEstablecimiento = false
  reiniciarMeses = false
  reiniciarMiembrosGrupos = false
  reiniciarMiembrosGruposConsumicion = false
  reiniciarMotivosInhabilitacion = false
  reiniciarOrdersPaypal = false;
  reiniciarPagosPaypal = false;
  reiniciarPaises = false
  reiniciarPayersPaypal = false;
  reiniciarPaymentsPurchaseUnits = false;
  reiniciarPersonas = false
  reiniciarPersonasContactoEmpresa = false
  reiniciarPersonasContactoEstablecimiento = false
  reiniciarPersonasContactoMarcas = false
  reiniciarPersonasEstablecimientos = false
  reiniciarProductos = false
  reiniciarPromociones = false
  reiniciarPromocionesProductos = false
  reiniciarPublicidadEmpresa = false
  reiniciarPublicidadEstablecimiento = false
  reiniciarPublicidadEvento = false
  reiniciarPublicidadProducto = false
  reiniciarPublicidadPromocion = false
  reiniciarPuestos = false
  reiniciarPurchaseUnits = false;
  reiniciarRequisitos = false
  reiniciarRequisitosEvento = false
  reiniciarSellerProtectionDisputeCategoriesPurchaseUnits = false;
  reiniciarTelefonos = false
  reiniciarTelefonosPersona = false
  reiniciarTickets = false
  reiniciarTiposCategorias = false
  reiniciarTiposEstablecimientos = false
  reiniciarTiposEventos = false
  reiniciarTiposMesas = false
  reiniciarTiposProductos = false
  reiniciarTiposPromociones = false
  reiniciarUsuarios = false
  reiniciarUsuariosRegistrandose = false
  reiniciarVentajas = false
  reiniciarVentajasCategorias = false

  
  AmigosValores: ValorDefecto = { valor: 0, defecto: 1 }
  ArchivosValores: ValorDefecto = { valor: 0, defecto: 1 }
  ArchivosCategoriaValores: ValorDefecto = { valor: 0, defecto: 1 }
  ArchivosEmpresaValores: ValorDefecto = { valor: 0, defecto: 1 }
  ArchivosEstablecimientoValores: ValorDefecto = { valor: 0, defecto: 1 }
  ArchivosEventoValores: ValorDefecto = { valor: 0, defecto: 1 }
  ArchivosMarcaValores: ValorDefecto = { valor: 0, defecto: 1 }
  ArchivosProductoValores: ValorDefecto = { valor: 0, defecto: 1 }
  ArchivosPromocionValores: ValorDefecto = { valor: 0, defecto: 1 }
  CaracteristicasValores: ValorDefecto = { valor: 0, defecto: 1 }
  CaracteristicasDeProductosValores: ValorDefecto = { valor: 0, defecto: 1 }
  CaracteristicasEventoValores: ValorDefecto = { valor: 0, defecto: 1 }
  CaracteristicasProductoValores: ValorDefecto = { valor: 0, defecto: 1 }
  CategoriasValores: ValorDefecto = { valor: 0, defecto: 1 }
  ChatsValores: ValorDefecto = { valor: 0, defecto: 1 }
  ComprasOrderPaypalValores: ValorDefecto = { valor: 0, defecto: 1 };
  DescripcionesValores: ValorDefecto = { valor: 0, defecto: 1 }
  DescripcionesEventoValores: ValorDefecto = { valor: 0, defecto: 1 }
  DiasMesValores: ValorDefecto = { valor: 0, defecto: 1 }
  DiasSemanaValores: ValorDefecto = { valor: 0, defecto: 1 }
  DireccionesValores: ValorDefecto = { valor: 0, defecto: 1 }
  DireccionesPersonaValores: ValorDefecto = { valor: 0, defecto: 1 }
  EmailsValores: ValorDefecto = { valor: 0, defecto: 1 }
  EmailsPersonaValores: ValorDefecto = { valor: 0, defecto: 1 }
  EmpresasValores: ValorDefecto = { valor: 0, defecto: 1 }
  EstablecimientosValores: ValorDefecto = { valor: 0, defecto: 1 }
  EventosValores: ValorDefecto = { valor: 0, defecto: 1 }
  EventosEstablecimientosValores: ValorDefecto = { valor: 0, defecto: 1 }
  FaxsPersonaValores: ValorDefecto = { valor: 0, defecto: 1 }
  FechasValores: ValorDefecto = { valor: 0, defecto: 1 }
  GruposValores: ValorDefecto = { valor: 0, defecto: 1 }
  GruposConsumicionValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioDiasMesEstablecimientosValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioDiasMesEventosValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioDiasMesPromocionesValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioDiasSemanaEstablecimientosValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioDiasSemanaEventosValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioDiasSemanaPromocionesValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioFechasEstablecimientosValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioFechasEventosValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioFechasPromocionesValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioHorasEstablecimientosValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioHorasEventosValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioHorasPromocionesValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioMesesEstablecimientosValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioMesesEventosValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorarioMesesPromocionesValores: ValorDefecto = { valor: 0, defecto: 1 }
  HorasValores: ValorDefecto = { valor: 0, defecto: 1 }
  InvitadosValores: ValorDefecto = { valor: 0, defecto: 1 }
  ItemsComprasOrderPaypalValores: ValorDefecto = { valor: 0, defecto: 1 };
  ItemsPurchaseUnitsValores: ValorDefecto = { valor: 0, defecto: 1 };
  LineasTicketValores: ValorDefecto = { valor: 0, defecto: 1 }
  LinksOrdersPaypalValores: ValorDefecto = { valor: 0, defecto: 1 };
  LinksPurchaseUnitsValores: ValorDefecto = { valor: 0, defecto: 1 };
  MarcasValores: ValorDefecto = { valor: 0, defecto: 1 }
  MensajesValores: ValorDefecto = { valor: 0, defecto: 0 }
  MesasEstablecimientoValores: ValorDefecto = { valor: 0, defecto: 1 }
  MesesValores: ValorDefecto = { valor: 0, defecto: 1 }
  MiembrosGruposValores: ValorDefecto = { valor: 0, defecto: 1 }
  MiembrosGruposConsumicionValores: ValorDefecto = { valor: 0, defecto: 1 }
  MotivosInhabilitacionValores: ValorDefecto = { valor: 0, defecto: 1 }
  OrdersPaypalValores: ValorDefecto = { valor: 0, defecto: 1 };
  PaisesValores: ValorDefecto = { valor: 0, defecto: 1 }
  PagosPaypalValores: ValorDefecto = { valor: 0, defecto: 1 };
  PayersPaypalValores: ValorDefecto = { valor: 0, defecto: 1 };
  PaymentsPurchaseUnitsValores: ValorDefecto = { valor: 0, defecto: 1 };
  PersonasValores: ValorDefecto = { valor: 0, defecto: 1 }
  PersonasContactoEmpresaValores: ValorDefecto = { valor: 0, defecto: 1 }
  PersonasContactoEstablecimientoValores: ValorDefecto = { valor: 0, defecto: 1 }
  PersonasContactoMarcasValores: ValorDefecto = { valor: 0, defecto: 1 }
  PersonasEstablecimientosValores: ValorDefecto = { valor: 0, defecto: 1 }
  ProductosValores: ValorDefecto = { valor: 0, defecto: 1 }
  PromocionesValores: ValorDefecto = { valor: 0, defecto: 1 }
  PromocionesProductosValores: ValorDefecto = { valor: 0, defecto: 1 }
  PublicidadEmpresaValores: ValorDefecto = { valor: 0, defecto: 1 }
  PublicidadEstablecimientoValores: ValorDefecto = { valor: 0, defecto: 1 }
  PublicidadEventoValores: ValorDefecto = { valor: 0, defecto: 1 }
  PublicidadProductoValores: ValorDefecto = { valor: 0, defecto: 1 }
  PublicidadPromocionValores: ValorDefecto = { valor: 0, defecto: 1 }
  PuestosValores: ValorDefecto = { valor: 0, defecto: 1 }
  PurchaseUnitsValores: ValorDefecto = { valor: 0, defecto: 1 };
  RequisitosValores: ValorDefecto = { valor: 0, defecto: 1 }
  RequisitosEventoValores: ValorDefecto = { valor: 0, defecto: 1 }
  SellerProtectionDisputeCategoriesPurchaseUnitsValores: ValorDefecto = { valor: 0, defecto: 1 };
  TelefonosValores: ValorDefecto = { valor: 0, defecto: 1 }
  TelefonosPersonaValores: ValorDefecto = { valor: 0, defecto: 1 }
  TicketsValores: ValorDefecto = { valor: 0, defecto: 1 }
  TiposCategoriasValores: ValorDefecto = { valor: 0, defecto: 1 }
  TiposEstablecimientosValores: ValorDefecto = { valor: 0, defecto: 1 }
  TiposEventosValores: ValorDefecto = { valor: 0, defecto: 1 }
  TiposMesasValores: ValorDefecto = { valor: 0, defecto: 1 }
  TiposProductosValores: ValorDefecto = { valor: 0, defecto: 1 }
  TiposPromocionesValores: ValorDefecto = { valor: 0, defecto: 1 }
  UsuariosValores: ValorDefecto = { valor: 0, defecto: 0 }
  UsuariosRegistrandoseValores: ValorDefecto = { valor: 0, defecto: 1 }
  VentajasValores: ValorDefecto = { valor: 0, defecto: 1 }
  VentajasCategoriasValores: ValorDefecto = { valor: 0, defecto: 1 }


  constructor() { }
}

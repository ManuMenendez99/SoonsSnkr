drop schema nighty;
create schema nighty;
use nighty;

create table TiposProductos (
	id int auto_increment not null,
    nombre varchar(45) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkTiposProductos PRIMARY KEY (id));

create table Productos (
	id int auto_increment not null,
    nombre text not null,
    descripcion text not null,
    tipoProducto int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkProductos PRIMARY KEY (id),
CONSTRAINT pkProductosTipoProducto FOREIGN KEY (tipoProducto) REFERENCES tiposProductos (id) on update cascade on delete restrict);

create table Marcas (
	id int auto_increment not null,
    nombre varchar(45) not null,
    descripcion text not null,
    imagen int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkMarcas PRIMARY KEY (id));

create table Empresas (
	id int auto_increment not null,
    nombre varchar(45) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkEmpresas PRIMARY KEY (id));

create table TiposEstablecimientos (
	id int not null auto_increment,
    nombre varchar(45) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkTiposEstablecimientos PRIMARY KEY (id));

create table Establecimientos (
	id int not null auto_increment,
    nombre varchar(45) not null,
    empresa int not null,
    tipoEstablecimiento int not null,
    codigo text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkEstablecimientos PRIMARY KEY (id),
CONSTRAINT fkEstablecimientosTipoEstablecimiento FOREIGN KEY (tipoEstablecimiento) REFERENCES tiposEstablecimientos (id) on update cascade on delete restrict,
CONSTRAINT fkEstablecimientosEmpresa FOREIGN KEY (empresa) REFERENCES empresas (id) on update cascade on delete restrict);

create table TiposEventos(
	id int auto_increment not null,
    nombre text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkTiposEventos PRIMARY KEY (id));

create table Eventos (
	id int auto_increment not null,
    nombre varchar(45) not null,
    precioEntrada int not null,
    tipoEventos int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkEventos PRIMARY KEY (id),
CONSTRAINT fkEventosTipoEvento FOREIGN KEY (tipoEventos) REFERENCES tiposEventos (id));

create table Promociones (
	id int auto_increment not null,
    nombre varchar(45) not null,
    descripcion text not null,
    titulo varchar(20) not null,
    tipoPromocion int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPromociones PRIMARY KEY (id));

create table Archivos(
	id int auto_increment not null,
    codigo text not null,
    nombre text not null,
    mime varchar(10) not null,
    extension varchar(10) not null,
    size int not null,
    usuario int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkArchivos PRIMARY KEY (id));

create table Personas (
	id int not null auto_increment,
    dap varchar(15) not null,
    nombre varchar(20) not null,
    apellidos varchar(40) not null,
    fechaNacimiento text not null,
    archivoFoto int default 0,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPersonas PRIMARY KEY (id),
CONSTRAINT fkPersonasArchivoFoto FOREIGN KEY (archivoFoto) REFERENCES archivos (id));

create table Paises (
	id int auto_increment not null,
    nombre text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPaises PRIMARY KEY (id));

create table Direcciones (
	id int auto_increment not null,
    direccion text not null,
    piso int(3),
    puerta varchar(2),
    escalera varchar(15),
	localidad int not null,
    codigoPostal int(5) not null,
    pais int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkDirecciones PRIMARY KEY (id),
CONSTRAINT fkDireccionesPais FOREIGN KEY (pais) REFERENCES paises (id) on update cascade on delete restrict);

create table DireccionesPersona (
	id int not null auto_increment,
    direccion int not null,
    persona int not null,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkDireccionesPersona PRIMARY KEY (id),
CONSTRAINT fkDireccionesPersonaDireccion FOREIGN KEY (direccion) REFERENCES direcciones (id)on update cascade on delete restrict,
CONSTRAINT fkDireccionesPersonaPersona FOREIGN KEY (persona) REFERENCES personas (id) on update cascade on delete restrict);

create table Emails (
	id int auto_increment not null,
    email text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkEmails PRIMARY KEY (id));

create table EmailsPersona (
	id int not null auto_increment,
    email int not null,
    persona int not null,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkEmailsPersona PRIMARY KEY (id),
CONSTRAINT fkEmailsPersonaEmail FOREIGN KEY (email) REFERENCES emails (id) on update cascade on delete restrict,
CONSTRAINT fkEmailsPersonaPersona FOREIGN KEY (persona) REFERENCES personas (id) on update cascade on delete restrict);

create table Telefonos (
	id int auto_increment not null,
    telefono int(15) not null,
    prefijo int(5) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkTelefonos PRIMARY KEY (id));

create table TelefonosPersona (
	id int not null auto_increment,
    telefono int not null,
    persona int not null,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkTelefonosPersona PRIMARY KEY (id),
CONSTRAINT fkTelefonosPersonaTelefono FOREIGN KEY (telefono) REFERENCES telefonos (id) on update cascade on delete restrict,
CONSTRAINT fkTelefonosPersonaPersona FOREIGN KEY (persona) REFERENCES personas (id) on update cascade on delete restrict);

create table FaxsPersona (
	id int not null auto_increment,
    fax int not null,
    persona int not null,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkFaxsPersona PRIMARY KEY (id),
CONSTRAINT fkFaxsPersonaTelefono FOREIGN KEY (fax) REFERENCES telefonos (id) on update cascade on delete restrict,
CONSTRAINT fkFaxsPersonaPersona FOREIGN KEY (persona) REFERENCES personas (id) on update cascade on delete restrict);

create table Horas (
	id int not null auto_increment,
    horaInicio int(2) default 0,
    horaFin int(2) default 24,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHoras PRIMARY KEY (id),
CHECK (horaInicio between 0 and 24),
CHECK (horaFin between 0 and 24));

create table DiasSemana (
	id int not null auto_increment,
    diaInicio int(1) default 1,
    diaFin int(1) default 7,
    creado text not null,
    modificado text not null,
CONSTRAINT pkDiasSemana PRIMARY KEY (id),
CHECK (diaInicio between 1 and 7),
CHECK (diaFin between 1 and 7));

create table DiasMes (
	id int not null auto_increment,
    diaMesInicio int(2) not null,
    diaMesFin int(2) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkDiasMes PRIMARY KEY (id),
CHECK (diaMesInicio between 1 and 31),
CHECK (diaMesFin between 1 and 31));

create table Meses (
	id int not null auto_increment,
    mesInicio int(2) not null,
    mesFin int(2) not null,
	creado text not null,
    modificado text not null,
CONSTRAINT pkMeses PRIMARY KEY (id),
CHECK (mesInicio between 1 and 12),
CHECK (mesFin between 1 and 12));

create table Fechas (
	id int not null auto_increment,
    fechaInicio text not null,
    fechaFin text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkFechas PRIMARY KEY (id));

create table HorarioHorasPromociones (
	id int auto_increment not null,
    fecha int not null,
    promocion int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioHorasPromociones PRIMARY KEY (id),
CONSTRAINT fkHorarioHorasPromocionesFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioHorasPromocionesPromocion FOREIGN KEY (promocion) REFERENCES promociones (id) on update cascade on delete restrict);

create table HorarioHorasEventos (
	id int auto_increment not null,
    fecha int not null,
    evento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioHorasEventos PRIMARY KEY (id),
CONSTRAINT fkHorarioHorasEventosFecha FOREIGN KEY (fecha) REFERENCES horas (id),
CONSTRAINT fkHorarioHorasEventosEvento FOREIGN KEY (evento) REFERENCES eventos (id));

create table HorarioHorasEstablecimientos (
	id int auto_increment not null,
    fecha int not null,
    establecimiento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioHorasEstablecimientos PRIMARY KEY (id),
CONSTRAINT fkHorarioHorasEstablecimientosFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioHorasEstablecimientosEstablecimiento FOREIGN KEY (establecimiento) REFERENCES establecimientos (id) on update cascade on delete restrict);

create table HorarioDiasSemanaPromociones (
	id int auto_increment not null,
    fecha int not null,
    promocion int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioDiasSemanaPromociones PRIMARY KEY (id),
CONSTRAINT fkHorarioDiasSemanaPromocionesFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioDiasSemanaPromocionesPromocion FOREIGN KEY (promocion) REFERENCES promociones (id) on update cascade on delete restrict);

create table HorarioDiasSemanaEventos (
	id int auto_increment not null,
    fecha int not null,
    evento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioDiasSemanaEventos PRIMARY KEY (id),
CONSTRAINT fkHorarioDiasSemanaEventosFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioDiasSemanaEventosEvento FOREIGN KEY (evento) REFERENCES eventos (id) on update cascade on delete restrict);

create table HorarioDiasSemanaEstablecimientos (
	id int auto_increment not null,
    fecha int not null,
    establecimiento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioDiasSemanaEstablecimientos PRIMARY KEY (id),
CONSTRAINT fkHorarioDiasSemanaEstablecimientosFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioDiasSemanaEstablecimientosEstablecimiento FOREIGN KEY (establecimiento) REFERENCES establecimientos (id) on update cascade on delete restrict);

create table HorarioDiasMesPromociones (
	id int auto_increment not null,
    fecha int not null,
    promocion int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioDiasMesPromociones PRIMARY KEY (id),
CONSTRAINT fkHorarioDiasMesPromocionesFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioDiasMesPromocionesPromocion FOREIGN KEY (promocion) REFERENCES promociones (id) on update cascade on delete restrict);

create table HorarioDiasMesEventos (
	id int auto_increment not null,
    fecha int not null,
    evento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioDiasMesEventos PRIMARY KEY (id),
CONSTRAINT fkHorarioDiasMesEventosFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioDiasMesEventosEvento FOREIGN KEY (evento) REFERENCES eventos (id) on update cascade on delete restrict);

create table HorarioDiasMesEstablecimientos (
id int auto_increment not null,
    fecha int not null,
    establecimiento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioDiasMesEstablecimientos PRIMARY KEY (id),
CONSTRAINT fkHorarioDiasMesEstablecimientosFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioDiasMesEstablecimientosEstablecimiento FOREIGN KEY (establecimiento) REFERENCES establecimientos (id) on update cascade on delete restrict);

create table HorarioMesesEstablecimientos (
	id int auto_increment not null,
    fecha int not null,
    establecimiento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioMesesEstablecimientos PRIMARY KEY (id),
CONSTRAINT fkHorarioMesesEstablecimientosFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioMesesEstablecimientosEstablecimiento FOREIGN KEY (establecimiento) REFERENCES establecimientos (id) on update cascade on delete restrict);

create table HorarioMesesPromociones (
	id int auto_increment not null,
    fecha int not null,
    promocion int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioMesesPromociones PRIMARY KEY (id),
CONSTRAINT fkHorarioMesesPromocionesFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioMesesPromocionesPromocion FOREIGN KEY (promocion) REFERENCES promociones (id) on update cascade on delete restrict);

create table HorarioMesesEventos (
	id int auto_increment not null,
    fecha int not null,
    evento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioMesesEventos PRIMARY KEY (id),
CONSTRAINT fkHorarioMesesEventosFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioMesesEventosEvento FOREIGN KEY (evento) REFERENCES eventos (id) on update cascade on delete restrict);

create table HorarioFechasEstablecimientos (
	id int auto_increment not null,
    fecha int not null,
    establecimiento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioFechasEstablecimientos PRIMARY KEY (id),
CONSTRAINT fkHorarioFechasEstablecimientosFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioFechasEstablecimientosEstablecimiento FOREIGN KEY (establecimiento) REFERENCES establecimientos (id) on update cascade on delete restrict);

create table HorarioFechasEventos (
	id int auto_increment not null,
    fecha int not null,
    evento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioFechasEventos PRIMARY KEY (id),
CONSTRAINT fkHorarioFechasEventosFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioFechasEventosEvento FOREIGN KEY (evento) REFERENCES eventos (id) on update cascade on delete restrict);

create table HorarioFechasPromociones (
	id int auto_increment not null,
    fecha int not null,
    promocion int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkHorarioFechasPromociones PRIMARY KEY (id),
CONSTRAINT fkHorarioFechasPromocionesFecha FOREIGN KEY (fecha) REFERENCES horas (id) on update cascade on delete restrict,
CONSTRAINT fkHorarioFechasPromocionesPromocion FOREIGN KEY (promocion) REFERENCES promociones (id) on update cascade on delete restrict);

create table TiposCategorias (
	id int auto_increment not null,
    nombre varchar(50) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkTiposCategorias PRIMARY KEY (id));

create table Categorias (
	id int auto_increment not null,
    nombre text not null,
    tipoCategoria int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkCategorias PRIMARY KEY (id),
CONSTRAINT pkCategoriasTipoCategorias FOREIGN KEY (tipoCategoria) REFERENCES tiposCategorias (id) on update cascade on delete restrict);

create table VentajasCategorias (
	id int auto_increment not null,
    categoria int not null,
    ventaja int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkVentajasCategorias PRIMARY KEY (id));

create table Ventajas (
	id int auto_increment not null,
    nombre varchar(45) not null,
    promocion int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkVentajas PRIMARY KEY (id),
CONSTRAINT fkVentajasPromocion FOREIGN KEY (promocion) REFERENCES promociones (id) on update cascade on delete restrict);


create table Puestos (
	id int not null auto_increment,
    nombre varchar(45) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPuestos PRIMARY KEY (id)
);

create table PersonasEstablecimientos (
	id int not null auto_increment,
    establecimiento int not null,
    persona int not null,
    puesto int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPersonasEstablecimientos PRIMARY KEY (id),
CONSTRAINT fkPersonasEstablecimientosEstablecimiento FOREIGN KEY (establecimiento) REFERENCES establecimientos (id) on update cascade on delete restrict,
CONSTRAINT fkPersonasEstablecimientosPersona FOREIGN KEY (persona) REFERENCES personas (id) on update cascade on delete restrict,
CONSTRAINT fkPersonasEstablecimientosPuesto FOREIGN KEY (puesto) REFERENCES puestos (id) on update cascade on delete restrict);

create table motivosInhabilitacion (
	id int auto_increment not null,
    texto varchar(256) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkMotivosInhabilitacion PRIMARY KEY (id),
INDEX (texto));

create table Usuarios (
	id int auto_increment not null,
    persona int not null,
    categoria int not null,
    uid text not null,
    estado varchar(60),
    motivoInhabilitacion int default null,
    logInWith int(3) not null comment '1 - Email, 2 - Google, 3 - Facebook, 4 - Twitter',
    creado text not null,
    modificado text not null,
CONSTRAINT pkUsuarios PRIMARY KEY (id),
CONSTRAINT fkUsuariosPersona FOREIGN KEY (persona) REFERENCES personas (id) on update cascade on delete restrict,
CONSTRAINT fkUsuariosCategoria FOREIGN KEY (categoria) REFERENCES categorias (id) on update cascade on delete restrict,
CONSTRAINT fkUsuariosMotivosInhabilitacion FOREIGN KEY (motivoInhabilitacion) REFERENCES motivosInhabilitacion (id) on update cascade on delete restrict);

create table PersonasContactoEmpresa (
	id int auto_increment not null,
    personaEmpresa int not null,
    empresa int not null,
	orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPersonasContactoEmpresa PRIMARY KEY (id),
CONSTRAINT fkPersonasContactoEmpresaPersonaEstablecimiento FOREIGN KEY (personaEmpresa) REFERENCES personasEstablecimientos (id) on update cascade on delete restrict,
CONSTRAINT fkPersonasContactoEmpresaEmpresa FOREIGN KEY (empresa) REFERENCES empresas (id) on update cascade on delete restrict);

create table PersonasContactoEstablecimiento (
	id int auto_increment not null,
    personaEstablecimiento int not null,
    establecimiento int not null,
	orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPersonasContactoEstablecimiento PRIMARY KEY (id),
CONSTRAINT fkPersonasContactoEstablecimientoPersonaEstablecimiento FOREIGN KEY (personaEstablecimiento) REFERENCES personasEstablecimientos (id) on update cascade on delete restrict,
CONSTRAINT fkPersonasContactoEstablecimientoEstablecimiento FOREIGN KEY (establecimiento) REFERENCES empresas (id) on update cascade on delete restrict);

create table PersonasContactoMarcas (
	id int auto_increment not null,
    personaMarca int not null,
    marca int not null,
	orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPersonasContactoMarca PRIMARY KEY (id),
CONSTRAINT fkPersonasContactoMarcaPersona FOREIGN KEY (personaMarca) REFERENCES personas (id) on update cascade on delete restrict,
CONSTRAINT fkPersonasContactoMarcaMarca FOREIGN KEY (marca) REFERENCES marcas (id) on update cascade on delete restrict);

create table Caracteristicas (
	id int auto_increment not null,
    texto text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkCaracteristicas PRIMARY KEY (id));

create table CaracteristicasEvento (
	id int auto_increment not null,
    caracteristica int,
    evento int,
    orden int,
    creado text not null,
    modificado text not null,
CONSTRAINT pkCaracteristicasEvento PRIMARY KEY (id),
CONSTRAINT fkCaracteristicasEventoCaracteristica FOREIGN KEY (caracteristica) REFERENCES caracteristicas (id) on update cascade on delete restrict,
CONSTRAINT fkCaracteristicasEventoEvento FOREIGN KEY (evento) REFERENCES eventos (id) on update cascade on delete restrict);

create table Requisitos (
	id int auto_increment not null,
    texto text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkRequisitos PRIMARY KEY (id)
);

create table RequisitosEvento (
	id int auto_increment not null,
    requisito int,
    evento int,
    orden int,
    creado text not null,
    modificado text not null,
CONSTRAINT pkRequisitosEvento PRIMARY KEY (id),
CONSTRAINT fkRequisitosEventoRequisito FOREIGN KEY (requisito) REFERENCES requisitos (id) on update cascade on delete restrict,
CONSTRAINT fkRequisitosEventoEvento FOREIGN KEY (evento) REFERENCES eventos (id) on update cascade on delete restrict);

create table Descripciones (
	id int auto_increment not null,
    texto text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkDescripciones PRIMARY KEY (id)
);

create table DescripcionesEvento (
	id int auto_increment not null,
    descripcion int,
    evento int,
    orden int,
    creado text not null,
    modificado text not null,
CONSTRAINT pkDescripcionesEvento PRIMARY KEY (id),
CONSTRAINT fkDescripcionesEventoDescripcion FOREIGN KEY (descripcion) REFERENCES descripciones (id) on update cascade on delete restrict,
CONSTRAINT fkDescripcionesEventoEvento FOREIGN KEY (evento) REFERENCES eventos (id) on update cascade on delete restrict
);

create table EventosEstablecimientos (
	id int auto_increment not null,
    evento int not null,
    establecimiento int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkEventosEstablecimientos PRIMARY KEY (id),
CONSTRAINT fkEventosEstablecimientosEvento FOREIGN KEY (evento) REFERENCES eventos (id) on update cascade on delete restrict,
CONSTRAINT fkEventosEstablecimientosEstablecimiento FOREIGN KEY (establecimiento) REFERENCES establecimientos (id) on update cascade on delete restrict);


create table ArchivosEvento(
	id int auto_increment not null,
    archivo int not null,
    evento int not null,
    cabecera boolean default false,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkArchivosEvento PRIMARY KEY (id),
CONSTRAINT pkArchivosEventoArchivo FOREIGN KEY (archivo) REFERENCES archivos (id) on update cascade on delete restrict,
CONSTRAINT pkArchivosEventoEvento FOREIGN KEY (evento) REFERENCES eventos (id) on update cascade on delete restrict);

create table ArchivosEmpresa (
	id int auto_increment not null,
    archivo int not null,
    empresa int not null,
    cabecera boolean default false,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkArchivosEmpresa PRIMARY KEY (id),
CONSTRAINT pkArchivosEmpresaArchivo FOREIGN KEY (archivo) REFERENCES archivos (id) on update cascade on delete restrict,
CONSTRAINT pkArchivosEmpresaEmpresa FOREIGN KEY (empresa) REFERENCES empresas (id) on update cascade on delete restrict);

create table ArchivosEstablecimiento (
	id int auto_increment not null,
    archivo int not null,
    establecimiento int not null,
    cabecera boolean default false,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkArchivosEstablecimiento PRIMARY KEY (id),
CONSTRAINT pkArchivosEstablecimientoArchivo FOREIGN KEY (archivo) REFERENCES archivos (id) on update cascade on delete restrict,
CONSTRAINT pkArchivosEstablecimientoEstablecimiento FOREIGN KEY (establecimiento) REFERENCES establecimientos (id) on update cascade on delete restrict);

create table ArchivosPromocion (
	id int auto_increment not null,
    archivo int not null,
    promocion int not null,
    cabecera boolean default false,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkArchivosPromocion PRIMARY KEY (id),
CONSTRAINT pkArchivosPromocionArchivo FOREIGN KEY (archivo) REFERENCES archivos (id) on update cascade on delete restrict,
CONSTRAINT pkArchivosPromocionPromocion FOREIGN KEY (promocion) REFERENCES promociones (id) on update cascade on delete restrict);

create table ArchivosCategoria(
	id int auto_increment not null,
    archivo int not null,
    categoria int not null,
    cabecera boolean default false,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkArchivosCategoria PRIMARY KEY (id),
CONSTRAINT pkArchivosCategoriaArchivo FOREIGN KEY (archivo) REFERENCES archivos (id) on update cascade on delete restrict,
CONSTRAINT pkArchivosCategoriaCategoria FOREIGN KEY (categoria) REFERENCES categorias (id) on update cascade on delete restrict);

create table ArchivosMarca(
	id int auto_increment not null,
    archivo int not null,
    marca int not null,
    cabecera boolean default false,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkArchivosMarca PRIMARY KEY (id),
CONSTRAINT pkArchivosMarcaArchivo FOREIGN KEY (archivo) REFERENCES archivos (id) on update cascade on delete restrict,
CONSTRAINT pkArchivosMarca FOREIGN KEY (marca) REFERENCES marcas (id) on update cascade on delete restrict);

create table ArchivosProducto(
	id int auto_increment not null,
    archivo int not null,
    producto int not null,
    cabecera boolean default false,
    orden int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkArchivosProducto PRIMARY KEY (id),
CONSTRAINT pkArchivosProductoArchivo FOREIGN KEY (archivo) REFERENCES archivos (id) on update cascade on delete restrict,
CONSTRAINT pkArchivosProductoProducto FOREIGN KEY (producto) REFERENCES productos (id) on update cascade on delete cascade);

create table TiposPromociones (
	id int auto_increment not null,
    nombre varchar(45) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPromociones PRIMARY KEY (id));

create table PromocionesProductos(
	id int auto_increment not null,
    promocion int not null,
    producto int not null,
    precio int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPromocionesProductos PRIMARY KEY (id),
CONSTRAINT fkPromocionesProductosPromocion FOREIGN key (promocion) REFERENCES promociones (id) on update cascade on delete cascade,
CONSTRAINT fkPromocionesProductosProducto FOREIGN key (Producto) REFERENCES productos (id) on update cascade on delete cascade);

create table CaracteristicasDeProductos (
    id int auto_increment not null,
    caracteristica varchar(45) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkCaracteristicasProducto PRIMARY KEY (id));

create table CaracteristicasProducto(
	id int auto_increment not null,
    caracteristica int not null,
    producto int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkCaracteristicasProducto PRIMARY KEY (id),
CONSTRAINT fkCaracteristicasProductoCaracteristica FOREIGN KEY (caracteristica) REFERENCES caracteristicasDeProductos (id) on update cascade on delete restrict,
CONSTRAINT fkCaracteristicasProductoProducto FOREIGN KEY (producto) REFERENCES productos (id) on update cascade on delete cascade);

create table Grupos(
	id int auto_increment not null,
    nombre varchar(45) not null,
	descripcion text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkGrupos PRIMARY KEY (id));

create table GruposConsumicion (
	id int auto_increment not null,
    codigo text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkGruposConsumicion PRIMARY KEY (id));

create table MiembrosGrupos(
	id int auto_increment not null,
    grupo int not null,
    usuario int not null,
    silenciado text default null,
    prioritario boolean default false,
    creado text not null,
    modificado text not null,
CONSTRAINT pkMiembrosGrupos PRIMARY KEY (id),
CONSTRAINT fkMiembrosGruposUsuario FOREIGN KEY (usuario) REFERENCES usuarios (id) on update cascade on delete cascade,
CONSTRAINT fkMiembrosGruposGrupo FOREIGN KEY (grupo) REFERENCES grupos (id) on update cascade on delete restrict);

create table MiembrosGruposConsumicion (
	id int auto_increment not null,
    grupo int not null,
    usuario int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkMiembrosGrupos PRIMARY KEY (id),
CONSTRAINT fkMiembrosGruposConsumicionUsuario FOREIGN KEY (usuario) REFERENCES usuarios (id) on update cascade on delete cascade,
CONSTRAINT fkMiembrosGruposConsumicionGrupo FOREIGN KEY (grupo) REFERENCES grupos (id) on update cascade on delete restrict);

create table Amigos(
	id int auto_increment not null,
    usuario int not null,
    amigo int not null,
    silenciado text default null,
    bloqueado boolean default false,
    prioritario boolean default false,
    creado text not null,
    modificado text not null,
CONSTRAINT pkAmigos PRIMARY KEY (id),
CONSTRAINT fkAmigosUsuario FOREIGN KEY (usuario) REFERENCES usuarios (id) on update cascade on delete cascade,
CONSTRAINT fkAmigosAmigo FOREIGN KEY (amigo) REFERENCES usuarios (id) on update cascade on delete cascade);

create table Invitados(
	id int auto_increment not null,
    usuario int not null,
    email text not null,
    usuarioGanado boolean default false,
    codigo text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkInvitados PRIMARY KEY (id));

create table Tickets (
	id int auto_increment not null,
    mesa int not null,
    grupoConsumiciones int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkTicket PRIMARY KEY (id));

create table TiposMesas (
	id int auto_increment not null,
    nombre varchar(45) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkTipoMesa PRIMARY KEY (id));

create table MesasEstablecimiento (
	id int auto_increment not null,
    codigo text not null,
    tipoMesa int not null,
    sillas int not null,
    numero int(3) not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkMesasEstablecimiento PRIMARY KEY (id),
CONSTRAINT fkMesasEstablecimientoTipoMesa FOREIGN KEY (tipoMesa) REFERENCES tiposMesas (id) on update cascade on delete restrict);

create table LineasTicket(
	id int auto_increment not null,
    ticket int not null,
    producto int not null,
    usuario int not null,
    cantidad int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkLineasTicket PRIMARY KEY (id),
CONSTRAINT fkLineasTicketTicket FOREIGN KEY (ticket) REFERENCES tickets (id) on update cascade on delete cascade,
CONSTRAINT fkLineasTicketProducto FOREIGN KEY (producto) REFERENCES productos (id) on update cascade on delete restrict,
CONSTRAINT fkLineasTicketUsuario FOREIGN KEY (usuario) REFERENCES usuarios (id) on update cascade on delete no action);

create table PublicidadEstablecimiento (
	id int auto_increment not null,
    establecimiento int not null,
    precio int not null,
    fechaInicio text not null,
    fechaFin text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPublicidadEstablecimiento PRIMARY KEY (id),
CONSTRAINT fkPublicidadEstablecimientoEstablecimiento FOREIGN KEY (establecimiento) REFERENCES establecimientos (id) on update cascade on delete cascade);

create table PublicidadEmpresa (
	id int auto_increment not null,
    empresa int not null,
    precio int not null,
    fechaInicio text not null,
    fechaFin text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPublicidadEmpresa PRIMARY KEY (id),
CONSTRAINT fkPublicidadEmpresaEmpresa FOREIGN KEY (empresa) REFERENCES empresas (id) on update cascade on delete cascade);

create table PublicidadProducto (
	id int auto_increment not null,
    producto int not null,
    precio int not null,
    fechaInicio text not null,
    fechaFin text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPublicidadProducto PRIMARY KEY (id),
CONSTRAINT fkPublicidadProductoProducto FOREIGN KEY (producto) REFERENCES productos (id) on update cascade on delete cascade);

create table PublicidadEvento (
	id int auto_increment not null,
    evento int not null,
    precio int not null,
    fechaInicio text not null,
    fechaFin text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPublicidadEvento PRIMARY KEY (id),
CONSTRAINT fkPublicidadEventoEvento FOREIGN KEY (evento) REFERENCES eventos (id) on update cascade on delete cascade);

create table PublicidadPromocion (
	id int auto_increment not null,
    promocion int not null,
    precio int not null,
    fechaInicio text not null,
    fechaFin text not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkPublicidadPromocion PRIMARY KEY (id),
CONSTRAINT fkPublicidadPromocion FOREIGN KEY (promocion) REFERENCES promociones (id) on update cascade on delete cascade);

create table UsuariosRegistrandose(
	id int auto_increment not null,
    email varchar(256) not null,
    logInWith int not null,
    creado text not null,
    modificado text not null,
CONSTRAINT pkUsuariosRegistrandose PRIMARY KEY (id),
INDEX (email));
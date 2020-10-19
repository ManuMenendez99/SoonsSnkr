insert into tiposcategorias(nombre, creado, modificado) values ('usuario',"2020-09-10T16:54:14.733Z","2020-09-10T16:54:14.733Z");

insert into categorias(nombre, tipoCategoria, creado, modificado) values ('Pacifier',1,"2020-09-10T16:54:14.733Z","2020-09-10T16:54:14.733Z");
insert into categorias(nombre, tipoCategoria, creado, modificado) values ('Bronze',1,"2020-09-10T16:54:14.733Z","2020-09-10T16:54:14.733Z");
insert into categorias(nombre, tipoCategoria, creado, modificado) values ('Silver',1,"2020-09-10T16:54:14.733Z","2020-09-10T16:54:14.733Z");
insert into categorias(nombre, tipoCategoria, creado, modificado) values ('Gold',1,"2020-09-10T16:54:14.733Z","2020-09-10T16:54:14.733Z");
insert into categorias(nombre, tipoCategoria, creado, modificado) values ('Platinum',1,"2020-09-10T16:54:14.733Z","2020-09-10T16:54:14.733Z");

insert into emails(email, creado, modificado) values ("manolo.meniba@gmail.com", "2020-10-19T12:03:41.668Z", "2020-10-19T12:03:41.668Z");
insert into emails(email,creado, modificado) values ("cloudnighty@gmail.com", "2020-10-19T12:04:28.626Z", "2020-10-19T12:04:28.626Z");

insert into personas(nombre, apellidos, fechaNacimiento, creado, modificado) values ('Manuel', 'Menéndez Ibáñez', '1999-04-23T22:00:00.000Z', '2020-10-19T12:04:02.089Z', '2020-10-19T12:04:02.089Z');
insert into personas(nombre, apellidos, fechaNacimiento, creado, modificado) values ('Manuel', 'Menéndez Sánchez', '1968-07-09T23:00:00.000Z', '2020-10-19T12:04:57.106Z', '2020-10-19T12:04:57.106Z');

insert into emailsPersona(email, persona, orden, creado, modificado) values ('1', '1', '1', '2020-10-19T12:04:02.089Z', '2020-10-19T12:04:02.089Z');
insert into emailsPersona(email, persona, orden, creado, modificado) values ('2','2','1','2020-10-19T12:04:02.089Z', '2020-10-19T12:04:02.089Z');

insert into usuarios(persona, dap, categoria, uid, estado, motivoInhabilitacion, logInWith, creado, modificado) values ('1', '51155730G', '1', 'iXeQ0yAeezbqMNJB5Rnzrxi1TGB2', 'Estado del usuario', NULL, '2', '2020-10-19T12:04:02.089Z', '2020-10-19T12:04:02.089Z');
insert into usuarios(persona, dap, categoria, uid, estado, motivoInhabilitacion, logInWith, creado, modificado) values ('2', '50076763J', '1', 'syi4sNHLVMXQc3FT9oc0FSw0Gov2', 'Bienvenido a Nighty', NULL, '2', '2020-10-19T12:04:57.106Z', '2020-10-19T12:04:57.106Z');

insert into amigos(usuario, amigo, silenciado, bloqueado, prioritario, creado, modificado) values ('1','2', false, false, false, '2020-10-19T12:14:04.589Z',  '2020-10-19T12:14:04.589Z');

insert into chats (emisor, receptor, grupo, nombreChat, tipoChat, creado, modificado) values ('1','2', null, '[{"id":1,"nombre":"Manuel Menéndez Ibáñez"},{"id":2,"nombre":"Manuel Menéndez Sánchez"}]', 0, '2020-10-19T12:04:02.089Z', '2020-10-19T12:04:02.089Z' );

insert into mensajes(chat, mensajeHtml, emisor,creado,modificado, orden) values ('1', 'hola bienvenido es el primer mensaje que se manda desde la aplicación web', '{"id":1,"nombre":"Manuel Menéndez Ibáñez"}', '2020-10-19T14:04:02.089Z', '2020-10-19T14:04:02.089Z', '1603116242089');
insert into mensajes(chat, mensajeHtml, emisor,creado,modificado, orden) values ('1', 'hola bienvenido es el segundo mensaje que se manda desde la aplicación web', '{"id":2,"nombre":"Manuel Menéndez Sánchez"}', '2020-10-19T14:10:02.089Z', '2020-10-19T14:10:02.089Z', '1603116602089');
insert into mensajes(chat, mensajeHtml, emisor,creado,modificado, orden) values ('1', 'hola bienvenido es el primer mensaje que se manda desde la aplicación web', '{"id":1,"nombre":"Manuel Menéndez Ibáñez"}', '2020-10-19T14:29:02.089Z', '2020-10-19T14:29:02.089Z', '1603116842089');
insert into mensajes(chat, mensajeHtml, emisor,creado,modificado, orden) values ('1', 'hola bienvenido es el primer mensaje que se manda desde la aplicación web', '{"id":1,"nombre":"Manuel Menéndez Ibáñez"}', '2020-10-19T14:39:02.089Z', '2020-10-19T14:39:02.089Z', '1603116942089');
insert into mensajes(chat, mensajeHtml, emisor,creado,modificado, orden) values ('1', 'hola bienvenido es el primer mensaje que se actualiza solo y que se manda desde la aplicación web', '{"id":1,"nombre":"Manuel Menéndez Ibáñez"}', '2020-10-19T14:40:02.089Z', '2020-10-19T14:40:02.089Z', '1603116982089');

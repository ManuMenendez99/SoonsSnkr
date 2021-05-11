DELIMITER $$
drop procedure if exists crearUsuario$$
create procedure crearUsuario(
	in email_input text,
    in nombre_input text,
    in apellidos_input text,
    in telefono_input int,
    in fechaNacimiento_input varchar(30),
    in preferencias_input int,
    in uid_input text,
    in social_input int,
    in role_input int,
    in fecha_input varchar(30)
)
BEGIN
	DECLARE pass text;
    set pass = (SELECT contrasena from usuariosRegistrandose where email = email_input);
	INSERT INTO usuarios (uid, role, email, nombre, apellidos, contrasena, telefono, fechaNacimiento, logInWith, preferencias, creado, modificado) VALUES (uid_input, role_input, email_input, nombre_input, apellidos_input, pass, telefono_input, fechaNacimiento_input, social_input, preferencias_input, fecha_input, fecha_input);
	DELETE FROM usuariosRegistrandose WHERE email = email_input;
END
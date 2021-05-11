DELIMITER $$
drop procedure if exists crearUsuarioAtemporal$$
create procedure crearUsuarioAtemporal(
	in email_input text,
    in contrasena_input text,
    in social_input int,
    in fecha_input varchar(30)
)
BEGIN
	INSERT INTO usuariosRegistrandose (email, contrasena, logInWith, creado, modificado) VALUES (email_input, contrasena_input, social_input, fecha_input, fecha_input);
END
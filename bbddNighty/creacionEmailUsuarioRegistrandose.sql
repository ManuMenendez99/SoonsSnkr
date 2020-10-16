use nighty;

delimiter &&

drop procedure if exists createEmailAndUser &&

create procedure createEmailAndUser(
	IN email_input varchar(256),
    IN contrasena_input text,
    IN social_input int,
    IN timestamp_input text
)
BEGIN
	declare email_id int;
    declare passwords text;
    
    if (contrasena_input <> "" and contrasena_input is not null) then set passwords = null; else set passwords = contrasena_input; END IF;
	START TRANSACTION;

	INSERT INTO emails (email, creado, modificado) value (email_input, timestamp_input, timestamp_input);
    
    set email_id = (SELECT id from emails where email = email_input and creado = timestamp_input and modificado = timestamp_input);
    
    INSERT INTO usuariosRegistrandose (email, contrasena, loginwith, creado, modificado) value (email_id, contrasena_input, social_input, timestamp_input, timestamp_input);

	COMMIT;
END &&
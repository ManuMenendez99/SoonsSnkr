use nighty;

delimiter &&

drop procedure if exists crearUsuario &&

create procedure crearUsuario (
	IN email_input text,
	IN nombre_input text,
    IN apellidos_input text,
    IN fechaNacimiento_input text,
    IN dap_input varchar(15),
    IN categoria_input int,
    IN uid_input text,
    IN estado_input text,
    IN loginwith_input int,
    IN timestamp_input text
)
begin
	declare emailId int;
	declare personaId int;
    
    set emailId = (select id from emails where email = email_input);
    
    -- Eliminación de usuario Registrado
	DELETE from usuariosRegistrandose where email = emailId;
    
    -- Creación de la persona
	INSERT INTO personas (nombre, apellidos, fechaNacimiento, creado, modificado) value (nombre_input, apellidos_input, fechaNacimiento_input, timestamp_input, timestamp_input);
    set personaId = (SELECT id from personas where nombre = nombre_input and apellidos = apellidos_input and creado = timestamp_input); 
	
    -- Creación del persona Email
    INSERT into emailsPersona (email, persona, orden, creado, modificado) value (emailId, personaId, 1, timestamp_input, timestamp_input);
    
    -- Creación del usuario
    INSERT into usuarios (persona, dap, categoria, uid, estado, loginwith, creado, modificado) value (personaId, dap_input, categoria_input, uid_input, estado_input, loginwith_input, timestamp_input, timestamp_input);
    
	COMMIT;
end &&
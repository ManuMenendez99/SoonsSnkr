drop view if exists personaUsuario;
create view personaUsuario as
select p.id as p_id, p.nombre as p_nombre, p.apellidos as p_apellidos, p.fechaNacimiento as p_fechaNacimiento, p.creado as p_creado, p.modificado as p_modificado, u.id as u_id, u.dap as u_dap, u.categoria as u_categoria, u.uid as u_uid, u.estado as u_estado, u.motivoInhabilitacion as u_motivoInhabilitacion, u.logInWith as u_logInWith, u.creado as u_creado, u.modificado as u_modificado from usuarios u inner join personas p on u.persona = p.id
drop view if exists existeUsuario;
create view existeUsuario as
select 
-- EMAILS
e.id as e_id, e.email as e_email,
-- EMAILSPERSONA
ep.id as ep_id, ep.persona as ep_persona, ep.orden as ep_orden,u.id as u_id,
-- USUARIO
u.persona as u_persona, u.categoria as u_categoria, u.uid as u_uid, u.estado as u_estado, u.motivoInhabilitacion as u_motivoInhabilitacion, u.logInWith as u_logInWith,
-- USUARIOSREGISTRANDOSE
ur.email as ur_email, ur.logInWith as ur_logInWith, ur.id as ur_id, ur.contrasena as ur_contrasena
from emails e left join emailsPersona ep ON e.id = ep.email left join usuarios u on u.persona = ep.persona left join usuariosregistrandose ur on true
union
select 
-- EMAILS
e.id as e_id, e.email as e_email,
-- EMAILSPERSONA
ep.id as ep_id, ep.persona as ep_persona, ep.orden as ep_orden,u.id as u_id,
-- USUARIO
u.persona as u_persona, u.categoria as u_categoria, u.uid as u_uid, u.estado as u_estado, u.motivoInhabilitacion as u_motivoInhabilitacion, u.logInWith as u_logInWith,
-- USUARIOSREGISTRANDOSE
ur.email as ur_email, ur.logInWith as ur_logInWith, ur.id as ur_id, ur.contrasena as ur_contrasena
from emails e left join emailsPersona ep ON e.id = ep.email left join usuarios u on u.persona = ep.persona right join usuariosregistrandose ur on true
;
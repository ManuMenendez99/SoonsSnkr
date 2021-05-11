drop view existeusuario;
create view existeusuario as
select email as u_email, null as ur_email,null as ur_loginWith,null as ur_contrasena from usuarios
union all 
select null as u_email, email as ur_email, contrasena as ur_contrasena, loginwith as ur_loginwith from usuariosregistrandose 
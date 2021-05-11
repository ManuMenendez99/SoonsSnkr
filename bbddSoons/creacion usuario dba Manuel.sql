CREATE USER 'dbamanuel'@'%' IDENTIFIED WITH mysql_native_password BY 'WhateverPass';
grant all privileges on Soons.* to "dbamanuel";
flush privileges;
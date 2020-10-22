CREATE USER 'dbamanuel'@'%' IDENTIFIED WITH mysql_native_password BY 'WhateverPass';
grant all privileges on nighty.* to "dbamanuel";
flush privileges;

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcatSqlService } from './sqlConcat';
import { MulterModule } from '@nestjs/platform-express';
import { EncriptacionService } from './encriptacion/encriptacion.service';


@Module({
  imports: [
    MulterModule.register({
      dest: 'D://Archivos//GIT//Trabajo//Soons//FTPSERVER//ARCHIVOSSUBIDOS'
    })
  ],
  controllers: [AppController],
  providers: [AppService, ConcatSqlService, EncriptacionService],
})
export class AppModule { }

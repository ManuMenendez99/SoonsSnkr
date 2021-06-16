import { Controller, Get, Param, Post, Body, Put, Delete, UseInterceptors, UploadedFiles, Res, UploadedFile, Req } from '@nestjs/common';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname } from 'path'
import "fs";
import { AppService } from './app.service';
import { SqlInsert, SqlInsertSelect, SqlUpdate, Habilitacion, SqlProcedure } from '@Soons/interfaces-sql';
import { EncriptacionService } from "./encriptacion/encriptacion.service";
import pool from './database';
import { timeStamp } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private encriptacion: EncriptacionService) { }

  @Get(':query')
  get(@Param() params) {
    return this.appService.get(params.query);
  }

  @Get('all/:tabla')
  getAll(@Param() params) {
    return this.appService.getAll(params.tabla) 
  }

  @Post()
  post(@Body() JsonInsert: SqlInsert) {
    return this.appService.post(JsonInsert)
  }

  @Post('select')
  postSelect(@Body() JsonInsert: SqlInsertSelect) {
    return this.appService.postSelect(JsonInsert)
  }

  @Put()
  put(@Body() JsonUpdate: SqlUpdate) {
    return this.appService.put(JsonUpdate)
  }

  @Delete(':json')
  delete(@Param() params) {
    return this.appService.delete(params.json)
  }

  @Post('upload/:usuario/:archivoFoto')
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
      destination: function (req, file, cb) {
        console.log(req, file, cb)
        cb(null, 'D://Archivos//GIT//Trabajo//Soons//webSoons//apps//web//src//assets//FTP-SERVER//ARCHIVOSSUBIDOS//' + file.mimetype.substring(0, file.mimetype.indexOf("/")));
      },
      filename: (req, file, cb) => {
        console.log(req, file, cb)
        pool.query('SELECT AUTO_INCREMENT as cantidad FROM information_schema.TABLES WHERE TABLE_SCHEMA = "Soons" AND TABLE_NAME = "archivos"', function (err, result) {
          cb(null, (result[0].cantidad) + "~" + file.originalname)
        });
      }
    })
  }))
  uploadFile(@Param() params,@UploadedFile() file) {
    const nombre = file.filename
    const mime = file.mimetype.substr(0, file.mimetype.indexOf("/"))
    const extension = extname(file.filename)
    const size = file.size
    const creado = new Date().toISOString()
    const modificado = new Date().toISOString()
    const codigo = this.encriptacion.Encriptacion(file.filename)
    const queryBusquedaArchivo = 'SELECT * from archivos where nombre = "' + file.filename + '" and usuario = ' + params.usuario + ' and size = ' + size;
    console.log(queryBusquedaArchivo)
    pool.query(queryBusquedaArchivo, function (err, result) {
      console.log(result)
      if (result.length === 0) {
        const query = `INSERT INTO archivos (nombre, mime, extension, size, codigo, usuario, archivoFoto, creado, modificado) VALUE ('${nombre}','${mime}','${extension}',${size},'${codigo}',${params.usuario}, ${params.archivoFoto},'${creado}','${modificado}')`
        pool.query(query)
      }  
    })
    return file
  }

  @Get('download/:codigo')
  download(@Param("codigo") codigo: string, @Res() res) {
    pool.query("SELECT mime, nombre FROM archivos where codigo = " + codigo, function (err, result) {
      const nombre = result[0].nombre
      const mime = result[0].mime
      const ruta = 'D://Archivos//GIT//Trabajo//Soons//webSoons//apps//web//src//assets//FTP-SERVER//ARCHIVOSSUBIDOS//' + mime + "/" + nombre
      res.download(ruta, nombre.substr(nombre.indexOf("~") + 4));
    })
  }

  @Post('habilitacion')
  habilitacionUsuario(@Body() habilitacion: Habilitacion) {
    return this.appService.habilitacionUsuario(habilitacion)
  }

  @Post('procedure')
  procedure(@Body() procedure: SqlProcedure) {
    return this.appService.procedure(procedure)
  }

  @Get('chat/:jsonId')
  chat(@Param() params) {
    return this.appService.chat(JSON.parse(params.jsonId));
  }

}


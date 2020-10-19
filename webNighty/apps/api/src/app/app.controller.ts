import { Controller, Get, Param, Post, Body, Put, Delete, UseInterceptors, UploadedFiles, Res, UploadedFile, Req } from '@nestjs/common';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname } from 'path'
import "fs";
import { AppService } from './app.service';
import { SqlInsert, SqlInsertSelect, SqlUpdate, Habilitacion, SqlProcedure } from '@nighty/interfaces-sql';
import { EncriptacionService } from "./encriptacion/encriptacion.service";
import pool from './database';

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

  @Post('upload/:usuario')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'D:\\FTPSERVER\\ARCHIVOSSUBIDOS\\' + file.mimetype.substring(0, file.mimetype.indexOf("/")));
      },
      filename: (req, file, cb) => {
        pool.query('SELECT AUTO_INCREMENT as cantidad FROM information_schema.TABLES WHERE TABLE_SCHEMA = "nighty" AND TABLE_NAME = "archivos"', function (err, result) {
          cb(null, result[0].cantidad + "~" + file.originalname)
        });
      }
    })
  }))
  uploadFile(@Param() params,@UploadedFile() file) {
    const nombre = file.filename
    const mime = file.mimetype.substr(0, file.mimetype.indexOf("/"))
    const extension = extname(file.filename)
    const size = file.size
    const creado = new Date()
    const modificado = new Date()
    const codigo = this.encriptacion.Encriptacion(file.filename)
    const query = `INSERT INTO archivos (nombre, mime, extension, size, creado, modificado, codigo, usuario, archivoFoto) VALUE ('${nombre}','${mime}','${extension}',${size},'${creado}','${modificado}','${codigo}',${params.usuario}, ${params.archivoFoto})`
    pool.query(query)
    return file
  }

  @Get('download/:codigo')
  download(@Param("codigo") codigo: string, @Res() res) {
    pool.query("SELECT mime, nombre FROM archivos where codigo = " + codigo, function (err, result) {
      const nombre = result[0].nombre
      const mime = result[0].mime
      const ruta = 'D:\\FTPSERVER\\ARCHIVOSSUBIDOS\\' + mime + "\\" + nombre
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


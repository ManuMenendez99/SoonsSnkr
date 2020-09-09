import { Controller, Get, Param, Post, Body, Put, Delete, UseInterceptors, UploadedFiles, Res, UploadedFile } from '@nestjs/common';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname } from 'path'
import "fs";
import { AppService } from './app.service';
import { SqlInsert, SqlInsertSelect, SqlUpdate, Habilitacion } from '@nighty/interfaces-sql';
import { encriptar } from "@nighty/encriptado";
import pool from './database';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
d
  @Get(':json')
  get(@Param() params) {
    return this.appService.get(JSON.parse(params.json));
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
        cb(null, 'E:\\FTPSERVER\\ARCHIVOSSUBIDOS\\' + file.mimetype.substring(0, file.mimetype.indexOf("/")));
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
    const codigo = encriptar(file.filename)
    const query = `INSERT INTO archivos (nombre, mime, extension, size, creado, modificado, codigo, usuario) VALUE ('${nombre}','${mime}','${extension}',${size},'${creado}','${modificado}','${codigo}',${params.usuario})`
    pool.query(query)
    return file
  }

  @Get('download/:codigo')
  download(@Param("codigo") codigo: string, @Res() res) {
    pool.query("SELECT mime, nombre FROM archivos where codigo = " + codigo, function (err, result) {
      const nombre = result[0].nombre
      const mime = result[0].mime
      const ruta = 'E:\\FTPSERVER\\ARCHIVOSSUBIDOS\\' + mime + "\\" + nombre
      res.download(ruta, nombre.substr(nombre.indexOf("~") + 4));
    })
  }

  @Post('habilitacion')
  habilitacionUsuario(@Body() habilitacion: Habilitacion) {
    return this.appService.habilitacionUsuario(habilitacion)
  }
}


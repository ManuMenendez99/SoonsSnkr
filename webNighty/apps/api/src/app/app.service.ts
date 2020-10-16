import { Injectable } from '@nestjs/common';
import pool from './database'
import { ConcatSqlService } from "./sqlConcat";
import { SqlInsert, SqlUpdate, SqlDelete, SqlInsertSelect, Habilitacion, SqlProcedure } from '@nighty/interfaces-sql';
import { UsuariosRegistrandose, Usuarios, MotivosInhabilitacion } from '@nighty/models';

import * as admin from 'firebase-admin';
import pusher from './pusher';

@Injectable()
export class AppService {

  constructor(public concatSql: ConcatSqlService) { }

  get(sqlSelect: string) {
    const query = sqlSelect
    console.log("\x1b[32m", query)
    return pool.query(query)
  }

  getAll(tabla: string) {
    const query = `SELECT * FROM ${tabla}`
    console.log("\x1b[32m", query)
    return pool.query(query)
  }

  post(sqlInsert: SqlInsert) {
    const query = this.concatSql.hacerInsert(sqlInsert)
    console.log("\x1b[32m", query)
    return pool.query(query)
  }

  postSelect(sqlInsert: SqlInsertSelect) {
    const query = this.concatSql.hacerInsertConSelect(sqlInsert)
    console.log("\x1b[32m", query)
    return pool.query(query)
  }

  put(sqlUpdate: SqlUpdate) {
    const query = this.concatSql.hacerUpdate(sqlUpdate)
    console.log("\x1b[32m", query)
    return pool.query(query)
  }

  delete(sqlDelete: SqlDelete) {
    const query = this.concatSql.hacerDelete(sqlDelete)
    console.log("\x1b[32m", query)
    return pool.query(query)
  }

  habilitacionUsuario(habilitacionUsuario: Habilitacion) {
    return admin.auth().updateUser(habilitacionUsuario.uid, {
      disabled: habilitacionUsuario.habilitacion
    })
  }

  procedure(procedure: SqlProcedure) {
    const query = this.concatSql.hacerProcedure(procedure)
    console.log("\x1b[32m", query)
    return pool.query(query)
  }

  pusherAuthenticate(req) {
    const socketId = req.body.socket_id
    const channel = req.body.channel_name
    const auth = pusher.authenticate(socketId, channel)
    return auth
  }
}

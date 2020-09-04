import { Injectable } from '@nestjs/common';
import pool from './database'
import { ConcatSqlService } from "./sqlConcat";
import { SqlSelect, SqlInsert, SqlUpdate, SqlDelete, SqlInsertSelect } from '@nighty/interfaces-sql';
import { UsuariosRegistrandose, Usuarios, MotivosInhabilitacion } from '@nighty/models';

import * as admin from 'firebase-admin';
@Injectable()
export class AppService {

  constructor(public concatSql: ConcatSqlService) { }

  get(sqlSelect: SqlSelect) {
    const query = this.concatSql.hacerSelect(sqlSelect)
    console.log(query)
    return pool.query(query)
  }

  getAll(tabla: string) {
    const query = `SELECT * FROM ${tabla}`
    console.log(query)
    return pool.query(query)
  }

  post(sqlInsert: SqlInsert) {
    const query = this.concatSql.hacerInsert(sqlInsert)
    return pool.query(query)
  }

  postSelect(sqlInsert: SqlInsertSelect) {
    const query = this.concatSql.hacerInsertConSelect(sqlInsert)
    return pool.query(query)
  }

  put(sqlUpdate: SqlUpdate) {
    const query = this.concatSql.hacerUpdate(sqlUpdate)
    console.log(query)
    return pool.query(query)
  }

  delete(sqlDelete: SqlDelete) {
    const query = this.concatSql.hacerDelete(sqlDelete)
    console.log(query)
    return pool.query(query)
  }

  habilitacionUsuario(usuario: Usuarios, habilitar: boolean, inhabilitacion: MotivosInhabilitacion) {
    return admin.auth().updateUser(usuario.uid, {
      disabled: habilitar
    })

  }
}

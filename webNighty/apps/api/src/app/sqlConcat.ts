import { Injectable } from '@angular/core';
import { SqlWhere, SqlFrom, SqlInsert, SqlInsertSelect, SqlUpdate, SqlDelete, SqlProcedure, ChatObtencion } from '@nighty/interfaces-sql';

@Injectable({
    providedIn: 'root'
})
export class ConcatSqlService {

    hacerInsert(JsonInsert: SqlInsert) {
        const insert = "Insert into " + JsonInsert.tabla + "( " + JsonInsert.valores.map(x => x.campo).join(",") + ")" + (JsonInsert.valores.length !== 0 ? 'values' : 'value') + "(" + JsonInsert.valores.map(x => this.formatoCampo(x.valor)).join(",") + ")"

        return insert
    }

    hacerInsertConSelect(JsonInsert: SqlInsertSelect) {
        const insert = "Insert into " + JsonInsert.tabla + " " + JsonInsert.select

        return insert
    }

    hacerUpdate(JsonUpdate: SqlUpdate) {
        const update = "Update " + JsonUpdate.tabla + " set " + JsonUpdate.valores.map(x => x.campo + "=" + x.valor).join(",")
        const where = JsonUpdate.where.length !== 0 ? this.formarWhere(JsonUpdate.where) : null

        return update + where
    }

    hacerDelete(JsonDelete: SqlDelete) {
        const borrar = "Delete " + JsonDelete.tabla
        const where = JsonDelete.where.length !== 0 ? this.formarWhere(JsonDelete.where) : null

        return borrar + where
    }

    hacerProcedure(SQLProcedure: SqlProcedure) {
        const nombre = SQLProcedure.nombre
        const valores = SQLProcedure.valores.map(x => typeof (x) !== "number" && typeof (x) !== "boolean" ? "'" + x + "'" : x).join()
        return "call " + nombre + " (" + valores + " )"
    }

    hacerChat(chat: ChatObtencion) {
        const idChat = chat.idChat
        const timestamp = chat.timestamp
        return "SELECT * from mensajes WHERE chat = " + idChat + (timestamp !== null && timestamp !== undefined ? " and orden < " + new Date(timestamp).getTime() : "") + " limit 30"
    }


    private formarFrom(from: Array<SqlFrom>) {
        let respuesta = " from " + from[0].alias ? from[0].tabla + " as " + from[0].alias : from[0].tabla
        if (from.length !== 1) {
            respuesta = respuesta + from.slice(1).map(x => x.tipoJoin + " " + (x.alias ? x.tabla + " as " + x.alias : x.tabla) + " ON " + x.join.map((y, i) => (i === 1 ? ' and ' : '') + y.enlace.campo + "." + y.enlace.valor + "=" + y.original.campo + "." + y.original.valor))
        }
        return respuesta
    }

    private formarWhere(where: Array<SqlWhere>) {
        let respuesta = ' where ';
        where.forEach((x, i) => {

            // Añadir el or o el and

            if (i !== 0) {
                if (x.or) {
                    respuesta = respuesta + " or "
                } else {
                    respuesta = respuesta + " and "
                }
            }


            // Añadir el primer parentesis

            if (x.parentesis === "(") {
                respuesta = respuesta + " ("
            }


            // Vemos el tipo de operación que necesitamos

            if (x.logico) {
                respuesta = respuesta + " " + x.campo + " " + x.logico + this.formatoCampo(x.valor)
            } else if (x.between) {
                respuesta = respuesta + " (between " + x.between[0] + " and " + x.between[1] + ")"
            } else if (x.like) {
                respuesta = respuesta + "like " + x.like.join()
            } else if (x.in) {
                respuesta = respuesta + "in (" + x.in.map(y => this.formatoCampo(y)).join(",") + ")"

            }


            // Añadimos el segundo parentesis

            if (x.parentesis === ")") {
                respuesta = respuesta + ")"
            }
        })
        // Control de errores de parentesis
        let parentesisNecesitados = Object.keys(respuesta).filter(x => x === "(").length - Object.keys(respuesta).filter(x => x === ")").length
        while (parentesisNecesitados !== 0) {
            respuesta = respuesta + ")"
            parentesisNecesitados = parentesisNecesitados - 1
        }

        return respuesta
    }



    private formatoCampo(valor: any) {
        if (typeof valor !== "number" && typeof valor !== "boolean") {
            valor = "'" + valor + "'"
        }
        return valor
    }
}
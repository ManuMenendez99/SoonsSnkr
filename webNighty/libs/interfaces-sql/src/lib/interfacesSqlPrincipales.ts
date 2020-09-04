import { SqlWhere, SqlFrom, SqlOrderBy } from './interfacesSqlSecundarias';
import { SqlCampoValor } from './interfacesSqlTerciarias';

export interface SqlSelect {
  select?: Array<any>
  from?: Array<SqlFrom>
  where?: Array<SqlWhere>
  groupBy?: Array<string>
  having?: Array<SqlWhere>
  orderBy?: Array<SqlOrderBy>
  limit?: number 
}

export interface SqlInsert {
  tabla: string,
  valores: Array<SqlCampoValor>
}

export interface SqlInsertSelect {
  tabla: string
  select: SqlSelect
}

export interface SqlUpdate {
  tabla: string
  valores: Array<SqlCampoValor>
  where?: Array<SqlWhere>
}

export interface SqlDelete {
  tabla: string
  where?: Array<SqlWhere>
}
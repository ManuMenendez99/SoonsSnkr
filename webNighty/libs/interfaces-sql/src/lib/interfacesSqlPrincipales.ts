import { SqlWhere, SqlFrom, SqlOrderBy } from './interfacesSqlSecundarias';
import { SqlCampoValor } from './interfacesSqlTerciarias';

export interface SqlInsert {
  tabla: string,
  valores: Array<SqlCampoValor>
}

export interface SqlInsertSelect {
  tabla: string
  select: string
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
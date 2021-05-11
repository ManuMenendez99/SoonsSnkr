import { SqlJoin } from './interfacesSqlTerciarias';

export interface SqlWhere {
  campo?: string;
  logico?: "=" | "<>" | ">" | "<" | "<=" | ">="
  valor?: any
  in?: Array<any>
  between?: Array<number>
  like?: Array<"_" | string | "porc">
  or?: boolean
  parentesis?: "(" | ")"
}

export interface SqlFrom {
  tabla: string
  alias: string
  tipoJoin: " inner join " | " right join " | " left join" | " full outer join "
  join: Array<SqlJoin>
}

export interface SqlOrderBy {
  campo: string,
  orden: " asc " | " desc "
}
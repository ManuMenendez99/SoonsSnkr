export interface SqlJoin {
  original: SqlCampoValor,
  enlace: SqlCampoValor
}

export interface SqlCampoValor {
  valor: string,
  campo: string
}
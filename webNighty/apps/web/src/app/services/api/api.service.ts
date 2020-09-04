import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SqlSelect, SqlInsert, SqlInsertSelect, SqlUpdate } from "@nighty/interfaces-sql";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  API_URI = "http://localhost:3333/api/"

  get(data: SqlSelect) {
    return this.http.get(`${this.API_URI}/${JSON.stringify(data)}` )
  }

  post(data: SqlInsert) {
    return this.http.post(this.API_URI,data)
  }

  postSelect(data: SqlInsertSelect) {
    return this.http.post(`${this.API_URI}/select`,data)
  }

  put(data: SqlUpdate) {
    return this.http.put(`${this.API_URI}`,data)
  }

  upload(usuario: number, file: File) {
    return this.http.post(`${this.API_URI}/upload/${usuario}`,file)
  }

  download(codigo: string) {
    this.http.get(`${this.API_URI}/download/${codigo}`)
  }

}

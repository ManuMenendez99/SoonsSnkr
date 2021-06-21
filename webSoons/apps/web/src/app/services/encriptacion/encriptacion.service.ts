import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import keys from '../../../../../../libs/keys/keys'
@Injectable({
  providedIn: 'root'
})
export class EncriptacionService {

  constructor() { }

  Encriptacion(value: any): string {
    const clave = keys.database.encriptacion;
    const key = CryptoJS.enc.Utf8.parse(clave);
    const iv = CryptoJS.enc.Utf8.parse(clave);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(String(value)), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CTRGladman,
        padding: CryptoJS.pad.Pkcs7
      });
    let encriptacion = encrypted.toString();
    while (encriptacion.indexOf("=") !== -1) {
      encriptacion = encriptacion.replace("=", "")
    }

    return encriptacion.toString()
  }
}

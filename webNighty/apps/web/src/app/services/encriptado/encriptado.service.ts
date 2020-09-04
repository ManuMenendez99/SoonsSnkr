import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncriptadoService {

  private key: 'uh9pft6cr5f75o7u#@@|@@€1t4t134tt134|@**^15234523mñmñmñlkmkljkljsdgfñljksdfñglksjdfñljLKJLÑJÑLKJGDÑLKJGÑLKSJDGÑLSDKJGÑIjiojo26+2566516156198191'
  constructor() {
  }
  encriptar(value: any) {
    const key = CryptoJS.enc.Utf8.parse(this.key);
    const iv = CryptoJS.enc.Utf8.parse(this.key);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
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

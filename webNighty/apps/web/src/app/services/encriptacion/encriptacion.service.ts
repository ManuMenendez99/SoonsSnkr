import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncriptacionService {

  constructor() { }

  Encriptacion(value: any): string {
    const clave = 'Ve!E=-$wEUySz8Fh4$t32$6GR#G25h?c?pyhcu!9j4Gah^!n#4#mYUW?z6e9t#PYPH4+qq_2%nHbydh#f?5C!byNVQqECUPAxPn$zV8q9ywm#2QBk5ZGpxH$ezr&XfR7dYn69hsX6-EZrxKqVyQXxQ4J3?JTUdxz_k@YE7qSQJH_D@SXYaU32PTU+DVn8EJxPDsHZgB4+2a_q7Ntm$L^+D@Ep=A+Srj!+yfc$vBVYFcx27fEur9Fb&NNTN6zBhRGCYH9_$WBahY$AMH3dHr2k!bne@2eP@hPAsC8_Kvjna2er!byyxXPEdyaC#jzvrv_Lkm6%PL!9ytgCXS3+9xzQ+YW4auMCH2gWc%DdP&h$f2k-*sUDLmTccC5VmPjdh77T!cgZFVP6zEwDQxryZ9Xs&cZ62wxVWuUBNEf$E4sX@RAM*4KaRgvn+5eC9PFqMus82C_8zg#dYHa*6_e!5DSZPPy@bt^Q!%_ZyQtKN6US?!!?Juzq&F=+6ZznsdTLjfycArU=@$S-m=MzWMRkPFBp%yWY4errr5Qy#vFcSj^SW6twknX%&4uPP_r*J&t_PwjwK+^%+Bx!d!LyF#tC77aNPjYGNLcb4dEh8?W4_YNRcBPhEZ!2kYQVNh*bwyTvvGSWxv$xnYFsfjz3nA=phK_QLYMCFf8#6aSLeeFbMAahdm6G5C&KPsyHhga5J96CgYcZvLBY+5W^u6qr^8Pj!tPXKWevCzW4g=tt3zJ+Yz5H9?A%RxZB!E@R_D&4?ad^tpNK_+bt5Pbj6s2@^nTs6kVzdh8H3hR4tv5D7q3+BjLr@N?q8-aH$=CN22zE8TUQmFKv4rXRGFeV59ETR!bqwEp8P4ytbhWCZwrb-$VepVJA-dtR=y?6Wrv?mau%ydHQb8$NhYR2yEvtK_CFpZK#nv?JYTg$ecV-x#z%?r%YrhN=w#_HD#de!ye@Gu834d6c@Y9K+e9bBx@HzWZcEY#Nfn-!Ts8AQx4T&?2j2GzeV#dT9VE$RVs5P74zmBq3mETWN27Y2_3$@&+LWuAXGCQ__KWwBHXkjex3$htQTHbr^drf_pUeX=x??94H%L8B@SKGxKQUaG=uV8L@xdNAQDjf5ptF?ZfBT3q_CK#TDs55UFRG5S*P4FLaRz^r6uQ!zK4!kfGEhFQzd+Zq&#CZbf5Bd=vwkt6S4Phqxky2dJTXcWWKD=3WqW+PQL@xvZfKS&E-nQjrgK$$AsTpESt4X=VsgTXLFX%gUVWj?kGT@Hv9vtS8kqqmCYzZ$9ay-JE5Gcp^g=*5TVfMaPXn$t+y%WdcrmYEKJamW9ND6XufqfFnmnzJ@FGXxa4Dr_V^nw$tExGCPx49jqhbpLRVCxZTjC-M?r6gudWBS-fbxatY*MuQA-*-8Rx2gHcqnd5K%9^pHw%38kSCwyHa#yd4-qSc%WwkxCmuGRfMvd=Vdn!@pE@YBjxBeLZFx*58&kQS#@L+pd?nCMfbAWw3aYEz@NzhVN$b@?_m%c$$N$?8Gmbuw@z?^^evErEeSppeBZGtgXks+dL4MZfTKu3z*LF6&CP8FE!M=@Fgnsqqa-zp2DK67pjfbZ%KBZE-*qhh34UyUKk_2KXw6xEL92XDUbtBJ7U5_SbxTQbF$vYbHb3M7c4wBbeWnF%jnN7mha=bZkr69uMV$A$pP6a9Ze*FFyY8HC^4sUR3_WKmUGq!X?8wL%$HZVpaP%vLq&YTFy=Fdz56rZ_GMawyr5nW#C!7$p!w%jt7!BKd^HfTt-W!!k+P5KCQV3%H2P7sKQvNVFXMk_zxbZgSbZhTw%Y?by@gSj=TCtyynT$%*w-Xz9!&s2+jmNvpmGRy-M?HL@teyQVSA+@M*gdrkSa2ac7^qf8uBz6=QC!7=feErttSZ5ta-ENg2F!LYUVZ9mzk$*M%yGcgjSyDNebE$Nqt9MaatLf^8@$dp3vkJsUQZG?uW*RT=x5veS2qX56_wzckMc55AFB!te!PMAkReqfKHQXLzCy=HYwxa869c$-Hce#BWLSw^jEc5FFy^EfjuCNcAtYX-dd$*ah7Za!+wxmp%q-'
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

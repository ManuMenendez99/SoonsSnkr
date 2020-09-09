import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeteccionErrorService {

  constructor() { }

  detectarError(error: string) {
    switch (error) {
      case "auth/claims-too-large":
        return "La carga útil de la reclamación que se entregó a setCustomUserClaims() supera el tamaño máximo de 1,000 bytes."
        break;
      case "auth/email-already-exists":
        return "Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único"
        break;
      case "auth/id-token-expired":
        return "El token de ID de Firebase que se proporcionó está vencido."
        break;
      case "auth/id-token-revoked":
        return "Se revocó el token de ID de Firebase."
        break;
      case "auth/insufficient-permission":
        return "La credencial que se usó para inicializar el SDK de Admin no tiene permisos suficientes a fin de acceder al recurso de autenticación solicitado. Consulta cómo configurar un proyecto de Firebase para ver la documentación sobre cómo generar una credencial con los permisos apropiados y usarla en la autenticación de los SDK de Admin"
        break;
      case "auth/internal-error":
        return "El servidor de autenticación encontró un error inesperado cuando se intentaba procesar la solicitud. Para obtener información adicional, revisa la respuesta del servidor de autenticación, que debería estar incluida en el mensaje de error. Si el error persiste, avísanos mediante nuestro canal de asistencia de informe de errores"
        break;
      case "auth/invalid-argument":
        return "Se proporcionó un argumento no válido para un método de autenticación. El mensaje de error debe incluir información adicional"
        break;
      case "auth/invalid-claims":
        return "Los atributos personalizados del reclamo que se entregaron a setCustomUserClaims() no son válidos."
        break;
      case "auth/invalid-continue":
        return "La URL de continuación debe ser una string de URL válida."
        break;
      case "auth/invalid-creation":
        return "La hora de creación debe ser una string de fecha en formato UTC válida."
        break;
      case "auth/invalid-credential":
        return "La credencial que se usa en la autenticación de los SDK de Admin no se puede emplear para realizar la acción deseada. Algunos métodos de autenticación, como createCustomToken() y verifyIdToken(), requieren que los SDK se inicialicen con una credencial de certificado en lugar de un token de actualización o una credencial predeterminada de la aplicación. Consulta Inicializa el SDK para ver documentación sobre cómo autenticar el SDK de Admin con una credencial de certificado"
        break;
      case "auth/invalid-disabled-field":
        return "El valor que se proporcionó para la propiedad del usuario disabled no es válido. Debe ser un booleano"
        break;
      case "auth/invalid-display-name":
        return "El valor que se proporcionó para la propiedad del usuario displayName no es válido. Debe ser una string que no esté vacía"
        break;
      case "auth/invalid-dynamic-link-domain":
        return "El dominio del vínculo dinámico proporcionado no se configuró o no se autorizó para el proyecto actual."
        break;
      case "auth/invalid-email":
        return "El valor que se proporcionó para la propiedad del usuario email no es válido. Debe ser una dirección de correo electrónico de string"
        break;
      case "auth/invalid-email-verified":
        return "El valor que se proporcionó para la propiedad del usuario emailVerified no es válido. Debe ser un booleano"
        break;
      case "auth/invalid-hash-algorithm":
        return "El algoritmo de hash debe coincidir con las strings de la lista de algoritmos compatibles."
        break;
      case "auth/invalid-hash-bloc":
        return "El tamaño del conjunto de hash debe ser un número válido."
        break;
      case "auth/invalid-hash-derived-ke":
        return "La longitud de la clave derivada de hash debe ser un número válido."
        break;
      case "auth/invalid-has":
        return "La clave de hash debe ser un búfer de bytes válido."
        break;
      case "auth/invalid-hash-memor":
        return "El costo de la memoria de hash debe ser un número válido."
        break;
      case "auth/invalid-has":
        return "La paralelización de hash debe ser un número válido."
        break;
      case "auth/invalid-has":
        return "Las rondas de hash deben ser un número válido."
        break;
      case "auth/invalid-hash-sal":
        return "El campo del separador de sal del algoritmo de hash debe ser un búfer de bytes válido."
        break;
      case "auth/invalid-id-token":
        return "El token de ID que se proporcionó no es un token de ID de Firebase válido."
        break;
      case "auth/invalid-last-sign-i":
        return "La hora del último acceso debe ser una string de fecha en formato UTC válida."
        break;
      case "auth/invalid-page-token":
        return "El token de página siguiente que se entregó en listUsers() no es válido. Debe ser una string válida que no esté vacía"
        break;
      case "auth/invalid-password":
        return "El valor que se proporcionó para la propiedad del usuario password no es válido. Debe ser una string con al menos seis caracteres"
        break;
      case "auth/invalid-password-hash":
        return "El hash de contraseñas debe ser un búfer de bytes válidos."
        break;
      case "auth/invalid-password-salt":
        return "La contraseña con sal debe ser un búfer de bytes válido."
        break;
      case "auth/invalid-phone-number":
        return "El valor que se proporcionó para phoneNumber no es válido. Debe ser una string de identificador que no esté vacía y que cumpla con el estándar E.164"
        break;
      case "auth/invalid-photo-url":
        return "El valor que se proporcionó para la propiedad del usuario photoURL no es válido. Debe ser una URL de string"
        break;
      case "auth/invalid-provider":
        return "providerData debe ser una serie de objetos UserInfo."
        break;
      case "auth/invalid-provider":
        return "providerId debe ser una string del identificador del proveedor compatible válida."
        break;
      case "auth/invalid-session-cookie-duration":
        return "La duración de las cookies de la sesión debe ser un número válido en milisegundos que vaya entre los 5 minutos y las 2 semanas."
        break;
      case "auth/invalid-uid":
        return "El uid proporcionado debe ser una string no vacía con un máximo de 128 caracteres."
        break;
      case "auth/invalid-use":
        return "El registro de usuarios para importar no es válido."
        break;
      case "auth/maximum-user-count":
        return "Se excedió la cantidad máxima de usuarios permitidos para importar."
        break;
      case "auth/missing-android-pk":
        return "Si es obligatorio instalar la app para Android, debe proporcionarse un nombre de paquete de Android."
        break;
      case "auth/missing-continu":
        return "Se debe proporcionar una URL de continuación válida en la solicitud."
        break;
      case "auth/missing-has":
        return "Para importar usuarios con hash de contraseñas, es necesario proporcionar el algoritmo de hash y sus parámetros."
        break;
      case "auth/missing-ios-bundle":
        return "La solicitud debe contener un ID del paquete de iOS."
        break;
      case "auth/missing-uid":
        return "Se requiere un identificador uid para la operación actual."
        break;
      case "auth/operation-not-allowed":
        return "El proveedor de acceso proporcionado está inhabilitado para tu proyecto de Firebase. Habilítalo en la sección Método de acceso de Firebase console"
        break;
      case "auth/phone-number-already-exists":
        return "Otro usuario ya utiliza el phoneNumber proporcionado. Cada usuario debe tener un phoneNumber único"
        break;
      case "auth/project-not-found":
        return "No se encontró ningún proyecto de Firebase correspondiente a la credencial que se usó para inicializar los SDK de administrador. Consulta cómo configurar un proyecto de Firebase para ver la documentación sobre cómo generar una credencial para tu proyecto y usarla en la autenticación de los SDK de Admin"
        break;
      case "auth/reserved-claims":
        return "Uno o más de los reclamos personalizados de usuarios que se entregaron a setCustomUserClaims() están reservados. Por ejemplo, no deben usarse reclamos específicos de OIDC (p. ej., sub, iat, iss, exp, aud o auth_time) como claves para reclamos personalizados"
        break;
      case "auth/session-cookie-expired":
        return "La cookie proporcionada de la sesión de Firebase venció."
        break;
      case "auth/session-cookie-revoked":
        return "Se revocaron las cookies de la sesión de Firebase."
        break;
      case "auth/uid-already-exists":
        return "Otro usuario ya utiliza el uid proporcionado. Cada usuario debe tener un uid único"
        break;
      case "auth/unauthorized-continue-uri":
        return "El dominio de la URL de continuación no está en la lista blanca. Inclúyelo en la lista en Firebase console"
        break;
      case "auth/user-not-found":
        return "No existe ningún registro de usuario que corresponda al identificador proporcionado."
        break;

      default:
        console.log(error)
        return "Error no controlado"
        break;
    }
  }
}

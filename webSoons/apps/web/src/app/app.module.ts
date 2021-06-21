import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/layers/navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundError404Component } from './components/page-not-found-error404/page-not-found-error404.component';
import { RoutingModule } from './modules/angular/routing/routing.module';
import { FooterComponent } from './components/layers/footer/footer.component';
import { LgpdComponent } from './components/layers/lgpd/lgpd.component';
import { FirstLetterCapPipe } from './pipes/first-letter-caps.pipe';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyC3mRLxEZPZmnv7Wifg67y4k934_C5vn0M",
  authDomain: "soons-snkr.firebaseapp.com",
  databaseURL: "https://Soons-cloud.firebaseio.com",
  projectId: "soons-snkr",
  storageBucket: "soons-snkr.appspot.com",
  messagingSenderId: "735759197784",
  appId: "1:735759197784:web:ce404019f1b771a27f8c2d",
  measurementId: "G-VNSH6KY12G"
}

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/app';

firebase.initializeApp(config)

import { MaterialModule } from './modules/angular/material/material.module';
import { LoginComponent } from './components/dialogs/usuario/sesion/login/login.component';
import { RegisterComponent } from './components/dialogs/usuario/sesion/register/register.component';
import { LogoutComponent } from './components/dialogs/usuario/sesion/logout/logout.component';
import { ToastrModule } from 'ngx-toastr';
import { PostRegistroComponent } from './components/dialogs/usuario/sesion/post-registro/post-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupsModule } from '@Soons/form-group';
import { InfiniteLoaderComponent } from './components/layers/infinite-loader/infinite-loader.component';
import { LGPDComponent } from './components/bottoms/lgpd/lgpd.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { PopupMessageComponent } from './components/bottoms/popup-message/popup-message.component';
import { ChatComponent } from './components/chat/chat.component';
import { UsuariosComponent } from './components/chat/usuarios/usuarios.component';
import { MensajesComponent } from './components/chat/mensajes/mensajes.component';
import { CommonModule } from '@angular/common';
import { CambiarAEmpresaComponent } from './components/dialogs/usuario/cambiar-aempresa/cambiar-aempresa.component';
import { UserInfoComponent } from './components/dialogs/usuario/user-info/user-info.component';
import { NgxPayPalModule } from "ngx-paypal";
import { CrearGrupoComponent } from './components/dialogs/chat/crear-grupo/crear-grupo.component';
import { CondicionarMensajeriaComponent } from './components/bottoms/condicionar-mensajeria/condicionar-mensajeria.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ConfiguracionMarcasComponent } from './components/configuracion-marcas/configuracion-marcas.component';
import { ContactaConNosotrosComponent } from './components/contacta-con-nosotros/contacta-con-nosotros.component';
import { ForgotPasswordComponent } from './components/bottoms/forgot-password/forgot-password.component';
import { CrearMarcaComponent } from './components/bottoms/crear-marca/crear-marca.component';
import { ProductosClienteComponent } from './components/productos/productos-cliente/productos-cliente.component';
import { ProductosAdministradorComponent } from './components/productos/productos-administrador/productos-administrador.component';
import { SubirProductoComponent } from './components/dialogs/subir-producto/subir-producto.component';
import { CrearProductoComponent } from './components/dialogs/crear-producto/crear-producto.component';
import { CambiarStockComponent } from './components/bottoms/cambiar-stock/cambiar-stock.component';
import { ComprarProductoComponent } from './components/dialogs/comprar-producto/comprar-producto.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, NavbarComponent, WelcomeComponent, PageNotFoundError404Component, FooterComponent, LgpdComponent, FirstLetterCapPipe, LoginComponent, RegisterComponent, LogoutComponent, PostRegistroComponent, InfiniteLoaderComponent, LGPDComponent, DragDropDirective, PopupMessageComponent, ChatComponent, UsuariosComponent, MensajesComponent, CambiarAEmpresaComponent, UserInfoComponent, CrearGrupoComponent, CondicionarMensajeriaComponent, ProductosComponent, ConfiguracionMarcasComponent, ContactaConNosotrosComponent, ForgotPasswordComponent, CrearMarcaComponent, ProductosClienteComponent, ProductosAdministradorComponent, SubirProductoComponent, CrearProductoComponent, CambiarStockComponent, ComprarProductoComponent],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    NgxPayPalModule,
    ReactiveFormsModule,
    RoutingModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: "es",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [FormGroupsModule],
  bootstrap: [AppComponent],
})
export class AppModule { }

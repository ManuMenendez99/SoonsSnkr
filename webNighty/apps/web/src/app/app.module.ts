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
  apiKey: "AIzaSyAGGhvTiWhT2UPQ0uISgpumCpDEacRmfOA",
  authDomain: "nighty-cloud.firebaseapp.com",
  databaseURL: "https://nighty-cloud.firebaseio.com",
  projectId: "nighty-cloud",
  storageBucket: "nighty-cloud.appspot.com",
  messagingSenderId: "496549683317",
  appId: "1:496549683317:web:baa0b6ab8e0634b3a1583c",
  measurementId: "G-9Z1BP142VG"
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
import { FormGroupsModule } from '@nighty/form-group';
import { InfiniteLoaderComponent } from './components/layers/infinite-loader/infinite-loader.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, NavbarComponent, WelcomeComponent, PageNotFoundError404Component, FooterComponent, LgpdComponent, FirstLetterCapPipe, LoginComponent, RegisterComponent, LogoutComponent, PostRegistroComponent, InfiniteLoaderComponent],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
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

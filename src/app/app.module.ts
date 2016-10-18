import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as firebase from 'firebase';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing'
import {CKEditorModule} from 'ng2-ckeditor';

export const firebaseConfig = {
    apiKey: "AIzaSyDSzolJxhikyA4mP5W4-YvUitlS1kxQDPg",
    authDomain: "indigo-fa29a.firebaseapp.com",
    databaseURL: "https://indigo-fa29a.firebaseio.com",
    storageBucket: "indigo-fa29a.appspot.com",
    messagingSenderId: "637180864709"
  };

export const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CKEditorModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

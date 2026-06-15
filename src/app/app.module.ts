import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { XssComponent } from './xss/xss.component';
import { DomXssComponent } from './dom-xss/dom-xss.component';
import { TokenComponent } from './token/token.component';
import { OpenRedirectComponent } from './open-redirect/open-redirect.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SecureImplementationsComponent } from './secure-implementations/secure-implementations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardActions, MatCardContent, MatCardHeader, MatCardModule } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    XssComponent,
    DomXssComponent,
    TokenComponent,
    OpenRedirectComponent,
    FileUploadComponent,
    SecureImplementationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardHeader,
    MatIcon,
    MatCardModule,
    MatCardContent,
    MatCardActions
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

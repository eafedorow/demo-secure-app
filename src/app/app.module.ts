import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { XssComponent } from './pages/xss/xss.component';
import { DomXssComponent } from './pages/dom-xss/dom-xss.component';
import { TokenComponent } from './pages/token/token.component';
import { OpenRedirectComponent } from './pages/open-redirect/open-redirect.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { SecureImplementationsComponent } from './pages/secure-implementations/secure-implementations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardActions, MatCardContent, MatCardHeader, MatCardModule } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import {MatList, MatListItem, MatNavList} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {FormsModule} from "@angular/forms";
import {MatToolbar} from "@angular/material/toolbar";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MainComponent} from "./pages/main/main.component";
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenav,
  MatSidenavContainer
} from "@angular/material/sidenav";
import {MatFormField, MatInputModule, MatLabel} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    XssComponent,
    DomXssComponent,
    TokenComponent,
    OpenRedirectComponent,
    FileUploadComponent,
    SecureImplementationsComponent,
    MainComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardHeader,
    MatIcon,
    MatCardModule,
    MatCardContent,
    MatCardActions,
    MatList,
    MatListItem,
    MatDivider,
    FormsModule,
    MatToolbar,
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatDrawerContent,
    MatDrawer,
    MatDrawerContainer,
    MatLabel,
    MatFormField,
    MatSlideToggle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XssComponent } from "./pages/xss/xss.component";
import {MainComponent} from "./pages/main/main.component";
import {BrokenAccessControlComponent} from "./pages/broken-access-control/broken-access-control.component";
import {JwtStorageComponent} from "./pages/jwt-storage/jwt-storage.component";
import {OpenRedirectComponent} from "./pages/open-redirect/open-redirect.component";
import {InsecureFileUploadComponent} from "./pages/insecure-file-upload/insecure-file-upload.component";
import {SecurityMisconfigurationComponent} from "./pages/security-misconfiguration/security-misconfiguration.component";
import {ChecklistComponent} from "./pages/checklist/checklist.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'xss',
    component: XssComponent
  },
  {
    path: 'jwt-storage',
    component: JwtStorageComponent
  },
  {
    path: 'bac',
    component: BrokenAccessControlComponent
  },
  {
    path: 'open-redirect',
    component: OpenRedirectComponent
  },
  {
    path: 'insecure-file-upload',
    component: InsecureFileUploadComponent
  },
  {
    path: 'security-misconfig',
    component: SecurityMisconfigurationComponent
  },
  {
    path: 'checklist',
    component: ChecklistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

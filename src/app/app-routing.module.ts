import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XssComponent } from "./pages/xss/xss.component";
import {MainComponent} from "./pages/main/main.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

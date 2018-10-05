import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DeviseComponent } from './devise/devise.component';
const routes: Routes = [
  {
    path: '',
    component: AuthentificationComponent
  },
  {
    path: 'devise',
    component: DeviseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

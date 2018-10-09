import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DeviseComponent } from './devise/devise.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ListeComptesClientsComponent } from './liste-comptes-clients/liste-comptes-clients.component';
import { DemandeOuvertureDeCompteComponent } from './demande-ouverture-de-compte/demande-ouverture-de-compte.component';
import { TestFormulaireComponent } from './test-formulaire/test-formulaire.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'authentification',
    component: AuthentificationComponent
  },
  {
    path: 'devise',
    component: DeviseComponent
  },
  {
    path: 'conseiller/clients',
    component: ListeClientsComponent
  },
  {
    path: 'conseiller/comptes',
    component: ListeComptesClientsComponent
  },
  {
    path: 'conseiller/demandesOuvertureCompte',
    component: DemandeOuvertureDeCompteComponent
  },
  {
    path: 't',
    component: TestFormulaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

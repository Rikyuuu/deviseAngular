import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DeviseComponent } from './devise/devise.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListeComptesClientsComponent } from './liste-comptes-clients/liste-comptes-clients.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { DemandeOuvertureDeCompteComponent } from './demande-ouverture-de-compte/demande-ouverture-de-compte.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestFormulaireComponent } from './test-formulaire/test-formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    DeviseComponent,
    AccueilComponent,
    SidebarComponent,
    ListeComptesClientsComponent,
    ListeClientsComponent,
    DemandeOuvertureDeCompteComponent,
    TestFormulaireComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { DemandeOuvertureCompteService } from '../demande-ouverture-compte.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-demande-ouverture-de-compte',
  templateUrl: './demande-ouverture-de-compte.component.html',
  styleUrls: ['./demande-ouverture-de-compte.component.scss']
})
export class DemandeOuvertureDeCompteComponent implements OnInit {

  demandes: Object;
  
  //demandes.id_demande = new FormControl('');
  
  constructor(private demandeOuvertureCompte: DemandeOuvertureCompteService) { }
  
  ngOnInit() {
    console.warn(this.demandeOuvertureCompte.getDemandesOuvertureCompte().subscribe(
      demandeOuvertureCompte => this.demandes = demandeOuvertureCompte 
      ));

    }
    
  public getDemandes(d) {
    //let id=1; // temporaire 
    console.log(d.id_demande);
    let etat = false;

    let demandeOuvertureCompteServiceInstance = new DemandeOuvertureCompteService(this.http)
    this.demandeOuvertureCompte.validerOuvertureCompte(d.id_demande, etat) {
      

    }

  }
    
}

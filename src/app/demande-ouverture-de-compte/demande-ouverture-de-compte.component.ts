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

  profileForm = new FormGroup({
    customCheck: new FormControl('')
  });
  playerName: string;

  constructor(private demandeOuvertureCompte: DemandeOuvertureCompteService) { }

  ngOnInit() {
    this.demandeOuvertureCompte.getDemandesOuvertureCompte().subscribe(
      demandeOuvertureCompte => this.demandes = demandeOuvertureCompte 
    );
  }

  getVerificationCheckboxValidation(form: NgForm) {
	console.log(form.value.test);
	console.log(this.profileForm.value);
	console.log("test");
	console.log(this.playerName);
	return this.playerName;
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}

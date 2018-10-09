import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeOuvertureCompteService {

  private url: string = "http://localhost:8080/NOMDUPROJETFINAL/METHODEAUTHENTIFICATION/...";
  
  constructor(private http: HttpClient) { }

  getDemandesOuvertureCompte() {
    return this.http.get('http://localhost:4200/assets/demandesOuvertureCompte.json');
  }

  // Pour envoyer en POST les infos au format JSON afin de permettre au back-end d'effectuer la validation des comptes
  validerOuvertureCompte(id: number, date: Date, etat: string, client: Object) {
      
    let data = {
      "id" : id,
      "date" : date,
      "etat": etat,
      "client": client
    }
  
    return this.http.post(this.url, data).subscribe(
      (res:Response) => res.json()
    );
  }
}
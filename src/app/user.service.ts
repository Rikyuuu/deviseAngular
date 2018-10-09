import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  res: any;
  constructor(private http: HttpClient) { }

  getUsers() {
    this.res = this.http.get('http://localhost:4200/assets/test.json');
    console.log('Fichier test.json :');
    console.log(this.res);
    return this.http.get('http://localhost:4200/assets/test.json');
  }

  getClients() {
    return this.http.get('http://localhost:4200/assets/listeClients.json');
  }

  getComptes() {
    return this.http.get('http://localhost:4200/assets/listeComptes.json');
  }
}

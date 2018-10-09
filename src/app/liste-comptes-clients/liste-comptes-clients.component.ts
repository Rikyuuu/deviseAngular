import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-liste-comptes-clients',
  templateUrl: './liste-comptes-clients.component.html',
  styleUrls: ['./liste-comptes-clients.component.scss']
})
export class ListeComptesClientsComponent implements OnInit {

  comptes: Object;

  CRE: string = "CRE";
  CDE: string = "CDE";

  isValid: boolean = true;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getComptes().subscribe(
      user => this.comptes = user 
    );
  }

}

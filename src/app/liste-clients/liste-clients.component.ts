import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {

  clients$: Object;
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getClients().subscribe(
      user => this.clients$ = user 
    );
  }

}

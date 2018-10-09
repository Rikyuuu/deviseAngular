import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  users$: Object;
  
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getUsers().subscribe(
      user => this.users$ = user 
    );
  }
}

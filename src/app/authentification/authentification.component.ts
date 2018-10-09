import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  users$: Object;
  
  constructor(private data: UserService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
  }

}

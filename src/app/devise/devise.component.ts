import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../devise.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.scss']
})
export class DeviseComponent implements OnInit {

  objDevise: Object;
  
  constructor(private devise: DeviseService) { }

  ngOnInit() {
    this.devise.getDevise().subscribe(
      devise => this.objDevise = devise
    );
  }

}

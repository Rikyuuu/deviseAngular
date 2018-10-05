import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(private http: HttpClient) { }

  getDevise() {
    /*
    this.res  = this.http.get('https://www.tekool.net/js_gateway.php?EuroConverter&getList');
    console.log(this.res);
    return JSON.parse('');
    */
    /*
    this.http.get('http://free.currencyconverterapi.com/api/v5/convert?q=EUR_USD&compact=y')
    .subscribe(data => console.log(data));
    */
    return this.http.get('http://free.currencyconverterapi.com/api/v5/convert?q=EUR_USD&compact=y');
  }
}

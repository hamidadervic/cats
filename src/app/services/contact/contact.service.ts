import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ContactService {

  constructor( private _http: Http) { }

  sendContactDetails(name,email,message) {
  	  let body = 'name=' + name + '&email=' + email + '&message=' + message  ;
  	  let headers = new Headers();
  	  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  	  this._http.post('http://localhost/angulartemp/php/contact.php', body, { headers: headers})
  	      .subscribe(data => console.log(data));
  }

}

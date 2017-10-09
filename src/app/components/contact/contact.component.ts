import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})

export class ContactComponent implements OnInit {
 
  constructor(private _httpService: ContactService) { }

  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

  //Errors
  invalidName: string = 'Invalid name';
  invalidEmail: string = 'Checking your e-mail adress...';
  invalidMessage: string = 'Invalid message';

  //Validate
  reg = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  send() {

     if ( !this.reg.test(this.email) ) {
     	this.invalidEmail = 'Invalid e-mail adress';
     } else {
     	this.invalidEmail = '';
     }
     if ( this.name != '' && this.reg.test(this.email) && this.message != '' ) {
     	  this._httpService.sendContactDetails(this.name,this.email,this.message);
     	  this.submitted = true;
     }
     
  }


  ngOnInit() {

  }

}

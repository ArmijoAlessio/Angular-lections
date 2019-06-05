import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utente } from '../Utente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loggedUser : Utente;
  @Input() lista : Utente[];
  @Output() userLogin = new EventEmitter<Utente>();
  failed : boolean = false;
  formLog : FormGroup;
  constructor(fb : FormBuilder) { 
    this.formLog = fb.group(
      {
        email : ['', [Validators.required, Validators.email]],
        password : ['', Validators.required]
      }
    )
  }
  login()
  {
    for(let i = 0; i < this.lista.length; i++)
    {
      if(this.formLog.controls['email'].value == this.lista[i].email &&
        this.formLog.controls['password'].value == this.lista[i].psw)
      {
        this.loggedUser = this.lista[i];
        this.userLogin.emit(this.loggedUser);
        console.log(this.loggedUser);
        break;
      }
    }
    this.failed = this.loggedUser == null;
  
  }
  ngOnInit() {
  }

}
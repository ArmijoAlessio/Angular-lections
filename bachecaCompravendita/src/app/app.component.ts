import { Component } from '@angular/core';
import { Utente } from './Utente';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bachecaCompravendita';
   utenti : Utente[];
   myForm: FormGroup;
 constructor(fb: FormBuilder) {
   this.utenti = new Array<Utente>();
   this.myForm = fb.group({
     'nome': ['', Validators.required],
     'cognome': ['', Validators.required],
     'email': ['', Validators.required],
     'psw': ['', Validators.required]
     
     
   });
 }
 ngOnInit() {
 }

 onSubmit(value: string): void {
    let utente: Utente = new Utente();
    utente.nome =  this.myForm.controls['nome'].value;
    utente.cognome = this.myForm.controls['cognome'].value;
   
    utente.email = this.myForm.controls['email'].value;
    utente.psw = this.myForm.controls['psw'].value;
   

    this.utenti.push(utente);
 }

}

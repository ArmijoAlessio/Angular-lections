import { Component } from '@angular/core';
import { Utente } from './Utente';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { utenti } from './mock-utenti';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bachecaCompravendita';
   ut = utenti;
   myForm: FormGroup;
 constructor(fb: FormBuilder) {
   
   this.myForm = fb.group({
     'nome': ['', Validators.required],
     'cognome': ['', Validators.required],
     'email': ['', [Validators.required , Validators.email]],
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
   

    this.ut.push(utente);
 }

}

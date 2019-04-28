import { Component } from '@angular/core';
import { Appuntamento } from './Appuntamento';
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
   appuntamenti : Appuntamento[];
   appuntamentoSelezionato: Appuntamento;
   myForm: FormGroup; //Dichiara una variabile di tipo FormGroup
  
  constructor(fb: FormBuilder) { //Il costruttore riceve come parametro il From Builder
    this.appuntamenti = new Array<Appuntamento>();
    /*Diciamo al FormBuilder di creare un FormGroup che conterrà un FormControl
     *Chiamato sku, con valore di default ABC123 */
    this.myForm = fb.group({
      'nome': ['Peter', Validators.required], 
      'cognome': ['Parker', Validators.required],
      'indirizzo': ['Via esempio 12', Validators.required],
      'telefono': ['1234567890', Validators.required],
      'email': ['esempio@mail.it', Validators.required],
      'data': ['01/01/2019', Validators.required],
      'ora': ['00:00', Validators.required]
    });
  }
  
  onSelect(appuntamento: Appuntamento): void {
    this.appuntamentoSelezionato = appuntamento;
  }
  
  onSubmit(): void {

    
     let appuntamento: Appuntamento = new Appuntamento();
    appuntamento.nome =  this.myForm.controls['nome'].value;
    appuntamento.cognome = this.myForm.controls['cognome'].value;
    appuntamento.indirizzo = this.myForm.controls['indirizzo'].value;
    appuntamento.telefono = this.myForm.controls['telefono'].value;
    appuntamento.email = this.myForm.controls['email'].value;
    appuntamento.data = this.myForm.controls['data'].value;
    appuntamento.ora = this.myForm.controls['ora'].value;

    this.appuntamenti.push(appuntamento);
    
  }
}

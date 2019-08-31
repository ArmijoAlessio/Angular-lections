import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Object } from '../Object';
import { oggetti } from '../mock-objects';
import { Utente } from '../Utente';

@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {
@Input() loggedUser : Utente;
 @Input() o: Object;

  oggettiForm: FormGroup;
  oggetto : Object[] = oggetti;

 constructor(fb: FormBuilder) {
   this.oggettiForm = fb.group({
     'oggetto': ['',Validators.required],
     'descrizione': ['', Validators.required],
     'prezzo': ['', Validators.required],
     'link': ['',Validators.required]
   });

}
 onSubmit(value: string): void {
    console.log('oggetto: ', this.oggettiForm.controls['oggetto'].value );
    console.log('descrizione: ', this.oggettiForm.controls['descrizione'].value );
    console.log('prezzo: ', this.oggettiForm.controls['prezzo'].value);
    console.log('link: ', this.oggettiForm.controls['link'].value);
    this.onAdd();
  }
  onAdd(){
    let og : Object = new Object();
    og.username = this.loggedUser.nome;
    og.oggetto = this.oggettiForm.controls['oggetto'].value;
    og.descrizione = this.oggettiForm.controls['descrizione'].value;
    og.prezzo = this.oggettiForm.controls['prezzo'].value;
    og.link = this.oggettiForm.controls['link'].value;
    this.oggetto.push(og);
    console.log("Aggiunto");

  }
  ngOnInit() {
  }

}
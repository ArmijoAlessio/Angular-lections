import { Component, OnInit, Input } from '@angular/core';

import {Annunci} from '../mock-annunci';
import {Annuncio} from '../Annuncio';
import {Utente} from '../Utente'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bacheca-commenti',
  templateUrl: './bacheca-commenti.component.html',
  styleUrls: ['./bacheca-commenti.component.css']
})
export class BachecaCommentiComponent implements OnInit {

  @Input() loggedUser : Utente;
  com : FormGroup;
  postFormShow: Boolean = false;
  Ann : Annuncio[] = Annunci;
  constructor(fb : FormBuilder) {
    this.com = fb.group(
      {
        prodotto: ['', Validators.required],
        descrizione: ['', Validators.required],
        commento: ['', Validators.required]
      }
    )
  }
  addAnnuncio()
  {
    
    
     let u : Annuncio = new Annuncio();
     u.nome =  this.loggedUser.nome;
    u.cognome =this.loggedUser.cognome;
   
    u.prodotto = this.com.controls['prodotto'].value;
    u.descrizione = this.com.controls['descrizione'].value;
    u.commento =  this.com.controls['commento'].value;
    
    
      this.Ann.push(u);
    
  }
    triggerNewPostForm()
  {
      this.postFormShow = !this.postFormShow;
  }
 
  ngOnInit() {
  }

}
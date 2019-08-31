import { Component, OnInit, Input } from '@angular/core';
import { ObjectUtente } from '../ObjectUtente';
import { oggUtenti } from '../mock-ObUtenti';
import { Utente } from '../Utente';

@Component({
  selector: 'app-user-objects',
  templateUrl: './user-objects.component.html',
  styleUrls: ['./user-objects.component.css']
})
export class UserObjectsComponent implements OnInit {
  @Input() loggedUser : Utente;
  oggettoUtente : ObjectUtente[] = oggUtenti;
  oggettoV = [];
  j = 0;
  constructor() {

   }
  onContr(){
    for(let i=0; i<this.oggettoUtente.length; i++){
        if(this.oggettoUtente[i].proprietario == this.loggedUser.nome){
            this.oggettoV[this.j] = this.oggettoUtente[i].nomeOggetto;
            console.log(this.oggettoV[i]);
            this.j++;
        }
    }
  }
 ngOnInit() {
  }

}
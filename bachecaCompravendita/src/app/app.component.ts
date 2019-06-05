import { Component } from '@angular/core';
import { Utente } from './Utente';

import { utenti } from './mock-utenti';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bachecaCompravendita';
   ut : Utente[] = utenti;
    loggedUser: Utente = null;
  showLogin : Boolean = false;
  showReg : Boolean = false;
  constructor()
  {

  }
  triggerReg()
  {
    this.showReg = !this.showReg;
    this.showLogin = false;
  }
  triggerLogin()
  {
    this.showLogin = !this.showLogin;
    this.showReg = false;
  }
  logout()
  {
    this.loggedUser = null;
  }
  setUtenteLoggato(u : Utente)
  {
    this.loggedUser = u;
  }
  stampaUtenteLoggato()
  {
    console.log(this.loggedUser);
  }
  

}

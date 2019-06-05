import { Component, OnInit, Input } from '@angular/core';
import { Utente } from '../Utente';
@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {
 @Input() lista : Utente[];
  constructor() { }

  ngOnInit() {
  }

}

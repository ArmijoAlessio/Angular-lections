import { Component, OnInit } from '@angular/core';
import { Object } from '../Object';
import { oggetti } from '../mock-objects';
import { ObjectUtente } from '../ObjectUtente';
import { oggUtenti } from '../mock-ObUtenti';
import { OggettiSito } from '../oggettiSito';

@Component({
  selector: 'app-objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.css']
})
export class ObjectsListComponent implements OnInit {
 oggetto : Object[] = oggetti;
  oggettoUtente : ObjectUtente[] = oggUtenti;
 
  constructor() { }
  
    
  ngOnInit() {
  }

}
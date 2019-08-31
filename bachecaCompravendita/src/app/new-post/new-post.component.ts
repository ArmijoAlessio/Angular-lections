import { Component, OnInit, Input } from '@angular/core';
import { oggetti } from '../mock-objects';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Utente } from '../Utente';
import { Object } from '../Object';
import { Post } from '../Post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
 @Input() loggedUser : Utente;
 oggetto : Object[] = oggetti;
scelta:string;
utente : string;
selectedOggetto:string;
commento:string;
post : Post[];
 postForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.postForm = fb.group({
     'commento': ['']
     });
  }


onSubmit(value: string): void {
    console.log('commento: ', this.postForm.controls['commento'].value);
    this.print();
 }
print(){
    this.utente = this.loggedUser.nome;
    this.scelta = this.selectedOggetto;
    this.commento = this.postForm.controls['commento'].value;
}

  ngOnInit() {
  }

}
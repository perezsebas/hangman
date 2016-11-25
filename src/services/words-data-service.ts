import { WordModel } from '../models/words-model';
import { Words } from '../data/words';
import { LetterModel } from '../models/letter-model';
import { Letters } from '../data/letters';
import { Injectable, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Rx';


@Injectable()
export class WordsDataService {

  constructor(
    private http: Http
  ) {}

  getWord(){
    return Words[Math.floor(Math.random() * Words.length)];
  }

  getLetters(){
    //return Letters;
    //return this.http.get('data/letters.json')
    //return this.http.get('../../server/getUsers')
    return this.http.get('http://localhost:8181/getLetters')
      .map(response => <LetterModel[]>response.json().data);
  }

  setTry(guess, chosen){
    for (let i in Letters) {
      if (Letters[i].letter == guess) {
        Letters[i].chosen = chosen;
      }
    }
  }

  resetLetters(){
    for (let i in Letters) {
        Letters[i].chosen = false;
      }
  }

}

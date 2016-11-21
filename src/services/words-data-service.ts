import { WordModel } from '../models/words-model';
import { Words } from '../data/words';
import { LetterModel } from '../models/letter-model';
import { Letters } from '../data/letters';
import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable()
export class WordsDataService {

  getWord(){
    return Words[Math.floor(Math.random() * Words.length)];
  }

  getLetters(){
    return Letters;
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

import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../../services/player-data-service';
import { WordsDataService } from '../../services/words-data-service';
import { GuessLetter } from '../../pipes/guess-letter';
import { SecretWord } from '../../pipes/secret-word';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [ GuessLetter, SecretWord ]
})
export class GameComponent implements OnInit {
  public player;
  public word;
  public wordLetters;
  public guess;
  public letters;

  constructor(
    private playerDataService: PlayerDataService,
    private wordsDataService: WordsDataService,
    private pipe: GuessLetter,
    private secret: SecretWord,
  ) { }

  ngOnInit() {
    this.player = this.playerDataService.getPlayer();
    this.word = this.wordsDataService.getWord();
    this.letters = this.wordsDataService.getLetters();
    this.wordLetters = this.word.word.split(',');
    for (let i in this.word.word) {
        this.wordLetters[i] = {letter: this.word.word[i], chosen: false, none: " _ "};
    }
    //console.log(this.wordLetters);
  }

  try (guess) {
    this.wordsDataService.setTry(guess, true);
    this.guess = false;

    for (let i in this.word.word) {
        if (this.wordLetters[i].letter == guess){
          this.wordLetters[i].chosen = true;
          this.guess = true;
        }
    }

    if(!this.guess){
      this.playerDataService.setTry();
    }
  }
}

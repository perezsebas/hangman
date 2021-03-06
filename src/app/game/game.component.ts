import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../../services/player-data-service';
import { WordsDataService } from '../../services/words-data-service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public player;
  public word;
  public wordLetters;
  public guess;
  public roundToWin = 3;
  public letters;

  constructor(
    private playerDataService: PlayerDataService,
    private wordsDataService: WordsDataService
  ) { }

  ngOnInit() {
    this.initialize();
    //this.letters = this.wordsDataService.getLetters();
    this.wordsDataService.getLetters()
      .subscribe(letters => this.letters = letters);
  }

  try (guess) {
    this.wordsDataService.setTry(guess, true);
    this.guess = false;
    let notYet = true;

    for (let i in this.word.word) {
        if (this.wordLetters[i].letter == guess){
          this.wordLetters[i].chosen = true;
          this.guess = true;
        }
    }

    for (let i in this.word.word) {
        if (this.wordLetters[i].chosen == false){
          notYet = false;
        }

        if(notYet){
          this.player.won = true;
        }else{
          this.player.won = false;
        }
    }

    if(this.player.won){
      if(this.player.round == this.roundToWin){
        this.playerDataService.wonGame();
      }else{
        this.playerDataService.nextLevel();
        this.wordsDataService.resetLetters();
        this.initialize();
      }
    }

    if(!this.guess){
      this.playerDataService.setTry();
    }
  }

  initialize(){
    this.player = this.playerDataService.getPlayer();
    this.word = this.wordsDataService.getWord();
    this.wordLetters = this.word.word.split(',');
    for (let i in this.word.word) {
        this.wordLetters[i] = {letter: this.word.word[i], chosen: false};
    }
  }

}

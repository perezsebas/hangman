import { PlayerModel } from '../models/player-model';
import { Player } from '../data/player-data';
import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Injectable()
export class PlayerDataService {
  public router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  getPlayer(){
    return Player;
  }

  setPlayer(name){
    Player.name = name;
    Player.round = 1;
    Player.moves = 5,
    Player.won = false
  }

  nextLevel(){
     Player.round++;
     Player.moves = 5
     this.router.navigate(['/game']);
  }

  wonGame(){
     Player.won = true
     this.router.navigate(['/result']);
  }

  setTry(){
       Player.moves--;
       if(Player.moves == 0){
          Player.moves = 5;
         this.router.navigate(['/result']);
       }
   }

}

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

  setPlayerName(name){
    for (let i in Player) {
      //if (Player[i].id == id) {
        Player[i].name = name;
      //}
     }
  }

  setTry(){
     for (let i in Player) {
       //if (Letters[i].letter == guess) {
         Player[i].moves--;
         if(Player[i].moves == 0){
            Player[i].moves = 5;
           this.router.navigate(['/result']);
         }
       //}
     }
   }

}

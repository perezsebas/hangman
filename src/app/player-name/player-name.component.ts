import { Component, OnInit } from '@angular/core';
import { PlayerModel } from './player-model';

@Component({
  selector: 'player-name',
  templateUrl: './player-name.component.html',
  styleUrls: ['./player-name.component.css']
})
export class PlayerNameComponent implements OnInit {
  /*player: PlayerModel = {
    "id": 1,
    "name": 'Sebas',
    "round": 1,
    "moves": 5,
  }*/
  constructor() { }

  ngOnInit() {
  }

  start(){
    let player: PlayerModel = {
      "id": 1,
      "name": 'Sebas',
      "round": 1,
      "moves": 5,
    }
    console.log(player.name);
  }

}

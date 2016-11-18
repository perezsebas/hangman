import { Component, OnInit, Input } from '@angular/core';
//import { PlayerModel } from './player-model';
import { PlayerDataService } from '../../services/player-data-service';

@Component({
  selector: 'player-name',
  inputs: ['name'],
  templateUrl: './player-name.component.html',
  styleUrls: ['./player-name.component.css']
})
export class PlayerNameComponent implements OnInit {
  public name: string;
  /*player: PlayerModel = {
    "id": 1,
    "name": 'Sebas',
    "round": 1,
    "moves": 5,
  }*/
  constructor(private playerDataService: PlayerDataService) { }

  ngOnInit() {
  }

  start(){
    //console.log(name);
    /*let player: PlayerModel = {
      "id": 1,
      "name": name,
      "round": 1,
      "moves": 5,
    }*/
    //let player = this.playerDataService;
    //console.log(this.playerDataService.player.name);
    console.log(this.name);
  }

}

import { PlayerModel } from '../models/player-model';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerDataService {
   player: PlayerModel = {
    "id": 1,
    "name": "Sebas",
    "round": 1,
    "moves": 5,
    "won": false
  }
  return;
}

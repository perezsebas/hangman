import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../../services/player-data-service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public players;
  constructor(
    private playerDataService: PlayerDataService
  ) { }

  ngOnInit() {
    this.players = this.playerDataService.getPlayers();
  }

}

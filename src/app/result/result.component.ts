import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../../services/player-data-service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public player;

  constructor(
    private playerDataService: PlayerDataService
  ) { }

  ngOnInit() {
    this.player = this.playerDataService.getPlayer();
  }

}

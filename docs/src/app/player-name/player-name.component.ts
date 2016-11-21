import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player-name',
  templateUrl: './player-name.component.html',
  styleUrls: ['./player-name.component.css']
})
export class PlayerNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  start(){
    console.log("The game has started");
  }

}

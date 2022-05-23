import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/core/services/models';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}

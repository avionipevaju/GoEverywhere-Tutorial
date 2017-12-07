import {Component, OnInit} from '@angular/core';
import {LevelService} from './capture/level.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GoEverywhere Tutorial';

  constructor(private levelService: LevelService) {}

  ngOnInit() {
    this.levelService.getJSON();
  }
}

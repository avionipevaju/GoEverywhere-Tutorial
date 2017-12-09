import {Component, OnInit} from '@angular/core';
import {LevelService} from './capture/level.service';
import {LoaderService} from './example/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GoEverywhere Tutorial';

  constructor(private levelService: LevelService, private loaderService: LoaderService) {}

  ngOnInit() {
    this.levelService.getJSON();
    this.loaderService.getPageContent();
  }
}

import { Component, OnInit} from '@angular/core';

import * as WGo from 'wgo';
import {ActivatedRoute} from '@angular/router';
import {LevelService} from './level.service';
declare var $: any;

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

  boardMain: WGo.Board;
  gameMain: WGo.Game;
  levels: any[];
  currentStep: number;
  text: String;
  title: String;
  description: String;

  constructor(private route: ActivatedRoute, private levelService: LevelService) {}

  ngOnInit() {
    this.levelService.initBoard();
    this.route.params.subscribe(param => {
      this.update(this.route.snapshot.params['level']);
    });
    this.update(this.route.snapshot.params['level']);
  }

  update(stage) {
    this.boardMain = this.levelService.mainBoard;
    this.gameMain = this.levelService.mainGame;
    this.gameMain.firstPosition();
    this.boardMain.removeAllObjects();
    this.levels = this.levelService.jsonLevels[stage];
    console.log(this.levels);
    this.text = this.levels['Text'];
    this.title = this.levels['Title'];
    this.currentStep = 0;
    this.initBoard();
  }

  initBoard() {
    this.description = this.levels[this.currentStep][this.levels[this.currentStep].length - 1]['description'];
    for (const level in this.levels[this.currentStep]) {
      const levelTmp = Number(level);
      if (levelTmp === this.levels[this.currentStep].length - 1) {
        break;
      }
      const stoneObject = this.levels[this.currentStep][levelTmp];
      this.boardMain.addObject(stoneObject);
      this.gameMain.addStone(stoneObject.x, stoneObject.y, stoneObject.c);
    }

    $('#nextBtn').prop('disabled', true);
  }

  resetBoard() {
    this.boardMain.removeAllObjects();
    this.gameMain.firstPosition();
    this.initBoard();
  }

  nextLevel() {
    this.currentStep++;
    this.boardMain.removeAllObjects();
    this.gameMain.firstPosition();
    this.initBoard();
  }

  previousLevel() {
    this.currentStep--;
    this.boardMain.removeAllObjects();
    this.gameMain.firstPosition();
    this.initBoard();
  }

}

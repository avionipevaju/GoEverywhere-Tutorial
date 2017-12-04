import { Component, OnInit } from '@angular/core';

import * as WGo from 'wgo';
declare var $: any;

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

  boardMain: WGo.Board;
  levels: any[];
  currentStep: number;

  constructor() { }

  ngOnInit() {
    this.levels = [];
    this.currentStep = 0;
    const board = new WGo.Board(document.getElementById('board'), {
      width: 300,
      size: 9,
      background: 'assets/wood6.jpg'
    });

    board.addEventListener('click', function(x, y) {
      board.addObject({
        x: x,
        y: y,
        c: WGo.B
      });
      $('#nextBtn').prop('disabled', false);
    });

    let temp = [];
    temp.push({x: 4, y: 3, c: WGo.B}, {x: 3, y: 4, c: WGo.B}, {x: 4, y: 5, c: WGo.B}, {x: 4, y: 4, c: WGo.W});
    this.levels.push(temp);
    temp = [];
    temp.push({x: 3, y: 1, c: WGo.B}, {x: 3, y: 2, c: WGo.W}, {x: 3, y: 3, c: WGo.W}, {x: 3, y: 4, c: WGo.B},
      {x: 2, y: 2, c: WGo.B}, {x: 2, y: 3, c: WGo.B}, {x: 4, y: 2, c: WGo.B});
    this.levels.push(temp);

    this.boardMain = board;
    this.initBoard();
  }

  initBoard() {

    for (const level in this.levels[this.currentStep]) {
      this.boardMain.addObject(this.levels[this.currentStep][level]);
    }

    $('#nextBtn').prop('disabled', true);
  }

  resetBoard() {
    this.boardMain.removeAllObjects();
    this.initBoard();
  }

  nextLevel() {
    this.currentStep++;
    this.boardMain.removeAllObjects();
    this.initBoard();
  }

  previousLevel() {
    this.currentStep--;
    this.boardMain.removeAllObjects();
    this.initBoard();
  }

}

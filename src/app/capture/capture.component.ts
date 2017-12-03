import { Component, OnInit } from '@angular/core';

import * as WGo from 'wgo';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

  boardMain: WGo.Board;

  constructor() { }

  ngOnInit() {
    const board = new WGo.Board(document.getElementById('board'), {
      width: 340,
      size: 9,
      background: 'assets/wood6.jpg'
    });

    board.addEventListener('click', function(x, y) {
      board.addObject({
        x: x,
        y: y,
        c: WGo.B
      });
    });
    this.boardMain = board;
    this.initBoard();
  }

  initBoard() {
    this.boardMain.addObject({
      x: 4,
      y: 3,
      c: WGo.B
    });

    this.boardMain.addObject({
      x: 3,
      y: 4,
      c: WGo.B
    });

    this.boardMain.addObject({
      x: 4,
      y: 5,
      c: WGo.B
    });

    this.boardMain.addObject({
      x: 4,
      y: 4,
      c: WGo.W
    });
  }

  resetBoard() {
    this.boardMain.removeAllObjects();
    this.initBoard();
  }

}

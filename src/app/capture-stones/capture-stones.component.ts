import { Component, OnInit } from '@angular/core';

import * as WGo from 'wgo';

@Component({
  selector: 'app-capture-stones',
  templateUrl: './capture-stones.component.html',
  styleUrls: ['./capture-stones.component.css']
})
export class CaptureStonesComponent implements OnInit {

  board1: WGo.Board;
  board2: WGo.Board;
  board3: WGo.Board;
  board4: WGo.Board;

  constructor() { }

  ngOnInit() {

    let board1 = new WGo.Board(document.getElementById('board1'), {
      width: 340,
      size: 9,
      background: 'assets/wood6.jpg'
    });
    this.board1 = board1;

    let board2 = new WGo.Board(document.getElementById('board2'), {
      width: 340,
      size: 9,
      background: 'assets/wood6.jpg'
    });
    this.board2 = board2;

    let board3 = new WGo.Board(document.getElementById('board3'), {
      width: 340,
      size: 9,
      background: 'assets/wood6.jpg'
    });
    this.board3 = board3;

    let board4 = new WGo.Board(document.getElementById('board4'), {
      width: 340,
      size: 9,
      background: 'assets/wood6.jpg'
    });
    this.board4 = board4;

    this.initBoard1();
    this.initBoard2();
    this.initBoard3();
    this.initBoard4();
  }

  initBoard1() {

    this.board1.addObject({
      x: 4,
      y: 3,
      c: WGo.B
    });

    this.board1.addObject({
      x: 3,
      y: 4,
      c: WGo.B
    });

    this.board1.addObject({
      x: 5,
      y: 4,
      c: WGo.B
    });

    this.board1.addObject({
      x: 4,
      y: 4,
      c: WGo.W
    });
  }

  initBoard2(){

    this.board2.addObject({
      x: 4,
      y: 3,
      c: WGo.B
    });

    this.board2.addObject({
      x: 3,
      y: 4,
      c: WGo.B
    });

    this.board2.addObject({
      x: 5,
      y: 4,
      c: WGo.B
    });

    this.board2.addObject({
      x: 4,
      y: 4,
      c: WGo.W
    });

    this.board2.addObject({
      x: 4,
      y: 5,
      c: WGo.B
    });
  }

  initBoard3(){

    this.board3.addObject({
      x: 4,
      y: 3,
      c: WGo.B
    });

    this.board3.addObject({
      x: 3,
      y: 4,
      c: WGo.B
    });

    this.board3.addObject({
      x: 5,
      y: 4,
      c: WGo.B
    });

    this.board3.addObject({
      x: 4,
      y: 5,
      c: WGo.B
    });
  }

  initBoard4(){

    this.board4.addObject({
      x: 4,
      y: 3,
      c: WGo.B
    });

    this.board4.addObject({
      x: 3,
      y: 4,
      c: WGo.B
    });

    this.board4.addObject({
      x: 5,
      y: 4,
      c: WGo.B
    });

    this.board4.addObject({
      x: 4,
      y: 4,
      c: WGo.W
    });

    this.board4.addObject({
      x: 4,
      y: 5,
      c: WGo.W
    });
  }
}

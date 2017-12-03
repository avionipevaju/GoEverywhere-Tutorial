import { Component, OnInit } from '@angular/core';

import * as WGo from 'wgo';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const board = new WGo.Board(document.getElementById('board'), {
      width: 340,
      size: 9,
      background: 'assets/wood6.jpg'
    });
  }

}

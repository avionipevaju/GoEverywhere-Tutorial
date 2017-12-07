import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';
import * as WGo from 'wgo';
declare var $: any;


@Injectable()
export class LevelService {

  jsonLevels;
  mainBoard: WGo;

  constructor(private http: HttpClient) { }

  public getJSON() {
    this.http.get('../assets/levels').subscribe(data => this.jsonLevels = data);
  }

  public initBoard() {
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
    this.mainBoard = board;
  }

}

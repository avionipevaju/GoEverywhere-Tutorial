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
  mainGame: WGo.Game;

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
    const game = new WGo.Game(9);

    board.addEventListener('click', function(x, y) {
      const deleted = game.play(x, y, 1);
      console.log(deleted);
      if (Number.isInteger(deleted)) {
        alert('Illegal move');
        return;
      }

      board.addObject({
        x: x,
        y: y,
        c: WGo.B
      });

      if (deleted.length > 0) {
        $('#nextBtn').prop('disabled', false);
      }
      for (const stone in deleted) {
        board.removeObject(deleted[stone]);
      }
    });
    this.mainBoard = board;
    this.mainGame = game;
  }

}

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
    const mboard = new WGo.Board(document.getElementById('board'), {
      width: 300,
      size: 9,
      section: {
        top: -0.5,
        left: -0.5,
        right: -0.5,
        bottom: -0.5
      },
      background: 'assets/wood_512.jpg'
    });

    const coordinates = {
      // draw on grid layer
      grid: {
        draw: function(args, board) {
          let ch, t, xright, xleft, ytop, ybottom;

          this.fillStyle = 'rgba(0,0,0,0.7)';
          this.textBaseline = 'middle';
          this.textAlign = 'center';
          this.font = board.stoneRadius + 'px ' + (board.font || ' ');

          xright = board.getX(-0.75);
          xleft = board.getX(board.size - 0.25);
          ytop = board.getY(-0.75);
          ybottom = board.getY(board.size - 0.25);

          for (let i = 0; i < board.size; i++) {
            ch = i + 'A'.charCodeAt(0);
            if (ch >= 'I'.charCodeAt(0)) ch++;

            t = board.getY(i);
            this.fillText(board.size - i, xright, t);
            this.fillText(board.size - i, xleft, t);

            t = board.getX(i);
            this.fillText(String.fromCharCode(ch), t, ytop);
            this.fillText(String.fromCharCode(ch), t, ybottom);
          }

          this.fillStyle = 'black';
        }
      }
    }
    mboard.addCustomObject(coordinates);

    const game = new WGo.Game(9);

    mboard.addEventListener('click', function(x, y) {
      const deleted = game.play(x, y, 1);
      console.log(deleted);
      if (Number.isInteger(deleted)) {
        alert('Illegal move');
        return;
      }

      mboard.addObject({
        x: x,
        y: y,
        c: WGo.B
      });

      if (deleted.length > 0) {
        $('#nextBtn').prop('disabled', false);
      }
      for (const stone in deleted) {
       mboard.removeObject(deleted[stone]);
      }
    });
    this.mainBoard = mboard;
    this.mainGame = game;
  }

}

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
  scenario;

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
    let scenario = this.jsonLevels['48kyu'][0][this.jsonLevels['48kyu'][0].length - 2]['service'];

    console.log("Ovo je scenario: ");
    console.log(scenario)

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

      //console.log(game.getStone(deleted[0].x, deleted[0].y));
      if (deleted.length > 0) {
        if(game.getStone(deleted[0].x, deleted[0].y) === 0) {
          $('#nextBtn').prop('disabled', false);
          }
      }

      console.log("Usaoooooo");

      setTimeout(function(){


      //console.log(this.scenario);
      for(let scen of scenario){

        const stoneObject = {
          x: scen.x,
          y: scen.y,
          c: scen.c
        };
        if(game.getStone(stoneObject.x, stoneObject.y) === 0){



          mboard.addObject({
            x: stoneObject.x,
            y: stoneObject.y,
            c: WGo.W
          });

          //game.addStone(stoneObject.x, stoneObject.y, -1);
          const deleted1 = game.play(stoneObject.x, stoneObject.y, -1);
          for (const stone in deleted1) {
            mboard.removeObject(deleted1[stone]);
          }
          console.log(deleted1);
          break;
        }
      }

      for (let stone in deleted) {
        console.log("Skinut kamen: "+deleted[stone].x + " | "+deleted[stone].y);
        mboard.removeObject(deleted[stone]);

      }
      },500);
    });
    this.mainBoard = mboard;
    this.mainGame = game;
  }

  public initScenario(stage,currStep){

   this.scenario = this.jsonLevels[stage][currStep][this.jsonLevels[stage][currStep].length - 2]['service'];


  }

}

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
  stage;

  isSuccessVisible: boolean = false;
  visible: boolean = false;
  message: String = "";



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

    this.isSuccessVisible = false;
    this.visible = false;

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
    this.stage = this.levels[this.currentStep][this.levels[this.currentStep].length - 2]['service'];

    //let scenario = this.levels['48kyu'][0][this.levels['48kyu'][0].length - 2]['service'];

    //this.levelService.initScenario(this.stage,this.currentStep);
    for (const level in this.levels[this.currentStep]) {
      const levelTmp = Number(level);
      if (levelTmp === this.levels[this.currentStep].length - 2) {
        break;
      }
      const stoneObject = this.levels[this.currentStep][levelTmp];
      this.boardMain.addObject(stoneObject);
      this.gameMain.play(stoneObject.x, stoneObject.y, stoneObject.c);

    }
    let self = this;

    self.boardMain.addEventListener('click', function(x, y) {
      const deleted = self.gameMain.play(x, y, 1);
      console.log("KORISNIK JE KLIKNUO !!!");
      if (Number.isInteger(deleted)) {
       //console.log("Usao u ilegal move");
       // alert('Illegal move');
        return;
      }

      self.boardMain.addObject({
        x: x,
        y: y,
        c: WGo.B
      });

      let handicap: boolean = true;

      setTimeout(function(){
        console.log(deleted);
        if(deleted.length <= 0){

          for(let scen of self.stage){


            const stoneObject = {
              x: scen.x,
              y: scen.y,
              c: scen.c
            };
            if(self.gameMain.getStone(stoneObject.x, stoneObject.y) === 0){
              handicap = false;
              self.boardMain.addObject(stoneObject);

              //game.addStone(stoneObject.x, stoneObject.y, -1);
              const deleted1 = self.gameMain.play(stoneObject.x, stoneObject.y, -1);
              for (const stone in deleted1) {
                self.boardMain.removeObject(deleted1[stone]);
              }
              console.log(deleted1);

              if(scen.f === 1){
                self.visible = true;
                self.isSuccessVisible = false;
                console.log("usao je zavrsnicu FAIL i success je: " +self.isSuccessVisible);
                self.message = "Fail! RESET BOARD and try again";
                return;
              }
              break;
            }

          }
        }



        for (let stone in deleted) {
          console.log("Skinut kamen: "+deleted[stone].x + " | "+deleted[stone].y + " a njegov boja je "+(self.gameMain.getStone(deleted[stone].x, deleted[stone].y)));
          self.boardMain.removeObject(deleted[stone]);

        }
        console.log("PRE IF-a: 1. uslov " + (handicap && deleted.length <= 0));
        console.log("PRE IF-a: 2. uslov " + (deleted.length > 0));

        if (deleted.length > 0 || (handicap && deleted.length <= 0)) {

          if( (handicap && deleted.length <= 0) || ((self.gameMain.getStone(deleted[0].x, deleted[0].y)) === 0)) {
            console.log("POSLE IF-a");
            $('#nextBtn').prop('disabled', false);
            self.isSuccessVisible = true;
            self.visible = true;
            self.message = "Success! You are ready for NEXT step.";
            console.log("usao je zavrsnicu2 SUCCESS i success je: " +self.isSuccessVisible);
            return;
          }
        }

      },500);
    });



    $('#nextBtn').prop('disabled', true);
  }

  resetBoard() {
    this.boardMain.removeAllObjects();
    this.gameMain.firstPosition();
    this.visible = false;
    this.initBoard();
  }

  nextLevel() {
    this.currentStep++;
    this.boardMain.removeAllObjects();
    this.gameMain.firstPosition();
    this.visible = false;
    this.initBoard();
  }

  previousLevel() {
    this.currentStep--;
    this.boardMain.removeAllObjects();
    this.gameMain.firstPosition();
    this.visible = false;
    this.initBoard();
  }

}

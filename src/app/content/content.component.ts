import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CaptureComponent} from "../capture/capture.component";
declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  first = true;

  constructor(private router: Router, private capture: CaptureComponent) { }

  ngOnInit() {}

  change(path, stage) {
    this.router.navigate([path, {level: stage}] );
  }
  toggle(event) {
    $('#' + event.target.id + 'List').slideToggle();
  }

  }

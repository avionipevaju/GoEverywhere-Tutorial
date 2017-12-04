import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  change(path) {
    this.router.navigate([path]);
  }
  toggle(event) {
    $('#' + event.target.id + 'List').slideToggle();
  }

  }

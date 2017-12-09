import { Component, OnInit } from '@angular/core';
import {LoaderService} from './loader.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  content: any[];
  title;
  text;
  subtitle;
  imageObjects: any[];

  constructor(private route: ActivatedRoute, private loaderService: LoaderService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.update(this.route.snapshot.params['level']);
    });
    this.update(this.route.snapshot.params['level']);
  }

  update(stage) {
    this.content = this.loaderService.pageContent[stage];
    this.title = this.content['Title'];
    this.text = this.content['Text'];
    this.subtitle = this.content['Subtitle'];
    this.imageObjects = [];
    for (const x in this.content) {
      if (Number.isInteger(Number(x))) {
        this.imageObjects.push({'url': this.content[x]['ImageUrl'], 'description': this.content[x]['ImageDescription'] });
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Parser from 'rss-parser/dist/rss-parser.min.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const parser = new Parser();
    parser.parseURL('https://medium.com/feed/@yan.dre').then(rss => {
      console.log(rss);
    });
  }

}

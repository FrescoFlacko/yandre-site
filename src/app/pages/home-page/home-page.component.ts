import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Parser from 'rss-parser/dist/rss-parser.min.js';

declare var test: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public mediumPosts: Array<Object>;

  private checked: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const parser = new Parser();
    parser.parseURL('https://medium.com/feed/@yan.dre').then(rss => {
      console.log(rss);
      this.mediumPosts = rss.items.slice(0, 5);

      for (const post of this.mediumPosts) {
        const element = document.createElement('div');
        element.innerHTML = post['content:encoded'];

        post['imageSrc'] = element.querySelector('img').getAttribute('src');

        if (!post['imageSrc'].includes('cdn-images')) {
          post['imageSrc'] = 'assets/images/image-placeholder.jpg';
        }
      }
    }).catch(() => {
    }).finally(() => {
      test();
    });
  }

}

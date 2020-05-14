import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-medium-post-card',
  templateUrl: './medium-post-card.component.html',
  // host: { 'class': 'row align-items-center' },
  styleUrls: ['./medium-post-card.component.scss']
})
export class MediumPostCardComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() url: string;
  @Input() title: string;
  @Input() date: string;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date(this.date).toDateString();
  }
}

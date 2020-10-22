import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @Input() entitle: string;
  @Input() date: string;
  @Input() writer: string;
  @Input() wording: string;
  @Input() image: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}

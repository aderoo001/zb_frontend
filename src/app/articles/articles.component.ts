import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article.service';
import {ArticleResponse} from '../interfaces/article.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor(public articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleService.initArticles();
  }
}

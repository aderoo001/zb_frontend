import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleResponse, ArticlesListResponse} from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: ArticleResponse[];
  private count: number;
  private next: string;
  private previous: string;

  constructor(private httpClient: HttpClient) {
  }

  public loadArticles(url: string): void {
    this.httpClient.get<ArticlesListResponse>(url)
      .subscribe(
        (response) => {
          this.articles = response.results;
          this.count = response.count;
          this.next = response.next;
          this.previous = response.previous;
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }

  public initArticles(): void {
    this.next = 'http://127.0.0.1:8000/article/?format=json';
    this.loadArticles(this.next);
  }

  public getNextArticles(): void {
    this.loadArticles(this.next);
  }

  public getPreviousArticles(): void {
    this.loadArticles(this.previous);
  }

  public getArticles(): ArticleResponse[] {
    return this.articles;
  }

  public printArticles(): void {
    console.log(this.articles);
  }
}

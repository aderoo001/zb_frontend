export interface ArticleResponse {
  id: number;
  owner: string;
  headline: string;
  created: string;
  wording: string;
  image: string;
}

export interface ArticlesListResponse {
  count: number;
  next: string;
  previous: string;
  results: ArticleResponse[];
}

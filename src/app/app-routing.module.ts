import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from './articles/articles.component';
import {ArticleComponent} from './articles/article/article.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'articles/:id', component: ArticleComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

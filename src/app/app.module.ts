import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleComponent} from './articles/article/article.component';
import {ArticlesComponent} from './articles/articles.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ArticleService} from './services/article.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    SinglePostComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

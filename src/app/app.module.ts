import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LikeComponent } from './shared/components/like/like.component';
import { YoutubeComponent } from './shared/youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

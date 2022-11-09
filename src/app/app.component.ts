import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'instalike';
  post = {
    msg: "Hello",
    likesCount: 123,
    isLiked: false,
  }
  youtube = {
    msg: "Hello",
    likesCount: 123,
    isLiked: false,
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
@Input() likesCount!: number;
@Input() isLiked!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  onLikeClick(){
    console.log("hello");
    if(this.isLiked){
      this.isLiked = !this.isLiked;
      this.likesCount -= 1;
    }else{
      this.isLiked = !this.isLiked;
      this.likesCount += 1;
    }
  }
}

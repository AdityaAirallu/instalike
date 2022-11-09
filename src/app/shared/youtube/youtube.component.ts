import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  @Input() likesCount!: number;
  @Input() isLiked!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  onClicked(value:boolean){
    if(!value){
      // this.isLiked = !this.isLiked;
      this.likesCount -= 1;
    }else{
      // this.isLiked = !this.isLiked;
      this.likesCount += 1;
    }
  }
  onBellClick(){
    console.log("hello");
    if(this.isLiked){
      this.isLiked = !this.isLiked;
    }else{
      this.isLiked = !this.isLiked;
    }
  }
  }
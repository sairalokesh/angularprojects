import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  sources: Array<Object>;

  constructor() {
    this.sources = [
      {
        src: 'http://static.videogular.com/assets/videos/videogular.ogg',
        type: 'video/ogg'
      },
      {
        src: 'http://static.videogular.com/assets/videos/videogular.webm',
        type: 'video/webm'
      }
    ];
  }

  ngOnInit() {
  }

}

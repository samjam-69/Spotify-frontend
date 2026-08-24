import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { song_List } from '../service/song';
import { BackendServiceService } from '../service/backend-service.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  song:song_List={
          "id":0,
          "title":"",
          "file":"",
          "artist":"",
          "time":""
    }
  url=""
  @ViewChild('player') player !: ElementRef<HTMLAudioElement>;
  constructor(private service: BackendServiceService) { }
  ngOnInit(): void {
    this.service.song$.subscribe(
      data => {this.song=data;}
    )
    this.service.url$.subscribe(
      data => {this.url="";setTimeout(() => {
    this.url = data;
  });}
    )
  }

}

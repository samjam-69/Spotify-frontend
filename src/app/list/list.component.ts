import { Component, OnInit } from '@angular/core';
import { song_List } from '../service/song';
import { BackendServiceService } from '../service/backend-service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  songList !: song_List[]
  constructor(private service: BackendServiceService) { }
  ngOnInit(){
    this.service.get_list().subscribe(
      data => this.songList=data
    )
  }
  playSong(i:song_List){
    this.service.select_song(i)
  }
  
}

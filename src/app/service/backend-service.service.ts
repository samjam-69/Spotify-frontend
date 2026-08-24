import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { song_List } from './song';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  song$ = new Subject<song_List>();
  url$ = new Subject<string>();

  api = 'https://spotify-backend-cwuj.onrender.com';

  constructor(private http: HttpClient) {}

  get_list() {
    return this.http.get<song_List[]>(
      this.api + '/songs'
    );
  }

  select_song(son: song_List) {
    this.song$.next(son);

    this.url$.next(
      `${this.api}/${encodeURIComponent(son.file)}`
    );
  }
}
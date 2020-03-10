import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }


  getAlbum() {
    return this.http.get(`https://itunes.apple.com/us/rss/topalbums/limit=42/json`);
  }
  getFilter() {
    return this.http.get(`https://itunes.apple.com/us/rss/topalbums/limit=42/json`);
  }


}

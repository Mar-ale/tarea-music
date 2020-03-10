import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input('albums') albunes;

  constructor() { }
  ngOnInit(): void {
  }


}

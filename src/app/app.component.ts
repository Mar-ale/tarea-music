import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  albums = [];
  filter = [];
  contFiltro = [];
  resultFiltro = [];
  evento: string;

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.getAlbum();
    this.getFilter();
  }

  getAlbum() {
    this._api.getAlbum().subscribe((data: any) => {
     // console.log('Data: :', data);
      this.albums = data.feed.entry;
    })
  }
  getFilter() {
    this._api.getFilter().subscribe((data: any) => {
      //console.log('Data: :', data);
      this.filter = data.feed.entry;
      //console.log(this.filter)
          for (let filtro of this.filter) {
            this.contFiltro.push(filtro.category.attributes.label);
          }
        this.resultFiltro = this.contFiltro.filter((elem, i, arr) => {
          if (arr.indexOf(elem) === i) {
            return elem
          }
        })
    })

  }
  procesaPropagar(event) {
    this.evento = event;
    console.log(this.evento);
    //this.listarAlbumPorCategoria();
  }



}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input('filter') filters;
  @Output() propagar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }
  procesaPropagar(mensaje) {
    this.propagar.emit(mensaje);
  }
}

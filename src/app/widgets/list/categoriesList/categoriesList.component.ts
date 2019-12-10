import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'angly-categoriesList',
  templateUrl: './categoriesList.component.html',
  styleUrls: ['./categoriesList.component.scss']
})
export class CategoriesListComponent implements OnInit {

  @Input() categories : any;
  @Output() category  : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  setCategory(category) {
    this.category.emit(category);
  }

}

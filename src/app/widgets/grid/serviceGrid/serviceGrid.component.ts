/*
 * Service grid structure
 * Used in another components.
 */
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[angly-serviceGrid]',
  templateUrl: './serviceGrid.component.html',
  styleUrls: ['./serviceGrid.component.scss']
})
export class ServiceGridComponent implements OnInit {

  /*
   * serviceGridContent is an attribute.
   */
  @Input() serviceGridContent:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

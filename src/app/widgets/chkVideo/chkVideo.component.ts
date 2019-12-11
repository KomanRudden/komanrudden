import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[video]',
  templateUrl: './chkVideo.component.html',
  styleUrls: ['./chkVideo.component.scss']
})
export class ChkVideoComponent implements OnInit {

   @Input() videoContent : any;
   
   constructor() { }

   ngOnInit() {
   }

}

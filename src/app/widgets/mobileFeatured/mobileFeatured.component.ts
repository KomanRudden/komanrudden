import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[angly-mobileFeatured]',
  templateUrl: './mobileFeatured.component.html',
  styleUrls: ['./mobileFeatured.component.scss']
})
export class MobileFeaturedComponent implements OnInit {

   @Input() data : any;
   @Input() range: any;
   @Input() image_url: any;
   @Input() note: any;

   constructor() { }

   ngOnInit() {
   }

}

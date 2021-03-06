import { Component, OnInit } from '@angular/core';
import { ChkService } from '../service/chk.service';
declare var $ : any;

@Component({
  selector: 'angly-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* Variables */
  homeContent    : any;
  services       : any;
  carGallery     : any;
  posts          : any;
  team           : any;
  pricingContent : any;
  contact        : any;
  videoContentOne: any;
  videoContentTwo: any;
  videoContentThree: any;
  localInference : any;
  agile          : any;
  docker         : any;
  testimonial    : any;

  constructor( private service:ChkService ) {

      this.service.getHomeContent().
         subscribe(response => {this.homeContent = response},
                   err      => console.log(err),
                   ()       => this.getContent(this.homeContent)
               );

      this.service.getServices().
         subscribe(response => {this.services = response},
                  err       => console.log(err),
                  ()        =>this.services
               );

      this.service.getPosts().
         subscribe(response => {this.posts = response},
                  err      => console.log(err),
                  ()       => this.posts
               );

      this.service.getCarGallery().
         subscribe(response => {this.carGallery = response},
                   err      => console.log(err),
                   ()       => this.carGallery
               );


      this.service.getTeam().
         subscribe(response => {this.team = response},
                   err      => console.log(err),
                   ()       => this.team
               );

      this.service.getPricingPageContent().
         subscribe(response => {this.pricingContent = response},
                  err       => console.log(err),
                  ()        => this.pricingContent
               );

      this.service.getContactContent().
         subscribe(response => {this.contact = response},
                   err      => console.log(err),
                   ()       => this.contact
               );

      this.service.getHomeTestimonial().
         subscribe(response => {this.testimonial = response},
                   err      => console.log(err),
                   ()       => this.testimonial
               );
      }

  ngOnInit() {
  }


  /*
   * getContent is used for get the home page content.
   */
   getContent(content)
   {
      this.videoContentOne    = content.video_content_one;
      this.videoContentTwo    = content.video_content_two;
      this.videoContentThree    = content.video_content_three;
      this.localInference  = content.localInference;
      this.agile = content.agile;
      this.docker = content.docker;
   }

   subscribeFormClasses : any = {rowClass:"row", fieldClass:"col-sm-12 col-md-6"}



}

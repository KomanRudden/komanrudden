import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';

@Component({
  selector: 'angly-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

   /* Variables */
   services : any;
   about    : any;
   team     : any;
   contact  : any;

   constructor(private pageTitleService: PageTitleService, private service:ChkService) {

      /* Page title */
      this.pageTitleService.setTitle(" Koman Rudden");

      /* Page subTitle */
      this.pageTitleService.setSubTitle(" Solutions Architect | Technical Team Lead | Senior Full-Stack Java Engineer ");

      this.service.getServices().
         subscribe(response => {this.services = response},
                  err       => console.log(err),
                  ()        =>this.services
               );

      this.service.getAbout().
         subscribe(response => {this.about = response},
                   err      => console.log(err),
                   ()       => this.about
               );

      this.service.getTeam().
         subscribe(response => {this.team = response},
                   err      => console.log(err),
                   ()       => this.team
               );

      this.service.getContactContent().
         subscribe(response => {this.contact = response},
                   err      => console.log(err),
                   ()       => this.contact
               );

   }


   ngOnInit() {
   }
   
   /*
   * Social links
   */
  socialDetails : any = [
    { url: 'https://www.linkedin.com/in/komanrudden', icon : 'fa-linkedin'},
    { url: 'https://twitter.com/KomanRudden', icon : 'fa-twitter text-info'}
  ]

  /*
   * Classes of social ul, li
   */
  socialsClasses : any = {ulClass:"", liClass:"", linkClass:""}

}

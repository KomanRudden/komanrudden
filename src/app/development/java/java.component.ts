import { Component, OnInit } from '@angular/core';
import { ChkService } from '../../service/chk.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  blog             : any;
  categories       : any;
  popularPosts     : any;
  instagramGallary : any;

  category         : any = 10;

  constructor(private service : ChkService) {

     this.service.getJavaBlog().
        subscribe(response => {this.blog = response},
                 err       => console.log(err),
                 ()        => this.blog
              );

     this.service.getJavaCategories().
        subscribe(response => {this.categories = response},
                  err      => console.log(err),
                  ()       => this.categories
              );
     this.service.getPopularPosts().
        subscribe(response => {this.popularPosts = response},
                    err    => console.log(err),
                    ()     => this.popularPosts
                 );

     this.service.getInstagramImages().
        subscribe(response => {this.instagramGallary = response},
                  err      => console.log(err),
                  ()       => this.instagramGallary
              );

  }

  ngOnInit() {
  }

  changeCategory(category) {
    console.log(category);
    this.category = category;
  }

}

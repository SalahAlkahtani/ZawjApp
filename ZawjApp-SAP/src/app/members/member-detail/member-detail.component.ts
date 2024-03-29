import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/Alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user:User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService:UserService,private alertfy:AlertifyService,private route:ActivatedRoute) { }

  ngOnInit() {

    // this.loadUser();
    this.route.data.subscribe(data=>{
      this.user=data['user'];

    });

///Gallaery
    this.galleryOptions = [
      {
          width: '500px',height: '500px',imagePercent:100,thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,preview:false
      }
  ]
  this.galleryImages=this.getImages();

  }
  getImages(){
    const imgUrls=[];
    for (let i=0 ;i< this.user.photos.length; i++) {
      imgUrls.push({
        small:this.user.photos[i].url,
        medium:this.user.photos[i].url,
        big:this.user.photos[i].url

      });
    }
    return imgUrls;
  }
  // loadUser(){
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe(
  //     (user:User)=>{this.user=user},
  //     error=>{this.alertfy.error(error)}
  //   )
  // }

}

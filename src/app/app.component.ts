import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 images = ['apartment.jpg', 'furniture.jpg', 'interior-design.jpg', 'pool.jpg', 'pool-holiday.jpg', 'sunbeds.jpg' ];
 currentImage = 0;
 showImage = true;

 ngOnInit(){
   this.updateImage();
 }

 updateImage(){
   setInterval(() => {
     this.currentImage++;
     this.currentImage = this.currentImage % this.images.length;
     this.showImage = false;

     setTimeout(() => {
       this.showImage = true;
     }, 10);

    }, 8000);
  }
}

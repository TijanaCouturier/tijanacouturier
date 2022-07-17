import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['frankfurt.jpg', 'skyline.jpg', 'oper.jpg', 'bank-skyline.jpg', 'turm.jpg', 'apartment.jpg' ];
  headlines = [
   'Bring engineering to the next level', 
   'Born to code', 
   'Visit Frakfurt and programing',
   'Visit München and programing',
   'Find a job',
   'Relax and programing'
  ];
 
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


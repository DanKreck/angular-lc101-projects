import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Pictures?';
  image1 = 'assets/auroura.jpg';
  image2 = 'assets/ducks.jpg';
  image3 = 'assets/dj.png';
  image4 = 'assets/buzz.png';

  constructor() { }

  ngOnInit() {
  }

}
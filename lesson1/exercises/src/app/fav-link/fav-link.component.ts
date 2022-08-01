import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-link.component.html',
  styleUrls: ['./fav-link.component.css']
})
export class FavLinkComponent implements OnInit {

  favLinks: string[] = ["https://www.google.com", "https://www.amazon.com"];
  constructor() { }

  ngOnInit() {
  }

}

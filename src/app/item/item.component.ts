import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() data: Item;

  // item properties
  id = null;
  title = null;
  description = null;
  rating = null;
  ratingURL = null;

  stars = Array(5).fill('star_border', 0, 5);

  ngOnInit() {

    // fill data
    if (!this.data) {
      return;
    }

    this.id = this.data.id;
    this.title = this.data.title;
    this.description = this.data.description;
    this.rating = this.data.rating;
    this.ratingURL = this.data.ratingURL;
  }

  // methods
  submitRating(event) {

    const idx = parseInt(event.target.getAttribute('data-index'), 10);
    this.rating = idx + 1;

    this.http
    .post(this.ratingURL, { 'item': this.id, 'rating': this.rating })
    .subscribe(

      // TODO: add a loader for a better UX, validate data
      (data: any) => { // on Success

        console.log(data);

        for (let i = 0; i < this.stars.length; i++) {
          this.stars[i] = i <= idx ? 'star' : 'star_border';
        }

      },

      // TODO: a more complex handler, alert client in a more elegant way
      error => window.alert(error) // error
    );

  }

}

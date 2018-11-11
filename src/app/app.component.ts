import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'everis';
  //TODO: add a service
  backend = "http://localhost:8181";
  ratingURL = this.backend + "/rate";
  items =
  [
    {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    rating: 0,
    ratingURL: this.ratingURL
    },
    {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
    rating: 0,
    ratingURL: this.ratingURL
    },
    {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
    rating: 0,
    ratingURL: this.ratingURL
    }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'everis';
  teste = 
  [
    {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    rating: 0
    },
    {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    rating: 0
    },
    {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    rating: 0
    }
  ];
}

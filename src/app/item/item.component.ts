import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() data: Item;

  constructor() { }

  ngOnInit() {

    //fill data
    if(!this.data)
      return;

    this.id = this.data.id;
    this.title = this.data.title;
    this.description = this.data.description;
    this.rating = this.data.rating;
  }

  //item properties
  id = null;
  title = null;
  description = null;
  rating = null;
  
  stars = Array(5).fill(
    { 
      name: 'star_border'
    }, 0, 5);

  //methods
  submitRating(event) {
    let idx = parseInt(event.target.getAttribute("data-index"));
    console.log(idx);
    this.stars[idx].name = 'star';
    this.rating = idx + 1;
    // this.rating++;
  }

  getNumberOfStars(mode) {
    let number = mode === 'empty' ? 5 - this.rating : this.rating;
    return Array(number).fill(1,0,number);
  }

}

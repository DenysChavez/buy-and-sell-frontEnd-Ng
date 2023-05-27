import { Component } from '@angular/core';
import { fakeListings } from 'src/app/fake-data';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent {

  listings: Listing[] = [];

  ngOnInit() {
    this.listings = fakeListings;
  }
  
}

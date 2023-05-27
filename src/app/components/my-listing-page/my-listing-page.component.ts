import { Component } from '@angular/core';
import { fakeMyListings } from 'src/app/fake-data';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']
})
export class MyListingPageComponent {

  listings: Listing[] = [];
  
  ngOnInit(): void {
    this.listings = fakeMyListings;
    console.log(this.listings)
  }

  onDeleteClicked(listingId: string): void {
    alert(`Deleting your listing with id ${listingId}`);
  }
}

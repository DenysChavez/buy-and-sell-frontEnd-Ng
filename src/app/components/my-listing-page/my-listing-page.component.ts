import { Component } from '@angular/core';
import { ListingsService } from 'src/app/service/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']
})
export class MyListingPageComponent {

  listings: Listing[] = [];
  
  constructor(
    private listingsService: ListingsService,
  ) { }
  
  ngOnInit(): void {
    this.listingsService.getListingForUser()
      .subscribe(list => this.listings = list);
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId)
      .subscribe(() => {
        this.listings= this.listings.filter(lists => lists.id !== listingId)
      })
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from 'src/app/fake-data';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent {
  
  listing: Listing | any;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id)
  }

}
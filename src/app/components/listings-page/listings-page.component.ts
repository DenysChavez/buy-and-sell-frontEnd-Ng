import { Component } from '@angular/core';
import { ListingsService } from 'src/app/service/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent {

  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService
  ) {}

  ngOnInit() {
    this.listingsService.getListings().subscribe(list => this.listings = list);
  }
  
}

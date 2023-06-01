import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from 'src/app/service/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent {
  isLoading: boolean = true;
  listing: Listing | any;
  id: string | any

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(this.id).subscribe(list => {
      this.listing = list;
      this.isLoading = false;
    });
    this.listingsService.addViewToListing(this.id).subscribe(() => console.log("Views updated!"))
  }

}

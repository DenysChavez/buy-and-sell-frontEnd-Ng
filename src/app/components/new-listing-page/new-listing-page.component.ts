import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from 'src/app/service/listings.service';
import { Listing } from 'src/app/types';


@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent {
 
  constructor(
    private router: Router,
    private listingService: ListingsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formData: any) {
    this.listingService.createListing(formData.name, formData.description, formData.price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
    
    console.log("Data Sent");
  }

}

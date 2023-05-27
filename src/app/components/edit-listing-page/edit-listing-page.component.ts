import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeMyListings } from 'src/app/fake-data';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent {

  listing: Listing | any;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.listing = fakeMyListings.find(listing => listing.id === id);
      console.log(this.listing)
    }
  
    onSubmit(): void {
      alert("Saving Changing to the listing....");
      this.router.navigateByUrl('/my-listings');
    }
}

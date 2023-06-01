import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from 'src/app/service/listings.service';
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
    private route: ActivatedRoute,
    private listingServer: ListingsService) { }
  
    ngOnInit(): void {
      const id: string | any = this.route.snapshot.paramMap.get('id');
      this.listingServer.getListingById(id)
        .subscribe(list => this.listing = list)
    }
  
  onSubmit(formData: any): void {
    console.log(formData);
      this.listingServer.editListing(this.listing.id, formData.name, formData.description, formData.price).subscribe(() => {
           this.router.navigateByUrl('/my-listings');
      })
    }
}

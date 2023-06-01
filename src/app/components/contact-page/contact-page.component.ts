import { Component } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { ListingsService } from 'src/app/service/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  email: string = "";
  message: string = "";
  listing: Listing | any;
  id: string | any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  ) { }
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(this.id)
      .subscribe(list => {
        this.listing = list;
        this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`;
    })
  }

  sendMessage() {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings')
  }

}

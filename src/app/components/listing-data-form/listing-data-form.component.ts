import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent {

  @Input() buttonText: string | undefined;
  @Input() currentName: string = ""; 
  @Input() currentDescription: string = "";
  @Input() currentPrice: string = "";

  @Output() onSubmit = new EventEmitter<Listing>()
  
  constructor(private router: Router) { }

  name: string | any;
  description: string = '';
  price: string = '';

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: "",
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0
    });
    this.router.navigateByUrl('/my-listings')
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
  
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText: any;
  @Input() currentName: any;
  @Input() currentDescription: any;
  @Input() currentPrice: any;

  name: string = '';
  description: string = '';
  price: string = '';

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }


  onButtonClicked(): void {
    this.onSubmit.emit({
      name: this.currentName,
      description: this.currentDescription,
      price: Number(this.currentPrice),
    });
  }
}









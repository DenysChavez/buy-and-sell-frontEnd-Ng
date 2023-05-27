import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './components/listings-page/listings-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { EditListingPageComponent } from './components/edit-listing-page/edit-listing-page.component';
import { ListingDataFormComponent } from './components/listing-data-form/listing-data-form.component';
import { MyListingPageComponent } from './components/my-listing-page/my-listing-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NewListingPageComponent } from './components/new-listing-page/new-listing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ContactPageComponent,
    EditListingPageComponent,
    ListingDataFormComponent,
    MyListingPageComponent,
    NavBarComponent,
    NewListingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

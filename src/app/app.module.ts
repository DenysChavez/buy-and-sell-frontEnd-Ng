import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListingsPageComponent } from './components/listings-page/listings-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { MyListingPageComponent } from './components/my-listing-page/my-listing-page.component';
import { NewListingPageComponent } from './components/new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './components/edit-listing-page/edit-listing-page.component';
import { ListingDataFormComponent } from './components/listing-data-form/listing-data-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListingDetailPageComponent } from './components/listing-detail-page/listing-detail-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingDetailPageComponent,
    ContactPageComponent,
    MyListingPageComponent,
    NewListingPageComponent,
    EditListingPageComponent,
    ListingDataFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/listings',
        pathMatch: 'full'
      },
      {
        path: 'listings',
        component: ListingsPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'listings/:id',
        component: ListingDetailPageComponent
      },
      {
        path: 'contact/:id',
        component: ContactPageComponent
      },
      {
        path: 'edit-listing/:id',
        component: EditListingPageComponent
      },
      {
        path: 'my-listings',
        component: MyListingPageComponent
      },
      {
        path: 'new-listing',
        component: NewListingPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

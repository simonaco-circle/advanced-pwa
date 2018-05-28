import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentRoutingModule } from './rent-routing.module';
import { RentalsListComponent } from './rentals-list/rentals-list.component';

@NgModule({
  imports: [
    CommonModule,
    RentRoutingModule
  ],
  declarations: [RentalsListComponent]
})
export class RentModule { }

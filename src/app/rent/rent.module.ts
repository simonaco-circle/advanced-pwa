import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { RentRoutingModule } from './rent-routing.module';
import { RentalsListComponent } from './rentals-list/rentals-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { PaymentModule } from './../payment/payment.module';

@NgModule({
  imports: [
    CommonModule,
    RentRoutingModule,
    MatGridListModule,
    MatCardModule,
    PaymentModule
  ],
  declarations: [RentalsListComponent, RentalDetailComponent]
})
export class RentModule { }

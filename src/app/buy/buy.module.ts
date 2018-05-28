import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  imports: [
    CommonModule,
    BuyRoutingModule
  ],
  declarations: [PropertyListComponent]
})
export class BuyModule { }

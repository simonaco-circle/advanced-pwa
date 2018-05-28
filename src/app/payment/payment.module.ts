import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRequestComponent } from './payment-request/payment-request.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaymentRequestComponent],
  exports: [PaymentRequestComponent]
})
export class PaymentModule { }

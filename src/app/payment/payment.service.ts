import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  stripe = Stripe('pk_test_liK96oflNiJwZR09AKDej3AC');
}

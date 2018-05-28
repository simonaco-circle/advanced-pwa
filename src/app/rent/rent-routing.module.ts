import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalsListComponent } from './rentals-list/rentals-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

/* const routes: Routes = [ {
  path: 'rentals',
  children: [
    { path: '', component: RentalsListComponent },
    { path: ':id', component: RentalDetailComponent },
  ],
}
]; */
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RentalsListComponent },
      { path: ':id', component: RentalDetailComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRoutingModule { }

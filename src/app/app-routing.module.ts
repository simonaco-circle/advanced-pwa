import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BatteryLevelComponent } from './bluetooth/battery-level/battery-level.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rentals', loadChildren: './rent/rent.module#RentModule' },
  { path: 'buy', loadChildren: './buy/buy.module#BuyModule' },
  { path: 'bluetooth', component: BatteryLevelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

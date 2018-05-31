import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BatteryLevelComponent } from './bluetooth/battery-level/battery-level.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'speakers', loadChildren: './rent/rent.module#RentModule' },
  { path: 'buy', loadChildren: './buy/buy.module#BuyModule' },
  { path: 'bluetooth', component: BatteryLevelComponent },
  { path: 'notification', component: NotificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

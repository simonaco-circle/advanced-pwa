import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';
import { BatteryLevelComponent } from './battery-level/battery-level.component';

@NgModule({
  imports: [
    CommonModule,
    WebBluetoothModule.forRoot({
      enableTracing: true // enable logs
    })
  ],
  exports: [BatteryLevelComponent],
  declarations: [BatteryLevelComponent]
})
export class BluetoothModule {}

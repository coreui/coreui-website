import { NgModule } from '@angular/core';
import { SharedModule, SmartTableModule } from '@coreui/angular';

@NgModule({
  imports: [SmartTableModule, SharedModule]
})
export class CustomAppModule {}

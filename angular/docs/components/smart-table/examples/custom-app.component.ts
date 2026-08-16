import { Component } from '@angular/core';
import { SmartTableComponent } from '@coreui/angular';

@Component({
  templateUrl: './custom-app.component.html',
  imports: [SmartTableComponent],
  standalone: true
})
export class CustomAppComponent {}

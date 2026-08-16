import { Component } from '@angular/core';
import { ProgressComponent } from '@coreui/angular';

@Component({
  template: `<c-progress [value]="42" />`,
  imports: [ProgressComponent],
  standalone: true
})
export class CustomAppComponent {}

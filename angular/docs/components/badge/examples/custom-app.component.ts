import { Component } from '@angular/core';
import { BadgeComponent } from '@coreui/angular';

@Component({
  template: `<c-badge>42</c-badge>`,
  imports: [BadgeComponent],
  standalone: true
})
export class CustomAppComponent {}

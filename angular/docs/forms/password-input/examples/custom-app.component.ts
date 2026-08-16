import { Component } from '@angular/core';
import { FormPasswordDirective } from '@coreui/angular';

@Component({
  template: `<input cFormPassword />`,
  imports: [FormPasswordDirective]
})
export class CustomAppComponent {}

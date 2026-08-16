import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSelectDirective } from '@coreui/angular';

@Component({
  selector: 'docs-select01',
  templateUrl: './select01.component.html',
  imports: [FormSelectDirective, ReactiveFormsModule]
})
export class Select01Component {}

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSelectDirective } from '@coreui/angular';

@Component({
  selector: 'docs-select05',
  templateUrl: './select05.component.html',
  standalone: true,
  imports: [FormSelectDirective, ReactiveFormsModule]
})
export class Select05Component {}

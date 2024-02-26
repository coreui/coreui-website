import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSelectDirective } from '@coreui/angular';

@Component({
  selector: 'docs-select03',
  templateUrl: './select03.component.html',
  standalone: true,
  imports: [FormSelectDirective, ReactiveFormsModule]
})
export class Select03Component {}

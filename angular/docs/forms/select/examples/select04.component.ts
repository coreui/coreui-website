import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSelectDirective } from '@coreui/angular';

@Component({
  selector: 'docs-select04',
  templateUrl: './select04.component.html',
  imports: [FormSelectDirective, ReactiveFormsModule]
})
export class Select04Component {}

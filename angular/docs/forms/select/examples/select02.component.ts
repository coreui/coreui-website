import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSelectDirective } from '@coreui/angular';

@Component({
  selector: 'docs-select02',
  templateUrl: './select02.component.html',
  imports: [FormSelectDirective, ReactiveFormsModule]
})
export class Select02Component {}

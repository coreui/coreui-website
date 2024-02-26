import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';

@Component({
  selector: 'docs-multi-select07',
  templateUrl: './multi-select07.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MultiSelectComponent, MultiSelectOptionComponent, JsonPipe]
})
export class MultiSelect07Component {
}

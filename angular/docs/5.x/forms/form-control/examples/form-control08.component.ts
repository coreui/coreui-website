import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColComponent, FormControlDirective, FormLabelDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-form-control08',
  templateUrl: './form-control08.component.html',
  styleUrls: ['./form-control08.component.scss'],
  standalone: true,
  imports: [RowComponent, ColComponent, FormLabelDirective, FormControlDirective, ReactiveFormsModule, FormsModule, NgStyle]
})
export class FormControl08Component {

  public favoriteColor = '#26ab3c';

}

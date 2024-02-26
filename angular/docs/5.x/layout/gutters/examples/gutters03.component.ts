import { Component } from '@angular/core';
import { ColComponent, ContainerComponent, GutterDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-gutters03',
  templateUrl: './gutters03.component.html',
  standalone: true,
  imports: [ContainerComponent, RowComponent, GutterDirective, ColComponent]
})
export class Gutters03Component {}

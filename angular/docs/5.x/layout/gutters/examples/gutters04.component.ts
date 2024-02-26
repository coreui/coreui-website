import { Component } from '@angular/core';
import { ColComponent, ContainerComponent, GutterDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-gutters04',
  templateUrl: './gutters04.component.html',
  standalone: true,
  imports: [ContainerComponent, RowComponent, GutterDirective, ColComponent]
})
export class Gutters04Component {}

import { Component } from '@angular/core';
import { ColComponent, GutterDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-gutters06',
  templateUrl: './gutters06.component.html',
  standalone: true,
  imports: [RowComponent, GutterDirective, ColComponent]
})
export class Gutters06Component {}

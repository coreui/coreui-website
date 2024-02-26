import { Component } from '@angular/core';
import { ColComponent, ContainerComponent, GutterDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-gutters01',
  templateUrl: './gutters01.component.html',
  standalone: true,
  imports: [ContainerComponent, RowComponent, GutterDirective, ColComponent]
})
export class Gutters01Component {}

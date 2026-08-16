import { Component } from '@angular/core';
import { ColComponent, ContainerComponent, GutterDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-gutters05',
  templateUrl: './gutters05.component.html',
  imports: [ContainerComponent, RowComponent, GutterDirective, ColComponent]
})
export class Gutters05Component {}

import { Component } from '@angular/core';
import { ColComponent, ContainerComponent, GutterDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-gutters02',
  templateUrl: './gutters02.component.html',
  standalone: true,
  imports: [ContainerComponent, RowComponent, GutterDirective, ColComponent]
})
export class Gutters02Component {}

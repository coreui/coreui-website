import { Component } from '@angular/core';
import { ColComponent, ContainerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-columns11',
  templateUrl: './columns11.component.html',
  styleUrls: ['./columns11.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent]
})
export class Columns11Component {}

import { Component } from '@angular/core';
import { ColComponent, ContainerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-columns02',
  templateUrl: './columns02.component.html',
  styleUrls: ['./columns01.component.scss'],
  standalone: true,
  imports: [ContainerComponent, RowComponent, ColComponent]
})
export class Columns02Component {}

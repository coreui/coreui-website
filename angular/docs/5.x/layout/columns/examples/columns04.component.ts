import { Component } from '@angular/core';
import { ColComponent, ContainerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-columns04',
  templateUrl: './columns04.component.html',
  styleUrls: ['./columns03.component.scss'],
  standalone: true,
  imports: [ContainerComponent, RowComponent, ColComponent]
})
export class Columns04Component {}

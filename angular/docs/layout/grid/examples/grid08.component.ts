import { Component } from '@angular/core';
import { ColComponent, ContainerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-grid08',
  templateUrl: './grid08.component.html',
  styleUrls: ['./grid01.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent]
})
export class Grid08Component {}

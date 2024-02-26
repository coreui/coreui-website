import { Component, OnInit } from '@angular/core';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';

@Component({
    selector: 'docs-grid03',
    templateUrl: './grid03.component.html',
    styleUrls: ['./grid01.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent]
})
export class Grid03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

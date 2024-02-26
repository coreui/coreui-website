import { Component, OnInit } from '@angular/core';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';

@Component({
    selector: 'docs-columns09',
    templateUrl: './columns09.component.html',
    styleUrls: ['./columns03.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent]
})
export class Columns09Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

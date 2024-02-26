import { Component, OnInit } from '@angular/core';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';

@Component({
    selector: 'docs-columns02',
    templateUrl: './columns02.component.html',
    styleUrls: ['./columns01.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent]
})
export class Columns02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

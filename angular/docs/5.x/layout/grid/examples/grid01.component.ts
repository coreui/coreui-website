import { Component, OnInit } from '@angular/core';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';

@Component({
    selector: 'docs-grid01',
    templateUrl: './grid01.component.html',
    styleUrls: ['./grid01.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent]
})
export class Grid01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

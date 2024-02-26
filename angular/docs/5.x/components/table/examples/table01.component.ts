import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table01',
    templateUrl: './table01.component.html',
    styleUrls: ['./table01.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

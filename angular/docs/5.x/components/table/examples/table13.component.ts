import { Component, OnInit } from '@angular/core';
import { AlignDirective } from '../../../../../../../coreui-angular/src/lib/utilities/align.directive';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table13',
    templateUrl: './table13.component.html',
    styleUrls: ['./table13.component.scss'],
    standalone: true,
    imports: [TableDirective, AlignDirective]
})
export class Table13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { BorderDirective } from '../../../../../../../coreui-angular/src/lib/utilities/border.directive';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table10',
    templateUrl: './table10.component.html',
    styleUrls: ['./table10.component.scss'],
    standalone: true,
    imports: [TableDirective, BorderDirective]
})
export class Table10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table05',
    templateUrl: './table05.component.html',
    styleUrls: ['./table05.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table05Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

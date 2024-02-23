import { Component, OnInit } from '@angular/core';
import { SmartPaginationComponent } from '../../../../../../../coreui-angular/src/lib/smart-pagination/smart-pagination.component';

@Component({
    selector: 'docs-smart-pagination03',
    templateUrl: './smart-pagination03.component.html',
    styleUrls: ['./smart-pagination03.component.scss'],
    standalone: true,
    imports: [SmartPaginationComponent]
})
export class SmartPagination03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

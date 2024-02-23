import { Component, OnInit } from '@angular/core';
import { SmartPaginationComponent } from '../../../../../../../coreui-angular/src/lib/smart-pagination/smart-pagination.component';

@Component({
    selector: 'docs-smart-pagination02',
    templateUrl: './smart-pagination02.component.html',
    styleUrls: ['./smart-pagination02.component.scss'],
    standalone: true,
    imports: [SmartPaginationComponent]
})
export class SmartPagination02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

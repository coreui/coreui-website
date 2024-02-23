import { Component, OnInit } from '@angular/core';
import { SmartPaginationComponent } from '../../../../../../../coreui-angular/src/lib/smart-pagination/smart-pagination.component';

@Component({
    selector: 'docs-smart-pagination06',
    templateUrl: './smart-pagination06.component.html',
    styleUrls: ['./smart-pagination06.component.scss'],
    standalone: true,
    imports: [SmartPaginationComponent]
})
export class SmartPagination06Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

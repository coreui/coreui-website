import { Component, OnInit } from '@angular/core';
import { SmartPaginationComponent } from '../../../../../../../coreui-angular/src/lib/smart-pagination/smart-pagination.component';

@Component({
    selector: 'docs-smart-pagination05',
    templateUrl: './smart-pagination05.component.html',
    styleUrls: ['./smart-pagination05.component.scss'],
    standalone: true,
    imports: [SmartPaginationComponent]
})
export class SmartPagination05Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

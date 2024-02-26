import { Component, OnInit } from '@angular/core';
import { SmartPaginationComponent } from '../../../../../../../coreui-angular/src/lib/smart-pagination/smart-pagination.component';

@Component({
    selector: 'docs-smart-pagination04',
    templateUrl: './smart-pagination04.component.html',
    styleUrls: ['./smart-pagination04.component.scss'],
    standalone: true,
    imports: [SmartPaginationComponent]
})
export class SmartPagination04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

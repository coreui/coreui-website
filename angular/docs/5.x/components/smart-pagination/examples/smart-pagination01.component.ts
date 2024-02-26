import { Component } from '@angular/core';
import { SmartPaginationComponent } from '../../../../../../../coreui-angular/src/lib/smart-pagination/smart-pagination.component';

@Component({
    selector: 'docs-smart-pagination01',
    templateUrl: './smart-pagination01.component.html',
    standalone: true,
    imports: [SmartPaginationComponent],
})
export class SmartPagination01Component {

public activePage = 2;

  setActivePage(page: number) {
    this.activePage = page;
  }

}

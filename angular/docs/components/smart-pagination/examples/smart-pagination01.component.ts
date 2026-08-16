import { Component, signal } from '@angular/core';
import { SmartPaginationComponent } from '@coreui/angular';

@Component({
  selector: 'docs-smart-pagination01',
  templateUrl: './smart-pagination01.component.html',
  imports: [SmartPaginationComponent]
})
export class SmartPagination01Component {
  readonly activePage = signal(2);
}

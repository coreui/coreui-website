import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageLinkDirective } from '../../../../../../../coreui-angular/src/lib/pagination/page-link/page-link.directive';
import { PageItemDirective } from '../../../../../../../coreui-angular/src/lib/pagination/page-item/page-item.directive';
import { PaginationComponent } from '../../../../../../../coreui-angular/src/lib/pagination/pagination/pagination.component';

@Component({
    selector: 'docs-pagination01-example',
    templateUrl: './pagination01.component.html',
    standalone: true,
    imports: [
        PaginationComponent,
        PageItemDirective,
        PageLinkDirective,
        RouterLink,
    ],
})
export class Pagination01Component {

  constructor() { }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageLinkDirective } from '../../../../../../../coreui-angular/src/lib/pagination/page-link/page-link.directive';
import { PageItemDirective } from '../../../../../../../coreui-angular/src/lib/pagination/page-item/page-item.directive';
import { PaginationComponent } from '../../../../../../../coreui-angular/src/lib/pagination/pagination/pagination.component';

@Component({
    selector: 'docs-pagination04-example',
    templateUrl: './pagination04.component.html',
    standalone: true,
    imports: [
        PaginationComponent,
        PageItemDirective,
        PageLinkDirective,
        RouterLink,
    ],
})
export class Pagination04Component {

  constructor() { }
}

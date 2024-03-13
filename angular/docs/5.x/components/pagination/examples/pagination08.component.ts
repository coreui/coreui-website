import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageItemDirective, PageLinkDirective, PaginationComponent } from '@coreui/angular';

@Component({
  selector: 'docs-pagination08-example',
  templateUrl: './pagination08.component.html',
  standalone: true,
  imports: [
    PaginationComponent,
    PageItemDirective,
    PageLinkDirective,
    RouterLink
  ]
})
export class Pagination08Component {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageItemDirective, PageLinkDirective, PaginationComponent } from '@coreui/angular';

@Component({
  selector: 'docs-pagination01-example',
  templateUrl: './pagination01.component.html',
  standalone: true,
  imports: [
    PaginationComponent,
    PageItemDirective,
    PageLinkDirective,
    RouterLink
  ]
})
export class Pagination01Component {}

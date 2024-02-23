import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItemComponent } from '@coreui/angular';

@Component({
  selector: 'docs-breadcrumb03-example',
  templateUrl: './breadcrumb03.component.html',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    RouterLink
  ]
})
export class Breadcrumb03Component {}

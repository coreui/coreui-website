import { Component } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItemComponent } from '@coreui/angular';

@Component({
  selector: 'docs-breadcrumb02-example',
  templateUrl: './breadcrumb02.component.html',
  standalone: true,
  imports: [BreadcrumbComponent, BreadcrumbItemComponent]
})
export class Breadcrumb02Component {}

import { Component } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItemComponent } from '@coreui/angular';

@Component({
  selector: 'docs-breadcrumb01-example',
  templateUrl: './breadcrumb01.component.html',
  standalone: true,
  imports: [BreadcrumbComponent, BreadcrumbItemComponent]
})
export class Breadcrumb01Component {}

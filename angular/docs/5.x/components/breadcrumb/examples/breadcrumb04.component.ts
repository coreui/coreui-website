import { Component } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItemComponent } from '@coreui/angular';

@Component({
  selector: 'docs-breadcrumb04-example',
  templateUrl: './breadcrumb04.component.html',
  standalone: true,
  imports: [BreadcrumbComponent, BreadcrumbItemComponent]
})
export class Breadcrumb04Component {}

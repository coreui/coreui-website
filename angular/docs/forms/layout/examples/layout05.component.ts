import { Component } from '@angular/core';
import { ColComponent, ColDirective, FormControlDirective, FormLabelDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-layout05',
  templateUrl: './layout05.component.html',
  imports: [RowComponent, ColDirective, FormLabelDirective, ColComponent, FormControlDirective]
})
export class Layout05Component {}

import { Component } from '@angular/core';
import { ColComponent, FormControlDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-layout06',
  templateUrl: './layout06.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, FormControlDirective]
})
export class Layout06Component {}

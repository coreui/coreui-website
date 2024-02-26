import { Component } from '@angular/core';
import { ColComponent, FormControlDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-layout01',
  templateUrl: './layout01.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, FormControlDirective]
})
export class Layout01Component {}

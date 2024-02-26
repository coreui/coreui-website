import { Component } from '@angular/core';
import { ColComponent, FormControlDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-layout02',
  templateUrl: './layout02.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, FormControlDirective]
})
export class Layout02Component {}

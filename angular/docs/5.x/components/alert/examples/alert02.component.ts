import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent, AlertLinkDirective } from '@coreui/angular';

@Component({
  selector: 'docs-alert02-example',
  templateUrl: './alert02.component.html',
  standalone: true,
  imports: [
    AlertComponent,
    AlertLinkDirective,
    RouterLink
  ]
})
export class Alert02Component {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent, AlertLinkDirective } from '@coreui/angular';

@Component({
  selector: 'docs-alert02-example',
  templateUrl: './alert02.component.html',
  imports: [AlertComponent, AlertLinkDirective, RouterLink]
})
export class Alert02Component {}

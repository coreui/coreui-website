import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective,
  ColDirective,
  PlaceholderAnimationDirective,
  PlaceholderDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-placeholders01',
  templateUrl: './placeholders01.component.html',
  imports: [
    CardComponent,
    CardImgDirective,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective,
    ColDirective,
    RouterLink,
    PlaceholderAnimationDirective,
    PlaceholderDirective
  ],
  host: { class: 'd-flex justify-content-around p-3' }
})
export class Placeholders01Component {}

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
  PlaceholderDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-placeholders01',
  templateUrl: './placeholders01.component.html',
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardImgDirective, CardBodyComponent, CardTitleDirective, CardTextDirective, ButtonDirective, ColDirective, RouterLink, PlaceholderAnimationDirective, PlaceholderDirective]
})
export class Placeholders01Component {}

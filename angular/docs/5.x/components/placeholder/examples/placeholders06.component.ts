import { Component } from '@angular/core';
import { BgColorDirective, ColDirective, PlaceholderAnimationDirective, PlaceholderDirective } from '@coreui/angular';

@Component({
  selector: 'docs-placeholders06',
  templateUrl: './placeholders06.component.html',
  styleUrls: ['./placeholders06.component.scss'],
  standalone: true,
  imports: [PlaceholderAnimationDirective, ColDirective, PlaceholderDirective, BgColorDirective]
})
export class Placeholders06Component {}

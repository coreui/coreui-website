import { Component, OnInit } from '@angular/core';
import { BgColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/bg-color.directive';
import { PlaceholderDirective } from '../../../../../../../coreui-angular/src/lib/placeholder/placeholder.directive';
import { ColDirective } from '../../../../../../../coreui-angular/src/lib/grid/col.directive';
import { PlaceholderAnimationDirective } from '../../../../../../../coreui-angular/src/lib/placeholder/placeholder-animation.directive';

@Component({
    selector: 'docs-placeholders06',
    templateUrl: './placeholders06.component.html',
    styleUrls: ['./placeholders06.component.scss'],
    standalone: true,
    imports: [PlaceholderAnimationDirective, ColDirective, PlaceholderDirective, BgColorDirective]
})
export class Placeholders06Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

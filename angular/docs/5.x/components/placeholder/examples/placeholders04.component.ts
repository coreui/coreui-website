import { Component, OnInit } from '@angular/core';
import { BgColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/bg-color.directive';
import { PlaceholderDirective } from '../../../../../../../coreui-angular/src/lib/placeholder/placeholder.directive';
import { ColDirective } from '../../../../../../../coreui-angular/src/lib/grid/col.directive';

@Component({
    selector: 'docs-placeholders04',
    templateUrl: './placeholders04.component.html',
    styleUrls: ['./placeholders04.component.scss'],
    standalone: true,
    imports: [ColDirective, PlaceholderDirective, BgColorDirective]
})
export class Placeholders04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

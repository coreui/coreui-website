import { Component, OnInit } from '@angular/core';
import { PlaceholderDirective } from '../../../../../../../coreui-angular/src/lib/placeholder/placeholder.directive';
import { ColDirective } from '../../../../../../../coreui-angular/src/lib/grid/col.directive';

@Component({
    selector: 'docs-placeholders03',
    templateUrl: './placeholders03.component.html',
    styleUrls: ['./placeholders03.component.scss'],
    standalone: true,
    imports: [ColDirective, PlaceholderDirective]
})
export class Placeholders03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

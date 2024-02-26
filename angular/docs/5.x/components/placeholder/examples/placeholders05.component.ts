import { Component, OnInit } from '@angular/core';
import { PlaceholderDirective } from '../../../../../../../coreui-angular/src/lib/placeholder/placeholder.directive';
import { ColDirective } from '../../../../../../../coreui-angular/src/lib/grid/col.directive';

@Component({
    selector: 'docs-placeholders05',
    templateUrl: './placeholders05.component.html',
    styleUrls: ['./placeholders05.component.scss'],
    standalone: true,
    imports: [ColDirective, PlaceholderDirective]
})
export class Placeholders05Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

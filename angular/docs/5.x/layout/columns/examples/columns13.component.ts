import { Component, OnInit } from '@angular/core';
import { ColDirective } from '../../../../../../../coreui-angular/src/lib/grid/col.directive';

@Component({
    selector: 'docs-columns13',
    templateUrl: './columns13.component.html',
    styleUrls: ['./columns13.component.scss'],
    standalone: true,
    imports: [ColDirective]
})
export class Columns13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

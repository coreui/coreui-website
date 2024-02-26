import { Component, OnInit } from '@angular/core';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';

@Component({
    selector: 'docs-columns12',
    templateUrl: './columns12.component.html',
    styleUrls: ['./columns03.component.scss'],
    standalone: true,
    imports: [ColComponent]
})
export class Columns12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

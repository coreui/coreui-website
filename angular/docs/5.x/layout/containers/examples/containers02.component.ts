import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';

@Component({
    selector: 'docs-containers02',
    templateUrl: './containers02.component.html',
    styleUrls: ['./containers02.component.scss'],
    standalone: true,
    imports: [ContainerComponent]
})
export class Containers02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

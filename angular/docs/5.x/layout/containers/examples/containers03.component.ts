import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';

@Component({
    selector: 'docs-containers03',
    templateUrl: './containers03.component.html',
    styleUrls: ['./containers01.component.scss'],
    standalone: true,
    imports: [ContainerComponent]
})
export class Containers03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

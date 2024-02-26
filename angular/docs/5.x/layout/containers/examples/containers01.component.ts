import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';

@Component({
    selector: 'docs-containers01',
    templateUrl: './containers01.component.html',
    styleUrls: ['./containers02.component.scss'],
    standalone: true,
    imports: [ContainerComponent]
})
export class Containers01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

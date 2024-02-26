import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { PlaceholderDirective } from '../../../../../../../coreui-angular/src/lib/placeholder/placeholder.directive';
import { ColDirective } from '../../../../../../../coreui-angular/src/lib/grid/col.directive';

@Component({
    selector: 'docs-placeholders02',
    templateUrl: './placeholders02.component.html',
    styleUrls: ['./placeholders02.component.scss'],
    standalone: true,
    imports: [ColDirective, PlaceholderDirective, ButtonDirective]
})
export class Placeholders02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

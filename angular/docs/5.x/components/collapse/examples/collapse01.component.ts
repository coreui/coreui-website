import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CollapseDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-collapse01',
  templateUrl: './collapse01.component.html',
  styleUrls: ['./collapse01.component.scss'],
  standalone: true,
  imports: [ButtonDirective, CollapseDirective, TextColorDirective, CardComponent, CardBodyComponent]
})
export class Collapse01Component {

  visible = false;

  toggleCollapse(): void {
    this.visible = !this.visible;
  }
}

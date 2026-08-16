import { Component } from '@angular/core';
import { Tabs2Module } from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'docs-tabs01',
  templateUrl: './tabs01.component.html',
  styleUrls: ['./tabs01.component.scss'],
  imports: [Tabs2Module, IconDirective, IconDirective]
})
export class Tabs01Component {
  cilHome = cilHome;

  handleChange($event: string | number | undefined) {
    console.log('handleChange', $event);
  }
}

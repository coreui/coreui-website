import { Component } from '@angular/core';
import {
  AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  TemplateIdDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-accordion01-example',
  templateUrl: './accordion01.component.html',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionItemComponent,
    TemplateIdDirective,
    AccordionButtonDirective
  ]
})
export class Accordion01Component {

  items = [1, 2, 3, 4];

}

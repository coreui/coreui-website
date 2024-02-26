import { Component } from '@angular/core';
import {
  AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  TemplateIdDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-accordion02-example',
  templateUrl: './accordion02.component.html',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionItemComponent,
    TemplateIdDirective,
    AccordionButtonDirective
  ]
})
export class Accordion02Component {

  items = [1, 2, 3, 4];

}

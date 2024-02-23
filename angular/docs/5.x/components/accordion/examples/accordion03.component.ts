import { Component } from '@angular/core';
import {
  AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  TemplateIdDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-accordion03-example',
  templateUrl: './accordion03.component.html',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionItemComponent,
    TemplateIdDirective,
    AccordionButtonDirective
  ]
})
export class Accordion03Component {

  items = [1, 2, 3, 4];

}

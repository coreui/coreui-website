import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-card17',
  templateUrl: './card17.component.html',
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective,
    TabsListComponent,
    TabDirective,
    TabsContentComponent,
    TabPanelComponent,
    TabsComponent,
    NgTemplateOutlet
  ]
})
export class Card17Component {
  tabs = ['Active', 'List', 'Disabled'];
}

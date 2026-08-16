import { Component, signal } from '@angular/core';
import {
  ColComponent,
  FormLabelDirective,
  MultiSelectComponent,
  MultiSelectOptionComponent,
  RowComponent
} from '@coreui/angular';
import { cifDe, cifEs, cifGb, cifPl, cifUs } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'docs-multi-select19',
  imports: [
    RowComponent,
    ColComponent,
    MultiSelectComponent,
    MultiSelectOptionComponent,
    IconDirective,
    FormLabelDirective
  ],
  templateUrl: './multi-select19.component.html'
})
export class MultiSelect19Component {
  readonly flags: Record<string, string[]> = {
    de: cifDe,
    es: cifEs,
    gb: cifGb,
    pl: cifPl,
    us: cifUs
  };

  readonly cities = signal<string[]>([]);

  readonly countries = [
    {
      value: 'pl',
      label: 'Poland',
      cities: ['Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań']
    },
    {
      value: 'de',
      label: 'Germany',
      cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt']
    },
    {
      value: 'us',
      label: 'United States',
      cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
    },
    {
      value: 'es',
      label: 'Spain',
      cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza']
    },
    {
      value: 'gb',
      label: 'United Kingdom',
      cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool']
    }
  ];

  handleCountryChange(value: string) {
    // console.log(value);
    const cities = this.countries.find((c) => c.value === value)?.cities ?? [];
    this.cities.set(cities);
  }

  handleCityChange(value: string) {
    // console.log(value);
  }
}

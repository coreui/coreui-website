import { Component, signal } from '@angular/core';
import { AutocompleteDirective, ColComponent, FormLabelDirective, RowComponent } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { cifDe, cifEs, cifGb, cifPl, cifUs } from '@coreui/icons';

@Component({
  selector: 'docs-autocomplete15',
  imports: [AutocompleteDirective, ColComponent, FormLabelDirective, RowComponent, IconDirective],
  templateUrl: './autocomplete15.component.html'
})
export class Autocomplete15Component {
  readonly flags: Record<string, string[]> = {
    de: cifDe,
    es: cifEs,
    gb: cifGb,
    pl: cifPl,
    us: cifUs
  };

  readonly cities = [
    {
      label: 'Germany',
      value: 'de',
      options: [
        {
          label: 'Saarbrücken'
        },
        {
          label: 'Berlin'
        },
        {
          label: 'München'
        }
      ]
    },
    {
      label: 'Spain',
      value: 'es',
      options: [
        {
          label: 'Madrid'
        },
        {
          label: 'Alicante'
        },
        {
          label: 'Huesca'
        }
      ]
    },
    {
      label: 'United Kingdom',
      value: 'gb',
      options: [
        {
          label: 'Liverpool'
        },
        {
          label: 'London'
        },
        {
          label: 'Manchester'
        }
      ]
    },
    {
      label: 'United States',
      value: 'us',
      options: [
        {
          label: 'Austin'
        },
        {
          label: 'Chicago'
        },
        {
          label: 'Los Angeles'
        }
      ]
    }
  ];

  readonly countries = this.cities.map(({ label, value }) => ({ label, value }));

  readonly filteredCities = signal(this.cities);

  handleOptionChange(country: any) {
    if (country === null) {
      this.filteredCities.set(this.cities);
      return;
    }
    const match = this.cities.find((c) => c.value === country?.value);
    this.filteredCities.set(match ? [match] : this.cities);
  }
}

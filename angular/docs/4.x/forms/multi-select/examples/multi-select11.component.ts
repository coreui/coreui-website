import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

import { cilPaperclip } from '@coreui/icons';
import { OptionsService } from './options.service';

@Component({
  selector: 'docs-multi-select11',
  templateUrl: './multi-select11.component.html',
  providers: [OptionsService],
})
export class MultiSelect11Component {
  icons = { cilPaperclip };

  options;
  readonly filteredOptions$ = new BehaviorSubject<any[]>([]);
  readonly searchValue$ = new Subject<string>();

  formGroup = new FormGroup({
    sampleSelect: new FormControl<string[]>(['4']),
  });

  constructor(private optionsService: OptionsService) {

    this.options = optionsService.users.map((option) => ({
      value: option.id,
      label: option.last_name,
    }));

    this.filteredOptions$.next([...this.options]);

    this.searchValue$.subscribe((next) => {
      const filtered = this.options.filter((option) =>
        option.label.toLowerCase().startsWith(next.trimStart().toLowerCase()),
      );
      this.filteredOptions$.next([...filtered]);
    });
  }
}

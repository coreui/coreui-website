import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

import { cilPaperclip } from '@coreui/icons';
import { OptionsService } from './options.service';
import { MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'docs-multi-select11',
  templateUrl: './multi-select11.component.html',
  providers: [OptionsService],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MultiSelectComponent,
    MultiSelectOptionComponent,
    IconDirective,
    AsyncPipe,
    JsonPipe
  ]
})
export class MultiSelect11Component {
  icons = { cilPaperclip };

  options;
  readonly filteredOptions$ = new BehaviorSubject<any[]>([]);
  readonly searchValue$ = new Subject<string>();

  formGroup = new FormGroup({
    sampleSelect: new FormControl<string[]>(['4'])
  });

  constructor(private optionsService: OptionsService) {

    this.options = optionsService.users.map((option) => ({
      value: option.id,
      label: option.last_name
    }));

    this.filteredOptions$.next([...this.options]);

    this.searchValue$.subscribe((next) => {
      const filtered = this.options.filter((option) =>
        option.label.toLowerCase().startsWith(next.trimStart().toLowerCase())
      );
      this.filteredOptions$.next([...filtered]);
    });
  }
}

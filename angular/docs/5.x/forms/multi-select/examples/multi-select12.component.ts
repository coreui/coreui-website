import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { cilPaperclip } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { IOption, MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';
import { OptionsService } from './options.service';

@Component({
  selector: 'docs-multi-select12',
  templateUrl: './multi-select12.component.html',
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
export class MultiSelect12Component {
  icons = { cilPaperclip };

  options;
  readonly options$ = new BehaviorSubject<any[]>([]);

  formGroup = new FormGroup({
    sampleSelect: new FormControl<string[]>(['4'])
  });

  searchFn = (option: IOption, searchValue: string): boolean =>
    option.label?.toLowerCase().startsWith(searchValue.trimStart().toLowerCase()) ?? true;

  constructor(private optionsService: OptionsService) {

    this.options = optionsService.users.map((option) => ({
      value: option.id,
      label: option.last_name
    }));

    this.options$.next([...this.options]);

  }
}

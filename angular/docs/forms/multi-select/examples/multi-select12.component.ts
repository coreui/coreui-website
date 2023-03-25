import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

import { cilPaperclip } from '@coreui/icons';
import { IOption } from '@coreui/angular';
import { OptionsService } from './options.service';

@Component({
  selector: 'docs-multi-select12',
  templateUrl: './multi-select12.component.html',
  providers: [OptionsService],
})
export class MultiSelect12Component {
  icons = { cilPaperclip };

  options;
  readonly options$ = new BehaviorSubject<any[]>([]);

  formGroup = new FormGroup({
    sampleSelect: new FormControl<string[]>(['4']),
  });

  searchFn = (option: IOption, searchValue: string): boolean =>
    option.label?.toLowerCase().startsWith(searchValue.trimStart().toLowerCase()) ?? true;

  constructor(private optionsService: OptionsService) {

    this.options = optionsService.users.map((option) => ({
      value: option.id,
      label: option.last_name,
    }));

    this.options$.next(this.options)

  }
}

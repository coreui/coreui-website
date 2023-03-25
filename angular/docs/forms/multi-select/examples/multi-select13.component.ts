import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

import { IOption } from '@coreui/angular';
import { OptionsRemoteService } from './optionsRemote.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'docs-multi-select13',
  templateUrl: './multi-select13.component.html',
  providers: [OptionsRemoteService]
})
export class MultiSelect13Component {

  options$: Observable<IOption[]>;
  readonly searchValue$ = new BehaviorSubject<string>('');

  formGroup = new FormGroup({
    sampleSelect: new FormControl<string[]>(['6'])
  });

  searchFn = (option: IOption, searchValue: string): boolean =>
    option.label?.toLowerCase().startsWith(searchValue.trimStart().toLowerCase()) ?? true;

  constructor(
    private optionsService: OptionsRemoteService
  ) {
    this.options$ = this.optionsService.search(this.searchValue$).pipe(
      take(1),
      map(next => {
        return next.map(option => {
          const value = option.id.toString().trim();
          const label = option.last_name;
          const text = `${option.last_name} [${value}]`;
          const disabled = option.id === '6';
          return { value, label, text, disabled };
        });
      })
    );
  }
}

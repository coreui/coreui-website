import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { IOption, MultiSelectComponent } from '@coreui/angular';
import { OptionsRemoteService } from './optionsRemote.service';

@Component({
  selector: 'docs-multi-select13',
  templateUrl: './multi-select13.component.html',
  providers: [OptionsRemoteService],
  imports: [ReactiveFormsModule, JsonPipe, AsyncPipe, MultiSelectComponent]
})
export class MultiSelect13Component {
  readonly #optionsService = inject(OptionsRemoteService);

  readonly searchValue$ = new BehaviorSubject<string>('');
  readonly loading = signal(true);

  readonly options$ = this.#optionsService.search(this.searchValue$).pipe(
    tap(() => {
      this.loading.set(true);
    }),
    take(1),
    map((next) => {
      return next.map((option) => {
        const value = option.id.toString().trim();
        const label = option.last_name;
        const text = `${option.last_name} [${value}]`;
        const disabled = option.id === '6';
        return { value, label, text, disabled };
      });
    }),
    tap(() => {
      this.loading.set(false);
    })
  );

  readonly formGroup = new FormGroup({
    sampleSelect: new FormControl<string[]>(['6'])
  });

  searchFn = (option: IOption, searchValue: string): boolean =>
    option.label?.toLowerCase().startsWith(searchValue.trimStart().toLowerCase()) ?? true;
}

import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, NgStyle } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { MultiSelectComponent, MultiSelectOptionComponent, TemplateIdDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { cilFolderOpen, cilPaperclip } from '@coreui/icons';
import { OptionsRemoteService } from './optionsRemote.service';

@Component({
  selector: 'docs-multi-select14',
  templateUrl: './multi-select14.component.html',
  providers: [OptionsRemoteService],
  imports: [
    AsyncPipe,
    IconDirective,
    JsonPipe,
    MultiSelectComponent,
    MultiSelectOptionComponent,
    NgStyle,
    ReactiveFormsModule,
    TemplateIdDirective
  ]
})
export class MultiSelect14Component {
  readonly #optionsService = inject(OptionsRemoteService);

  readonly icons = { cilPaperclip, cilFolderOpen };

  readonly searchValue$ = new BehaviorSubject<string>('');
  readonly loading = signal(true);

  readonly formGroup = new FormGroup({
    sampleSelect: new FormControl<number[]>([200])
  });

  readonly options$ = this.#optionsService.search(this.searchValue$).pipe(
    tap(() => {
      this.loading.set(true);
    }),
    map((next) => {
      return next.map((option) => {
        const value = parseInt(option.id);
        const label = option.last_name;
        const text = `${option.last_name} [${value}]`;
        return { value, label, text };
      });
    }),
    tap(() => {
      this.loading.set(false);
    })
  );

  handleValueChange($event: any) {
    console.log('handleValueChange', $event);
  }
}

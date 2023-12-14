import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, NgStyle } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IOption, MultiSelectComponent, MultiSelectOptionComponent, TemplateIdDirective } from '@coreui/angular';
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
  ],
  standalone: true
})
export class MultiSelect14Component {
  icons = { cilPaperclip, cilFolderOpen };

  options$: Observable<IOption[]>;
  readonly searchValue$ = new BehaviorSubject<string>('');

  formGroup = new FormGroup({
    sampleSelect: new FormControl<string[]>(['200'])
  });

  constructor(
    private optionsService: OptionsRemoteService
  ) {
    this.options$ = this.optionsService.search(this.searchValue$).pipe(
      map(next => {
        return next.map(option => {
          const value = option.id.toString().trim();
          const label = option.last_name;
          const text = `${option.last_name} [${value}]`;
          return { value, label, text };
        });
      })
    );
  }

  handleValueChange($event: any) {
    console.log('handleValueChange', $event);
  }
}

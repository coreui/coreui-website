import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  AutocompleteDirective,
  AutocompleteOption,
  BadgeComponent,
  ButtonDirective,
  ColComponent,
  FormLabelDirective,
  RowComponent
} from '@coreui/angular';
import { UsersService } from './users.service';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'docs-autocomplete16',
  imports: [
    AutocompleteDirective,
    BadgeComponent,
    FormLabelDirective,
    JsonPipe,
    ReactiveFormsModule,
    ButtonDirective,
    RowComponent,
    ColComponent
  ],
  templateUrl: './autocomplete16.component.html'
})
export class Autocomplete16Component {
  readonly #usersService = inject(UsersService);

  protected formGroup = new FormGroup({
    userName: new FormControl<string>('Barbara')
  });

  readonly searchName = signal<string | undefined>(undefined);

  readonly usersResource = this.#usersService.getUsers(this.searchName);

  #users: AutocompleteOption[] = [];

  readonly users = computed(() => {
    const usersResource = this.usersResource;
    if (!usersResource.isLoading()) {
      const rawUsers = usersResource?.value()?.records?.map((user) => user.first_name as AutocompleteOption) ?? [];
      this.#users = [...new Set(rawUsers)];
    }
    return this.#users;
  });
  readonly error = computed(() => this.usersResource?.error() as HttpErrorResponse);
  readonly loading = computed(() => this.usersResource?.isLoading());

  // readonly #usersEffect = effect(() => {
  //   console.log('Users:', this.users());
  //   console.log('Loading:', this.loading());
  //   console.log('Error:', this.error());
  // });

  protected handleOptionChange($event: AutocompleteOption | null) {
    console.log('* handleOptionChange', $event);
  }

  protected handleValueChange($event: string | number | null | undefined) {
    console.log('* handleValueChange', $event);
  }

  protected handleInputChange($event: string) {
    console.log('* handleInputChange', $event);
    this.searchName.set($event);
  }

  protected changeValue() {
    const findName = 'Markus';
    this.searchName.set(findName);
    this.formGroup.get('userName')?.setValue(findName);
  }

  protected resetForm() {
    this.formGroup.reset();
  }

  constructor() {
    this.formGroup.valueChanges
      .pipe(
        map((value) => value.userName),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        console.log('@ valueChange', value);
      });
  }
}

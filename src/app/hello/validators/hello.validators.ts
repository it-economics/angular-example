import {AbstractControl, ValidatorFn} from '@angular/forms';

export namespace HelloValidators {
  export function forbiddenNameValidator(forbiddenName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = forbiddenName && forbiddenName === control.value;
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }
}

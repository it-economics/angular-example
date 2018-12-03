import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appForbiddenNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true}]

})
export class ForbiddenNameValidatorDirective implements Validator {

  @Input('appForbiddenNameValidator')
  fordbiddenName: string;

  constructor() {
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.fordbiddenName && control.value === this.fordbiddenName) {
      return {'forbiddenName': {value: control.value}};
    }
    return null;
  }

}

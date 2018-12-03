import {AbstractControl} from '@angular/forms';
import {ForbiddenNameValidatorDirective} from './forbidden-name-validator.directive';

describe('ForbiddenNameValidatorDirective', () => {
  let directive: ForbiddenNameValidatorDirective;

  beforeEach(() => {
    directive = new ForbiddenNameValidatorDirective();

  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should check for fobidden name', () => {
    directive.fordbiddenName = 'Alex';
    const control = {value: 'Alex'}as AbstractControl;
    const validationErrors = directive.validate(control);
    expect(validationErrors.forbiddenName).toEqual({value: 'Alex'});
  });

  it('should check nothing when no forbidden Name is specified', () => {
    const control = {value: 'Alex'}as AbstractControl;
    const validationErrors = directive.validate(control);
    expect(validationErrors).toBeNull();
  });

  it('should no throw an error if an valid input is given', () => {
    directive.fordbiddenName = 'Alex';
    const control = {value: 'Valid'}as AbstractControl;
    const validationErrors = directive.validate(control);
    expect(validationErrors).toBeNull();
  });
});

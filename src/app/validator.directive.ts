import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[passwordValidator]',
  providers: [
      { provide: NG_VALIDATORS,
        useExisting: ValidatorDirective,
         multi: true
      }
  ]
})
export class ValidatorDirective implements Validator {
  @Input() passwordValidator: any = '';
    validate(control: AbstractControl): { [key: string]: any | null } {
      const controlToCompare = control.parent.get(this.passwordValidator);
      if (controlToCompare && controlToCompare.value !== control.value) {
        return {'notEqual' : true};
      }
     return null;
    }
}

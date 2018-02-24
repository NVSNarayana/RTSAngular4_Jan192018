import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class EmpValidationsService {

  constructor() { }
  setFormValidations(): FormGroup {
    return new FormGroup({
      'ename': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'age': new FormControl(null, [Validators.required, this.ageRageValidation]),
      'salary': new FormControl(),
      'address': new FormControl(null, [Validators.required]),
      'higherQualifiation': new FormControl(null, Validators.required)
    }, /*{ updateOn: "submit" }*/)//updateon default is change. we can applay change/blur/submit
  }

  ageRageValidation(ctrl: FormControl) {
    if (+ctrl.value >= 20 && +ctrl.value <= 50) {
      return null;
    }
    else {
      return { agerange: true }
    }

  }


}

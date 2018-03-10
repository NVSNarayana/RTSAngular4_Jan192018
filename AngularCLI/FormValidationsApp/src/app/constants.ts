import { FormGroup, FormControl, Validators } from '@angular/forms';

export class Constants {
    static setFormValidations(): FormGroup {
        return new FormGroup({
            'ename': new FormControl(null, [Validators.required, Validators.minLength(5)]),
            'age': new FormControl(null, [Validators.required, Constants.ageRageValidation]),
            'salary': new FormControl(),
            'address': new FormControl(null, [Validators.required]),
            'higherQualifiation': new FormControl(null, Validators.required)
        }, /*{ updateOn: "submit" }*/)//updateon default is change. we can applay change/blur/submit
    }
    static ageRageValidation(ctrl: FormControl) {
        if (+ctrl.value >= 20 && +ctrl.value <= 50) {
            return null;
        }
        else {
            return { agerange: true }
        }

    }
}

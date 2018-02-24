import { FormGroup, FormControl, Validators } from '@angular/forms';

export const Constants = {
    empValidations: function () {
        return new FormGroup({
            'ename': new FormControl(null, [Validators.required, Validators.minLength(5)]),
            'age': new FormControl(null, [Validators.required]),
            'salary': new FormControl(),
            'address': new FormControl(null, [Validators.required]),
            'higherQualifiation': new FormControl(null, Validators.required)
        }, /*{ updateOn: "submit" }*/)//updateon default is change. we can applay change/blur/submit
    }

}

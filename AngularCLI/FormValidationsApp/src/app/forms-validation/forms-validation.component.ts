import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpValidationsService } from '../validations/emp-validations.service';
import { Constants } from '../constants';
@Component({
  selector: 'app-forms-validation',
  templateUrl: './forms-validation.component.html',
  styleUrls: ['./forms-validation.component.css']
})
export class FormsValidationComponent implements OnInit {
  qualifications = [{ text: "SSLC", value: 1000 }, { text: "PUC", value: 1001 }, { text: "Graduate", value: 1002 }, { text: "PG", value: 1003 }];
  empFormGroup: FormGroup
  constructor(private empValidationSvc: EmpValidationsService) { }

  ngOnInit() {
    //this.empFormGroup = this.empValidationSvc.setFormValidations();
    this.empFormGroup = Constants.setFormValidations();
    
  }

  // setFormValidations() {
  //   this.empFormGroup = new FormGroup({
  //     'ename': new FormControl(null, [Validators.required, Validators.minLength(5)]),
  //     'age': new FormControl(null, [Validators.required, this.ageRageValidation]),
  //     'salary': new FormControl(),
  //     'address': new FormControl(null, [Validators.required]),
  //     'higherQualifiation': new FormControl(null, Validators.required)
  //   })
  // }

  // ageRageValidation(ctrl: FormControl) {
  //   if (+ctrl.value >= 20 && +ctrl.value <= 50) {
  //     return null;
  //   }
  //   else {
  //     return { agerange: true }
  //   }

  // }
  onSubmit() {
    if (!this.empFormGroup.invalid) {
      console.log("From Submitted");

    }
  }
}

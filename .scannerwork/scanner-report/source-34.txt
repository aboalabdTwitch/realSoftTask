import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validation.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  

  ngOnInit(): void {
  }

  public frmSignup: FormGroup;

   constructor(private fb: FormBuilder) {
     this.frmSignup = this.createSignupForm();
   }
 
   createSignupForm(): FormGroup {
     return this.fb.group(
       {
         password: [
           null,
           Validators.compose([
             Validators.required,
             // check whether the entered password has a number
             CustomValidators.patternValidator(/\d/, {
               hasNumber: true
             }),
             // check whether the entered password has upper case letter
             CustomValidators.patternValidator(/[A-Z]/, {
               hasCapitalCase: true
             }),
             // check whether the entered password has a lower case letter
             CustomValidators.patternValidator(/[a-z]/, {
               hasSmallCase: true
             }),
             // check whether the entered password has a special character
             CustomValidators.patternValidator(
               /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
               {
                 hasSpecialCharacters: true
               }
             ),
             Validators.minLength(8)
           ])
         ],
         confirmPassword: [null, Validators.compose([Validators.required])]
       },
       {
         // check whether our password and confirm password match
         validator: CustomValidators.passwordMatchValidator
       }
     );
   }
 
   submit() {
     console.log(this.frmSignup.value);
   }

  

}

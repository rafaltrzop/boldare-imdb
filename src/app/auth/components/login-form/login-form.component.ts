import { Component, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { Credentials } from '@app/auth/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  hidePassword = true;
  form: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  @Output() submitted = new EventEmitter<Credentials>();

  get login(): AbstractControl {
    return this.form.get('login');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}

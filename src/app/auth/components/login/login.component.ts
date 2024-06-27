import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BackendErrorMessagesComponent } from '../../../shared/components/backend-error-messages/backend-error-messages.component';
import { combineLatest } from 'rxjs';
import { selectIsSubmitted } from '../../store/selectors';
import { selectValidationErrors } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { AuthStateInterface } from '../../types/authState.interface';
import { AuthService } from '../../services/auth.service';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { authActions } from '../../store/action';

@Component({
  selector: 'mc-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, BackendErrorMessagesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    username: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required]
  });
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitted),
    backendErrors: this.store.select(selectValidationErrors)
  });

  constructor(private fb: FormBuilder,
              private store: Store<{auth: AuthStateInterface}>,
              private authService: AuthService
  ){}

  onSubmit() {
    const request: LoginRequestInterface = {
      user: this.form.getRawValue()
    };
    this.store.dispatch(authActions.login({request}));
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/action';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required]
  });

  constructor(private fb: FormBuilder,
              private store: Store
  ){}

  onSubmit() {
    console.log('form', this.form.getRawValue());
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    };
    this.store.dispatch(register({request}));
  }
}

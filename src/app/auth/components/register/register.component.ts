import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  constructor(private fb: FormBuilder){}

  onSubmit() {
    console.log('form', this.form.getRawValue());
  }
}

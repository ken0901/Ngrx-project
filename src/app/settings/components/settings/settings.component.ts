import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { combineLatest, filter, Subscription } from 'rxjs';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { selectIsSubmitted, selectValidationErrors } from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from "../../../shared/components/backend-error-messages/backend-error-messages.component";
import { CurrentUserRequestInterface } from '../../../shared/types/currentUserRequest.interface';
import { authActions } from '../../../auth/store/action';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, BackendErrorMessagesComponent, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit, OnDestroy{
  form = this.fb.nonNullable.group({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  });
  currentUser?: CurrentUserInterface;
  data$ = combineLatest({
    isSubmitted: this.store.select(selectIsSubmitted),
    backendErrors: this.store.select(selectValidationErrors),
  });
  currentUserSubscription?:Subscription

  constructor(private fb: FormBuilder,
              private store: Store) {}

  ngOnInit(): void {
    this.store.pipe(
      select(selectCurrentUser),
      filter(Boolean)
    ).subscribe(currentUser => {
      this.currentUser = currentUser
      this.initializeForm()
    })
  }

  ngOnDestroy(): void {
    this.currentUserSubscription?.unsubscribe();
  }

  initializeForm(): void {
    if(!this.currentUser) {
      throw new Error('current user is not set');
    }
    this.form.patchValue({
       image: this.currentUser.image ?? '',
       username: this.currentUser.username,
       bio:this.currentUser.bio ?? '',
       email: this.currentUser.email,
       password: '',
    });
  }

  submit(): void {
    if(!this.currentUser) {
      throw new Error('current user is not set');
    }
    const currentUserRequest: CurrentUserRequestInterface = {
      user: {
        ...this.currentUser,
        ...this.form.getRawValue(),
      },
    }

    this.store.dispatch(authActions.updateCurrentUser({currentUserRequest}));
  }

  logout(): void {
    this.store.dispatch(authActions.logout());
  }
}

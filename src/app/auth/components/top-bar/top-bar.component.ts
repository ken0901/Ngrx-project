import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../store/reducers';
import { combineLatest } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink, CommonModule, NgIf],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  currentUser$ = this.store.select(selectCurrentUser);
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  });

  constructor(private store: Store){}
}

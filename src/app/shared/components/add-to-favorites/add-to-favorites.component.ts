import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-favorites.component.html',
  styleUrl: './add-to-favorites.component.css'
})
export class AddToFavoritesComponent {
  @Input() isFavorited: boolean = false;
  @Input() articleSlug: string = '';
  @Input() favoritesCount: number = 0;

  handleLike(): void {
    if(this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }

    this.isFavorited = !this.isFavorited;
  }
}

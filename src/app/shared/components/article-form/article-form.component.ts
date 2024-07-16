import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleFormValuesInterface } from './types/articleFormValues.interface';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css'
})
export class ArticleFormComponent {
  @Input() initialValues?: ArticleFormValuesInterface;
  @Input() isSubmitted: boolean = false;
  @Input() errors: BackendErrorsInterface | null = null;

  @Output() articleSubmit = new EventEmitter<ArticleFormValuesInterface>();
}

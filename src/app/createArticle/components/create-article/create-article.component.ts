import { Component } from '@angular/core';
import { ArticleFormValuesInterface } from '../../../shared/components/article-form/types/articleFormValues.interface';
import { ArticleFormComponent } from '../../../shared/components/article-form/article-form.component';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [ArticleFormComponent],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    console.log('onSubmit in create article', articleFormValues);
  }
}

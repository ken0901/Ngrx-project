import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ArticleInterface } from "../../shared/types/article.interface";
import { ArticleRequestInterface } from "../../shared/types/articleRequest.interface";
import { BackendErrorsInterface } from "../../shared/types/backendErrors.interface";

export const editArticleActions = createActionGroup({
    source: 'edit article',
    events: {
        'Get article': props<{slug: string}>(),
        'Get article success': props<{article: ArticleInterface}>(),
        'Get article failure': emptyProps(),

        'Edit article': props<{request: ArticleRequestInterface; slug: string}>(),
        'Edit article success': props<{article: ArticleInterface}>(),
        'Edit article failure': props<{errors: BackendErrorsInterface}>(),
    }
});
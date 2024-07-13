import { Route } from "@angular/router"
import { ArticleComponent } from "./components/article/article.component"
import * as articleEffects from './store/effects';
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { articleFeatureKey, articleReducer } from "./store/reducers";

export const routes: Route[] = [
    {
        path: '',
        component: ArticleComponent,
        providers: [
            provideEffects(articleEffects),
            provideState(articleFeatureKey, articleReducer),
        ]
    }
]
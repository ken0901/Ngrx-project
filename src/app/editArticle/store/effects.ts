import { inject } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, of, switchMap, tap } from "rxjs"
import { ArticleInterface } from "../../shared/types/article.interface"
import { Router } from "@angular/router"
import { editArticleActions } from "./actions"
import { HttpErrorResponse } from "@angular/common/http"
import { EditArticleService } from "../services/editArticle.service"
import { ArticleService as SharedArticleService } from "../../shared/services/article.service"

export const getArticleEffect = createEffect((
    actions$ = inject(Actions),
    articleService = inject(SharedArticleService),
) => {
    return actions$.pipe(
        ofType(editArticleActions.getArticle),
        switchMap(({slug}) => {
            return articleService.getArticle(slug).pipe(
                map((article: ArticleInterface) => {
                    return editArticleActions.getArticleSuccess({article})
                }), 
                catchError(() => {
                    return of(editArticleActions.getArticleFailure())
                })
            )
        })
    )
}, {functional: true});

export const editArticleEffect = createEffect((
    actions$ = inject(Actions),
    editArticleService = inject(EditArticleService),
) => {
    return actions$.pipe(
        ofType(editArticleActions.editArticle),
        switchMap(({slug,request}) => {
            return editArticleService.editArticle(slug,request).pipe(
                map((article: ArticleInterface) => {
                    return editArticleActions.editArticleSuccess({article})
                }), 
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(editArticleActions.editArticleFailure({errors: errorResponse.error.errors}))
                })
            )
        })
    )
}, {functional: true});

export const redirectAfterEditEffect = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(editArticleActions.editArticleSuccess),
            tap(({article}) => {
                router.navigate(['/articles', article.slug])
            })
        )
    },
    {functional: true, dispatch: false}
)
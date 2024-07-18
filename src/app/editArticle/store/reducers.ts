import { createFeature, createReducer, on } from "@ngrx/store";
import { routerNavigatedAction } from "@ngrx/router-store";
import { EditArticleStateInterface } from "../types/editArticleState.interface";
import { editArticleActions } from "./actions";

const initialState: EditArticleStateInterface = {
    article: null,
    isLoading: false,
    isSubmitted: false,
    validationErrors: null,
}

const editArticleFeature = createFeature({
    name:'editArticle',
    reducer: createReducer(
        initialState,
        on(editArticleActions.getArticle, (state) => ({...state, isLoading: true})),
        on(editArticleActions.getArticleSuccess, (state, action) => ({...state, isLoading: false, article: action.article})),
        on(editArticleActions.getArticleFailure, (state) => ({...state, isLoading: false})),

        on(editArticleActions.editArticle, (state) => ({...state, isSubmitted: true})),
        on(editArticleActions.editArticleSuccess, (state) => ({...state, isSubmitted: false})),
        on(editArticleActions.editArticleFailure, (state, action) => ({...state, isSubmitted: false, validationErrors: action.errors})),
        on(routerNavigatedAction, () => initialState)
    ),
})

export const {
    name: editArticleFeatureKey,
    reducer: editArticleReducer,
    selectIsLoading,
    selectArticle,
    selectIsSubmitted,
    selectValidationErrors,
} = editArticleFeature
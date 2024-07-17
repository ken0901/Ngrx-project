import { createFeature, createReducer, on } from "@ngrx/store";
import { routerNavigatedAction } from "@ngrx/router-store";
import { CreateArticleStateInterface } from "../types/createArticleState.interface";
import { createArticleActions } from "./actions";

const initialState: CreateArticleStateInterface = {
    isSubmitted: false,
    validationErrors: null,
}

const createArticleFeature = createFeature({
    name:'createArticle',
    reducer: createReducer(
        initialState,
        on(createArticleActions.createArticle, (state) => ({...state, isSubmitted: true})),
        on(createArticleActions.createArticleSuccess, (state) => ({...state, isSubmitted: false})),
        on(createArticleActions.createArticleFailure, (state, action) => ({...state, isSubmitted: false, validationErrors: action.errors})),
        on(routerNavigatedAction, () => initialState)
    ),
})

export const {
    name: createArticleFeatureKey,
    reducer: createArticleReducer,
    selectIsSubmitted,
    selectValidationErrors,
} = createArticleFeature
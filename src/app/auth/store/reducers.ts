import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./action";
import { routerNavigatedAction } from "@ngrx/router-store";

const initialState: AuthStateInterface = {
    isSubmitted: false,
    isLoading: false,
    currentUser: undefined,
    validationErrors: null,
}

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.register, state => ({
            ...state, 
            isSubmitted: true, 
            validationErrors: null
        })),
        on(authActions.registerSuccess, (state,action) => ({
            ...state, 
            isSubmitted: false, 
            currentUser: action.currentUser
        })),
        on(authActions.registerFailure, (state,action) => ({
            ...state, 
            isSubmitted: false, 
            validationErrors: action.errors
        })),

        on(authActions.login, state => ({
            ...state, 
            isSubmitted: true, 
            validationErrors: null
        })),
        on(authActions.loginSuccess, (state,action) => ({
            ...state, 
            isSubmitted: false, 
            currentUser: action.currentUser
        })),
        on(authActions.loginFailure, (state,action) => ({
            ...state, 
            isSubmitted: false, 
            validationErrors: action.errors
        })),

        on(authActions.getCurrentUser, state => ({
            ...state, 
            isLoading: true, 
        })),
        on(authActions.getCurrentUserSuccess, (state,action) => ({
            ...state, 
            isLoading: false, 
            currentUser: action.currentUser
        })),
        on(authActions.getCurrentUserFailure, (state) => ({
            ...state, 
            isLoading: false, 
            currentUser: null
        })),

        on(authActions.updateCurrentUserSuccess, (state,action) => ({
            ...state, 
            currentUser: action.currentUser
        })),

        on(routerNavigatedAction, (state) => ({...state, validationErrors: null})),
        on(authActions.logout, (state) => ({
            ...state,
            ...initialState,
            currentUser: null
        }))
    )
})

export const {
    name: authFeatureKey, 
    reducer: authReducer, 
    selectIsSubmitted,
    selectIsLoading,
    selectCurrentUser,
    selectValidationErrors
} = authFeature
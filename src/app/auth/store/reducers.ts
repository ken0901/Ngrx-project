import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./action";

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
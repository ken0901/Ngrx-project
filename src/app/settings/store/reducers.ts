import { createFeature, createReducer, on } from "@ngrx/store";
import { SettingsStateInterface } from "../types/settingsState.interface";
import { authActions } from "../../auth/store/action";
import { routerNavigatedAction } from "@ngrx/router-store";

const initialState: SettingsStateInterface = {
    isSubmitted: false,
    validationErrors: null
}

const settingsFeature = createFeature({
    name: 'settings',
    reducer: createReducer(
        initialState,
        on(authActions.updateCurrentUser, (state) => ({
            ...state, 
            isSubmitted:true
        })),
        on(authActions.updateCurrentUserSuccess, (state) => ({
            ...state, 
            isSubmitted:false
        })),
        on(authActions.updateCurrentUserFailure, (state,action) => ({
            ...state, 
            isSubmitted:false,
            validationErrors: action.errors
        })),
        on(routerNavigatedAction, () => initialState)
    )
})

export const {
    name: settingsFeatureKey,
    reducer: settingsReducer,
    selectValidationErrors,
    selectIsSubmitted,
} = settingsFeature
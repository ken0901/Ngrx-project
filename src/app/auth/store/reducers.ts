import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./action";

const initialState: AuthStateInterface = {
    isSubmitted: false,
}

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.register, state => ({...state, isSubmitted: true}))
    )
})

export const {name: authFeatureKey, reducer: authReducer, selectIsSubmitted} = authFeature
import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { register } from "./action";

const initialState: AuthStateInterface = {
    isSubmitted: false,
}

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(register, state => ({...state, isSubmitted: true}))
    )
})

export const {name: authFeatureKey, reducer: authReducer} = authFeature
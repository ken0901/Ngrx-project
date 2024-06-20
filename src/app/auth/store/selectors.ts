import { createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";

export const selectFeature = (state: {auth: AuthStateInterface}) => state.auth

export const selectIsSubmitted = createSelector(
    selectFeature,
    (state) => state.isSubmitted
)
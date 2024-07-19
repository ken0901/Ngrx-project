import { BackendErrorsInterface } from "../../shared/types/backendErrors.interface";

export interface SettingsStateInterface {
    isSubmitted: boolean;
    validationErrors: BackendErrorsInterface | null;
}
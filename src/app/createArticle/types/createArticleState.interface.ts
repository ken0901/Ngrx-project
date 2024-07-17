import { BackendErrorsInterface } from "../../shared/types/backendErrors.interface";

export interface CreateArticleStateInterface {
    isSubmitted: boolean;
    validationErrors: BackendErrorsInterface | null;
}
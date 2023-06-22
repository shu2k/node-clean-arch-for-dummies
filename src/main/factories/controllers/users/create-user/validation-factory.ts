import {ValidationComposite} from "@infrastructure/http/validations/ValidationComposite";
import {RequiredFieldValidation} from "@infrastructure/http/validations/RequiredFieldValidation";

export const makeCreateUserValidation = (): ValidationComposite => new ValidationComposite([
    new RequiredFieldValidation('firstName'),
    new RequiredFieldValidation('lastName'),
    new RequiredFieldValidation('email'),
    new RequiredFieldValidation('password')
], 'body')
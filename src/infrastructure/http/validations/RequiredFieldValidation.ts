import {Validation} from "@infrastructure/http/interfaces/Validation";
import {MissingParamError} from "@infrastructure/http/errors/MissingParamError";

export class RequiredFieldValidation implements Validation {
    constructor(private readonly fieldName: string) {
    }

    validate(input: any): Error | null {
        if (!input[this.fieldName]) {
            return new MissingParamError(this.fieldName)
        }
        return null
    }
}
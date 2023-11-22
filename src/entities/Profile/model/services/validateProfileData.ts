import { IProfile, ProfileValidationError } from '../types/profile'

export const validateProfileData = (profile: IProfile): ProfileValidationError[] | undefined => {
    const { firstname, lastname, age, country } = profile
    let errors: ProfileValidationError[] | undefined

    function addError (error: ProfileValidationError): void {
        if (!errors) {
            errors = []
        }

        errors.push(error)
    }

    if (!firstname) {
        addError(ProfileValidationError.EMPTY_FIRSTNAME)
    }

    if (!lastname) {
        addError(ProfileValidationError.EMPTY_LASTNAME)
    }

    if (age === undefined) {
        addError(ProfileValidationError.EMPTY_AGE)
    } else if (!Number.isInteger(age) || age < 0) {
        addError(ProfileValidationError.INVALID_AGE)
    }

    if (!country) {
        addError(ProfileValidationError.EMPTY_COUNTRY)
    }

    return errors
}

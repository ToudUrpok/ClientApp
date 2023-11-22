import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

export enum ProfileValidationError {
    EMPTY_FIRSTNAME = 'emptyFirstname',
    EMPTY_LASTNAME = 'emptyLastname',
    EMPTY_AGE = 'emptyAge',
    INVALID_AGE = 'invalidAge',
    EMPTY_COUNTRY = 'emptyCountry',
}

export interface IProfile {
    user_id: string
    firstname?: string
    lastname?: string
    age?: number
    country?: Country
    city?: string
    currency?: Currency
    avatar?: string
}

export interface ProfileForm {
    firstname?: string
    lastname?: string
    age?: number
    country?: Country
    city?: string
    currency?: Currency
    avatar?: string
}

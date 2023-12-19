import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'

export interface IProfile {
    id: string
    firstname?: string
    lastname?: string
    age?: number
    country?: Country
    city?: string
    currency?: Currency
    avatar?: string
}

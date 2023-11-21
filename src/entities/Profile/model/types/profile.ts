export interface IProfile {
    user_id: string
    firstname?: string
    lastname?: string
    age?: number
    country?: string
    city?: string
    currency?: string
    avatar?: string
}

export interface ProfileForm {
    firstname: string | undefined
    lastname: string | undefined
}

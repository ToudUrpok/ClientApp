export type TUserRole = 'admin' | 'user'

export interface IUser {
    id: string
    username: string
    role: TUserRole
    avatar?: string
}

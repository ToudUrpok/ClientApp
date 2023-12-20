export enum UserRole {
    ADMIN = 'admin',
    USER = 'user'
}

export interface IUser {
    id: string
    username: string
    role: UserRole
    avatar?: string
}

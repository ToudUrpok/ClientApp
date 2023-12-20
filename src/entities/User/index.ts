export { User } from './ui/User'

export {
    reducer as userReducer,
    actions as userActions,
    selectUserAuthData
} from './model/slice/userSlice'

export type { UserState } from './model/slice/userSlice'
export type { IUser } from './model/types/user'
export { UserRole } from './model/types/user'

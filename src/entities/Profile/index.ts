export type {
    IProfile
} from './model/types/profile'

export type {
    ProfileState
} from './model/slice/profileSlice'

export {
    reducer as profileReducer,
    actions as profileActions,
    selectProfileData
} from './model/slice/profileSlice'

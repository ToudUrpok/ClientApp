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

export {
    fetchProfileData
} from './model/services/fetchProfileData'

export {
    ProfileCard
} from './ui/ProfileCard/ProfileCard'

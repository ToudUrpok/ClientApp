export type {
    IProfile
} from './model/types/profile'

export type {
    ProfileState
} from './model/slice/profileSlice'

export {
    reducer as profileReducer,
    actions as profileActions,
    selectProfileData,
    selectProfileIsLoading,
    selectProfileError
} from './model/slice/profileSlice'

export {
    fetchProfileData
} from './model/services/fetchProfileData'

export {
    updateProfileData
} from './model/services/updateProfileData'

export {
    ProfileCard
} from './ui/ProfileCard/ProfileCard'

export {
    EditableProfileCard
} from './ui/EditableProfileCard/EditableProfileCard'

import { AppDispatch, StateSchema } from '../../app/store/StateSchema'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector

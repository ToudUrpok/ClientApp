import { AppDispatch, RootState } from 'app/store/Store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

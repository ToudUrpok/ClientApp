import { ReactNode } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { selectUserAuthData } from '../../../../entities/User'
import {
    Navigate,
    useLocation
} from 'react-router-dom'
import { RoutePaths } from '../../../../shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
    children?: ReactNode
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
    const authData = useAppSelector(selectUserAuthData)
    const location = useLocation()

    if (!authData) {
        return <Navigate to={RoutePaths.main} state={{ from: location }} replace />
    }

    return children
}

import { RouteProps } from 'react-router-dom'
import { AboutPage } from '../../../pages/AboutPage'
import { MainPage } from '../../../pages/MainPage'
import { NotFoundPage } from '../../../pages/NotFoundPage'
import { ProfilePage } from '../../../pages/ProfilePage'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: AppRouteProps[] = [
    {
        path: RoutePaths[AppRoutes.MAIN],
        element: <MainPage/>
    },
    {
        path: RoutePaths[AppRoutes.ABOUT],
        element: <AboutPage/>
    },
    {
        path: RoutePaths[AppRoutes.PROFILE],
        element: <ProfilePage/>,
        authOnly: true
    },
    {
        path: RoutePaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage/>
    }
]

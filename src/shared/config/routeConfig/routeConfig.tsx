import { RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: RouteProps[] = [
    {
        path: RoutePaths[AppRoutes.MAIN],
        element: <MainPage/>
    },
    {
        path: RoutePaths[AppRoutes.ABOUT],
        element: <AboutPage/>
    }
]

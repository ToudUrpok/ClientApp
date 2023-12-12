import { RouteProps } from 'react-router-dom'
import { AboutPage } from '../../../pages/AboutPage'
import { MainPage } from '../../../pages/MainPage'
import { NotFoundPage } from '../../../pages/NotFoundPage'
import { ProfilePage } from '../../../pages/ProfilePage'
import { ArticlesRepositoryPage } from '../../../pages/ArticlesRepositoryPage'
import { ArticleDetailedPage } from '../../../pages/ArticleDetailedPage'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES_REPOSITORY = 'articles_repository',
    ARTICLE_DETAILED = 'article_detailed',
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES_REPOSITORY]: '/articles',
    [AppRoutes.ARTICLE_DETAILED]: '/articles/:id',
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
        path: RoutePaths[AppRoutes.ARTICLES_REPOSITORY],
        element: <ArticlesRepositoryPage/>,
        authOnly: true
    },
    {
        path: RoutePaths[AppRoutes.ARTICLE_DETAILED],
        element: <ArticleDetailedPage/>,
        authOnly: true
    },
    {
        path: RoutePaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage/>
    }
]

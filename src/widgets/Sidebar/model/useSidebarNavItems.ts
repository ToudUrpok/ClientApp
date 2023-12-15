import { RoutePaths } from '../../../shared/config/routeConfig/routeConfig'
import MainIcon from '../../../shared/assets/icons/link-main-20-20.svg'
import AboutIcon from '../../../shared/assets/icons/link-about-20-20.svg'
import ProfileIcon from '../../../shared/assets/icons/link-profile-17-20.svg'
import ArticlesIcon from '../../../shared/assets/icons/link-articles-20-20.svg'
import { ISidebarNavItem } from './SidebarNavItem'
import { useAppSelector } from '../../../app/hooks/redux'
import { selectUserAuthData } from '../../../entities/User'
import { useMemo } from 'react'

const publicSidebarNavItems: ISidebarNavItem[] = [
    {
        Path: RoutePaths.main,
        LabelKey: 'Home',
        Icon: MainIcon
    },
    {
        Path: RoutePaths.about,
        LabelKey: 'About',
        Icon: AboutIcon
    }
]

export const useSidebarNavItems = (): ISidebarNavItem[] => {
    const authData = useAppSelector(selectUserAuthData)

    const items = useMemo<ISidebarNavItem[]>(() => {
        if (authData) {
            return [
                ...publicSidebarNavItems,
                {
                    Path: RoutePaths.articles_repository,
                    LabelKey: 'Articles',
                    Icon: ArticlesIcon
                },
                {
                    Path: RoutePaths.myprofile,
                    LabelKey: 'Profile',
                    Icon: ProfileIcon
                }
            ]
        }

        return publicSidebarNavItems
    }, [authData])

    return items
}

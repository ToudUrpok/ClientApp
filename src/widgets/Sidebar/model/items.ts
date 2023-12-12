import { RoutePaths } from '../../../shared/config/routeConfig/routeConfig'
import MainIcon from '../../../shared/assets/icons/link-main-20-20.svg'
import AboutIcon from '../../../shared/assets/icons/link-about-20-20.svg'
import ProfileIcon from '../../../shared/assets/icons/link-profile-17-20.svg'
import ArticlesIcon from '../../../shared/assets/icons/link-articles-20-20.svg'

export interface ISidebarItem {
    Path: string
    LabelKey: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    IsAuthRequired: boolean
}

export const SidebarItems: ISidebarItem[] = [
    {
        Path: RoutePaths.main,
        LabelKey: 'Home',
        Icon: MainIcon,
        IsAuthRequired: false
    },
    {
        Path: RoutePaths.articles_repository,
        LabelKey: 'Articles',
        Icon: ArticlesIcon,
        IsAuthRequired: true
    },
    {
        Path: RoutePaths.profile,
        LabelKey: 'Profile',
        Icon: ProfileIcon,
        IsAuthRequired: true
    },
    {
        Path: RoutePaths.about,
        LabelKey: 'About',
        Icon: AboutIcon,
        IsAuthRequired: false
    }
]

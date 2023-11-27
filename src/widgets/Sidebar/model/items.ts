import { RoutePaths } from '../../../shared/config/routeConfig/routeConfig'
import MainIcon from '../../../shared/assets/icons/link-main-20-20.svg'
import AboutIcon from '../../../shared/assets/icons/link-about-20-20.svg'
import ProfileIcon from '../../../shared/assets/icons/link-profile-17-20.svg'

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
        Path: RoutePaths.about,
        LabelKey: 'About',
        Icon: AboutIcon,
        IsAuthRequired: false
    },
    {
        Path: RoutePaths.profile,
        LabelKey: 'Profile',
        Icon: ProfileIcon,
        IsAuthRequired: true
    }
]

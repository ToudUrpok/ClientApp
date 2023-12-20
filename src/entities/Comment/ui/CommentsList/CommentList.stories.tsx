import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../../app/providers/ThemeProvider'
import { IUser, UserRole } from '../../../../entities/User'
import { CommentsList } from './CommentsList'
import { IProfile } from '../../../../entities/Profile'
import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'
import { LocalStoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/LocalStoreDecorator'
import { IComment } from '../../model/types/comment'

const testUser1: IUser = {
    id: '1',
    username: 'Test User 1',
    role: UserRole.ADMIN,
    avatar: 'https://i.natgeofe.com/n/2d706180-e778-4110-9c15-1a7435b72114/mountain-gorillas-rwanda-02_3x4.jpg'
}

const testUser2: IUser = {
    id: '2',
    username: 'Test User 2',
    role: UserRole.USER
}

const testProfile1: IProfile = {
    id: '1',
    firstname: 'Test1',
    lastname: 'Test1',
    age: 19,
    country: Country.Russia,
    city: 'Moscow',
    currency: Currency.rub,
    avatar: 'https://i.natgeofe.com/n/2d706180-e778-4110-9c15-1a7435b72114/mountain-gorillas-rwanda-02_3x4.jpg'
}

const testProfile2: IProfile = {
    id: '2',
    firstname: '2',
    lastname: '2',
    age: 13,
    country: Country.USA,
    city: 'NewYork',
    currency: Currency.usd
}

const testComments: IComment[] = [
    {
        id: '1',
        text: 'Test comment 1',
        user: testUser1
    },
    {
        id: '2',
        text: 'Test comment 2',
        user: testUser2
    },
    {
        id: '3',
        text: 'Test comment 3',
        user: testUser1
    },
    {
        id: '4',
        text: 'Test comment 4',
        user: testUser2
    }
]

const meta: Meta<typeof CommentsList> = {
    component: CommentsList,
    args: {
        comments: testComments
    },
    decorators: [
        LocalStoreDecorator({
            user: {
                authData: testUser2
            },
            profile: {
                profileData: testProfile1
            }
        })
    ]
}

export default meta
type Story = StoryObj<typeof CommentsList>

export const User: Story = {
}

export const UserDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Loading: Story = {
    args: {
        isLoading: true
    }
}

export const Empty: Story = {
    args: {
        comments: []
    }
}

export const Admin: Story = {
    decorators: [
        LocalStoreDecorator({
            user: {
                authData: testUser1
            },
            profile: {
                profileData: testProfile2
            }
        })
    ]
}

import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../../app/providers/ThemeProvider'
import { CommentCard } from './CommentCard'
import { UserRole } from '../../../../entities/User'

const meta: Meta<typeof CommentCard> = {
    component: CommentCard,
    args: {
        comment: {
            id: '1',
            text: 'Test Comment Text!............',
            user: {
                id: '1',
                username: 'Test User 1',
                role: UserRole.ADMIN,
                avatar: 'https://i.natgeofe.com/n/2d706180-e778-4110-9c15-1a7435b72114/mountain-gorillas-rwanda-02_3x4.jpg'
            }
        }
    }
}

export default meta
type Story = StoryObj<typeof CommentCard>

export const Light: Story = {
}

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const WithoutAvatarImg: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Test Comment Text!............',
            user: {
                id: '1',
                username: 'Test User 1',
                role: UserRole.ADMIN
            }
        }
    }
}

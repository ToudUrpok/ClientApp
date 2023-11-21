import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Avatar } from './Avatar'
import AvatarImg from './gorilla.jpg'

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    args: {
        src: AvatarImg,
        size: 250
    }
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImg: Story = {
    args: {
    }
}

export const AltLight: Story = {
    args: {
        src: 'h',
        alt: 'VL'
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
}

export const AltDark: Story = {
    args: {
        src: 'h',
        alt: 'VL'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

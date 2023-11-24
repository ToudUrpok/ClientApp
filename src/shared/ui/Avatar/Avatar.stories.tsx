import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    args: {
        size: 250
    }
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImg: Story = {
    args: {
        src: 'https://i.natgeofe.com/n/2d706180-e778-4110-9c15-1a7435b72114/mountain-gorillas-rwanda-02_3x4.jpg'
    }
}

export const AltLight: Story = {
    args: {
        src: undefined,
        alt: 'VL'
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
}

export const AltDark: Story = {
    args: {
        src: undefined,
        alt: 'VL'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

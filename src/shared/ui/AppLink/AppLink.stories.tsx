import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
    component: AppLink,
    args: {
        children: 'LinkText',
        to: '/'
    }
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    }
}

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    }
}

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Contrast: Story = {
    args: {
        theme: AppLinkTheme.CONTRAST
    }
}

export const ContrastDark: Story = {
    args: {
        theme: AppLinkTheme.CONTRAST
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

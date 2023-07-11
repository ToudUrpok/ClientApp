import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Button> = {
    component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Text'
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'Text'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Plain: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.PLAIN
    }
}

export const PlainDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.PLAIN
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINED
    }
}

export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINED
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

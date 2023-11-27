import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextTheme } from './Text'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../app/providers/ThemeProvider'

const meta: Meta<typeof Text> = {
    component: Text
}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
    args: {
        title: 'Error',
        text: 'unable to set connection'
    }
}

export const PrimaryOnlyTitle: Story = {
    args: {
        title: 'Error'
    }
}

export const PrimaryOnlyTextBlock: Story = {
    args: {
        text: 'unable to set connection'
    }
}

export const PrimaryDark: Story = {
    args: {
        title: 'Error',
        text: 'unable to set connection'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Error: Story = {
    args: {
        title: 'Error',
        text: 'unable to set connection',
        theme: TextTheme.ERROR
    }
}

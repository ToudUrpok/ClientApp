import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
    component: Input,
    args: {
        value: 'test input value'
    }
}

export default meta
type Story = StoryObj<typeof Input>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Password: Story = {
    args: {
        type: 'password'
    }
}

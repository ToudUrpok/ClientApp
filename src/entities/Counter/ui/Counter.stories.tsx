import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Counter } from './Counter'

const meta: Meta<typeof Counter> = {
    component: Counter
}

export default meta
type Story = StoryObj<typeof Counter>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

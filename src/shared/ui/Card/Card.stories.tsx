import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../app/providers/ThemeProvider'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
    component: Card,
    args: {
        children: 'This is Card component'
    }
}

export default meta
type Story = StoryObj<typeof Card>

export const Light: Story = { }

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

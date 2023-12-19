import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../../app/providers/ThemeProvider'
import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
    component: ProfileCard
}

export default meta
type Story = StoryObj<typeof ProfileCard>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

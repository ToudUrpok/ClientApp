import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../app/providers/ThemeProvider'
import { PageLoader } from './PageLoader'

const meta: Meta<typeof PageLoader> = {
    component: PageLoader
}

export default meta
type Story = StoryObj<typeof PageLoader>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

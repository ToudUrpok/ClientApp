import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../app/providers/ThemeProvider'
import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
    component: AboutPage
}

export default meta
type Story = StoryObj<typeof AboutPage>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

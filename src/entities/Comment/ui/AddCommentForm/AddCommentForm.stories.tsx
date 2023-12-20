import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../../app/providers/ThemeProvider'
import { AddCommentForm } from './AddCommentForm'

const meta: Meta<typeof AddCommentForm> = {
    component: AddCommentForm
}

export default meta
type Story = StoryObj<typeof AddCommentForm>

export const Light: Story = {
}

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

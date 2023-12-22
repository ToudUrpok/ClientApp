import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../../app/providers/ThemeProvider'
import { ArticlesCollectionViewSelector } from './ArticlesCollectionViewSelector'

const meta: Meta<typeof ArticlesCollectionViewSelector> = {
    component: ArticlesCollectionViewSelector,
    args: {
        currentView: 'grid'
    }
}

export default meta
type Story = StoryObj<typeof ArticlesCollectionViewSelector>

export const Light: Story = {}

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

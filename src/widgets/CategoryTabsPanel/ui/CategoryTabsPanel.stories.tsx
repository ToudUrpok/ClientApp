import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../app/providers/ThemeProvider'
import { CategoryTabsPanel } from './CategoryTabsPanel'

const meta: Meta<typeof CategoryTabsPanel> = {
    component: CategoryTabsPanel,
    args: {
        tabs: [
            {
                value: 'tab1',
                content: 'Tab 1'
            },
            {
                value: 'tab2',
                content: 'Tab 2'
            },
            {
                value: 'tab3',
                content: 'Tab 3'
            }
        ],
        selectedValue: 'tab2',
        onSelect: action('onSelect')
    }
}

export default meta
type Story = StoryObj<typeof CategoryTabsPanel>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

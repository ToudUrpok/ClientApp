import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
    component: Modal,
    args: {
        isOpened: true,
        children: 'The OData standard defines a set of built-in filters. These filters are always preceded by a $ sign, e.g. $top=100. When using them for a Cell request, the filter will be translated into an OLAP query, which means that only the requested cells will be fetched. Other requests will still get the full dataset from OLAP and apply the filters afterwards.'
    }
}

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

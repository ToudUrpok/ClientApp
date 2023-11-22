import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Select> = {
    component: Select,
    args: {
        options: [
            {
                value: 'belarus',
                content: 'Belarus'
            },
            {
                value: 'russia',
                content: 'Russia'
            },
            {
                value: 'ussr',
                content: 'USSR'
            },
            {
                value: 'germany',
                content: 'Germany'
            }
        ]
    }
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {
    args: {
    }
}

export const PrimaryDark: Story = {
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Disabled: Story = {
    args: {
        disabled: true
    }
}

export const WithSelected: Story = {
    args: {
        selectedValue: 'ussr'
    }
}

export const Withlabel: Story = {
    args: {
        label: 'Select value:'
    }
}

export const WithlabelDark: Story = {
    args: {
        label: 'Select value:'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

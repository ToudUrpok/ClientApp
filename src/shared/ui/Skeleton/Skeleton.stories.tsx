import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../app/providers/ThemeProvider'

const meta: Meta<typeof Skeleton> = {
    component: Skeleton
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Rect: Story = {
    args: {
    }
}

export const RectDark: Story = {
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    }
}

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

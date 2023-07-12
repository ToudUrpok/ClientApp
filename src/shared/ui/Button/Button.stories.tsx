import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Button> = {
    component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Text'
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'Text'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Plain: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.PLAIN
    }
}

export const PlainDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.PLAIN
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED
    }
}

export const OutlinedSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.XL
    }
}

export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Background: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND
    }
}

export const BackgroundDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
}

export const BackgroundInvertedDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true
    }
}

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    }
}

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL
    }
}

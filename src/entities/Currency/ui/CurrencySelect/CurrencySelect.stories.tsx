import type { Meta, StoryObj } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Currency } from '../../model/types/currency'

const meta: Meta<typeof CurrencySelect> = {
    component: CurrencySelect,
    args: {
    }
}

export default meta
type Story = StoryObj<typeof CurrencySelect>

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
        selectedCurrency: Currency.usd
    }
}

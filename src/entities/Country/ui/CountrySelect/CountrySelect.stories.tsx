import type { Meta, StoryObj } from '@storybook/react'
import { CountrySelect } from './CountrySelect'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Country } from '../../model/types/country'

const meta: Meta<typeof CountrySelect> = {
    component: CountrySelect,
    args: {
    }
}

export default meta
type Story = StoryObj<typeof CountrySelect>

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
        selectedCountry: Country.USA
    }
}

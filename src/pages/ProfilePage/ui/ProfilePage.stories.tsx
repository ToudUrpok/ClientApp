import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { LocalStoreDecorator } from 'shared/config/storybook/StoreDecorator/LocalStoreDecorator'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
    decorators: [
        LocalStoreDecorator({
            profile: {
                profileData: {
                    user_id: '7',
                    firstname: 'string',
                    lastname: 'string',
                    age: 10,
                    country: Country.Russia,
                    city: 'string',
                    currency: Currency.rub,
                    avatar: 'https://i.natgeofe.com/n/2d706180-e778-4110-9c15-1a7435b72114/mountain-gorillas-rwanda-02_3x4.jpg'
                }
            }
        })
    ]
}

export default meta
type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

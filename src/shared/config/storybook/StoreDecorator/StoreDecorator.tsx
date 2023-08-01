import { Decorator } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator: Decorator = (Story, options) => {
    return (
        <StoreProvider {...options.args}>
            <Story {...options} />
        </StoreProvider>
    )
}

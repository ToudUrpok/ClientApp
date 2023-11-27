import { Decorator } from '@storybook/react'
import { Theme } from '../../../../app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme): Decorator => (Story, options) => {
    return (
        <div className={`app ${theme}`} {...options.args}>
            <Story {...options} />
        </div>
    )
}

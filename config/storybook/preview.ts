import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const preview: Preview = {
    parameters: {},
    decorators: [
        RouterDecorator,
        ThemeDecorator(Theme.LIGHT)
    ]
}

export default preview

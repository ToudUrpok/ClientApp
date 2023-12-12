import type { Preview } from '@storybook/react'
import { Theme } from '../../src/app/providers/ThemeProvider'
import '../../src/app/styles/index.scss'
import './storybook.scss'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const preview: Preview = {
    parameters: {},
    decorators: [
        RouterDecorator,
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator
    ]
}

export default preview

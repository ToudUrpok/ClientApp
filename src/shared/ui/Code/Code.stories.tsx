import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../app/providers/ThemeProvider'

const meta: Meta<typeof Code> = {
    component: Code,
    args: {
        content: 'let userName = "Вася";\n' +
        '\n' +
        'function showMessage() {\n' +
        "  let message = 'Привет, ' + userName;\n" +
        '  alert(message);\n' +
        '}\n' +
        '\n' +
        'showMessage(); // Привет, Вася\n'
    }
}

export default meta
type Story = StoryObj<typeof Code>

export const Light: Story = {
    args: {

    }
}

export const Dark: Story = {
    args: {

    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

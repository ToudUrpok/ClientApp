import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('test button with theme', () => {
        render(<Button theme={ThemeButton.PLAIN}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('plain');
        screen.debug();
    })
})

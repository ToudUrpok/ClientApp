import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('sidebar', () => {
    test('test render', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar-test')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-test-toggle')
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar-test')).toHaveClass('collapsed')
    })
})

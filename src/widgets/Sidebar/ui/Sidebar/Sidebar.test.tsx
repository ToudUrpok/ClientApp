import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import {
    renderComponent
} from '../../../../shared/lib/tests/renderComponent/renderComponent'

describe('sidebar', () => {
    test('test render', () => {
        renderComponent(<Sidebar />)
        expect(screen.getByTestId('sidebar-test')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderComponent(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-test-toggle')
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar-test')).toHaveClass('collapsed')
    })
})

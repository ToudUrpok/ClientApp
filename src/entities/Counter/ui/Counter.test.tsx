import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './Counter'
import { renderComponent } from '../../../shared/lib/tests/renderComponent/renderComponent'

describe('counter', () => {
    test('render', () => {
        renderComponent(<Counter />)

        expect(screen.getByTestId('counter-test')).toBeInTheDocument()
    })

    test('increment', async () => {
        const user = userEvent.setup()
        renderComponent(<Counter />, {
            initStoreState: {
                counter: {
                    value: 10
                }
            }
        })

        expect(screen.getByTestId('counter-test-value')).toHaveTextContent('10')
        const incBtn = screen.getByTestId('counter-test-inc')
        await user.click(incBtn)
        expect(screen.getByTestId('counter-test-value')).toHaveTextContent('15')
    })

    test('decrement', async () => {
        const user = userEvent.setup()
        renderComponent(<Counter />, {
            initStoreState: {
                counter: {
                    value: 117
                }
            }
        })

        expect(screen.getByTestId('counter-test-value')).toHaveTextContent('117')
        const decBtn = screen.getByTestId('counter-test-dec')
        await user.click(decBtn)
        expect(screen.getByTestId('counter-test-value')).toHaveTextContent('112')
    })
})

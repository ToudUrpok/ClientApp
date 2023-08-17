import { useAppDispatch, useAppSelector } from 'app/hooks/redux'
import { selectCounterValue } from '../model/counterSlice'
import { counterActions } from '..'
import { Button } from 'shared/ui/Button/Button'

export const Counter = () => {
    const dispatch = useAppDispatch()
    const counterValue = useAppSelector(selectCounterValue)

    const increment = () => {
        dispatch(counterActions.increment(5))
    }

    const decrement = () => {
        dispatch(counterActions.decrement(5))
    }

    return (
        <div data-testid='counter-test'>
            <h1 data-testid='counter-test-value'>{counterValue}</h1>
            <Button data-testid='counter-test-inc' onClick={increment}>+</Button>
            <Button data-testid='counter-test-dec' onClick={decrement}>-</Button>
        </div>
    )
}

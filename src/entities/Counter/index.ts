import { actions, reducer, CounterState } from './model/counterSlice'
import { Counter } from './ui/Counter'

export {
    reducer as counterReducer,
    actions as counterActions,
    type CounterState,
    Counter
}

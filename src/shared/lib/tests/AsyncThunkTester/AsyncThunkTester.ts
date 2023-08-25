import { AsyncThunkAction } from '@reduxjs/toolkit'
import { AppDispatch, StateSchema } from 'app/store/StateSchema'

export class AsyncThunkTester<Returned, ThunkArg, RejectedValue> {
    dispatch: AppDispatch
    getState: () => StateSchema

    constructor () {
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk (action: AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>) {
        const result = await action(this.dispatch, this.getState, undefined)

        return result
    }
}

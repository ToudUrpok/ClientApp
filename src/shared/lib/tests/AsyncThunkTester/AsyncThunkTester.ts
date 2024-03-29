import { AsyncThunkAction, DeepPartial } from '@reduxjs/toolkit'
import { AppDispatch, StateSchema } from '../../../../app/store/StateSchema'

export class AsyncThunkTester<Returned, ThunkArg, RejectedValue> {
    dispatch: AppDispatch
    getState: () => StateSchema

    constructor (state?: DeepPartial<StateSchema>) {
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)
    }

    async callThunk (action: AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>) {
        const result = await action(this.dispatch, this.getState, undefined)

        return result
    }
}

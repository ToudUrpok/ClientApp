import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { AppDispatch, StateSchema } from 'app/store/StateSchema'
import { userActions } from 'entities/User'

jest.mock('axios')
const mockedAxiosPost = jest.mocked(axios.post)

describe('loginByUsername', () => {
    let dispatch: AppDispatch
    let getState: () => StateSchema

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })

    test('successful login', async () => {
        const userData = { id: '1', username: 'Eugene' }

        mockedAxiosPost.mockReturnValue(Promise.resolve({ data: userData }))
        const action = loginByUsername({ username: 'Eugene', password: '123456' })
        const result = await action(dispatch, getState, undefined)

        expect(dispatch).toBeCalledTimes(3)
        expect(dispatch).toBeCalledWith(userActions.setAuthData(userData))
        expect(mockedAxiosPost).toBeCalled()
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(userData)
    })

    test('failed login', async () => {
        mockedAxiosPost.mockReturnValue(Promise.resolve({ status: 403 }))
        const action = loginByUsername({ username: 'Eugene', password: '123456' })
        const result = await action(dispatch, getState, undefined)

        expect(dispatch).toBeCalledTimes(2)
        expect(mockedAxiosPost).toBeCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
    })
})

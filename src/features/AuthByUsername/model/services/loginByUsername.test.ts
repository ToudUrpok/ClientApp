import { loginByUsername } from './loginByUsername'
import { userActions, UserRole } from '../../../../entities/User'
import { AsyncThunkTester } from '../../../../shared/lib/tests/AsyncThunkTester/AsyncThunkTester'
import { $API } from '../../../../shared/api/APIInstance'

jest.mock('shared/api/APIInstance')
const mockedAxiosPost = jest.mocked($API.post)

describe('loginByUsername', () => {
    test('successful login', async () => {
        const userData = { id: '1', username: 'Eugene', role: UserRole.USER }
        mockedAxiosPost.mockReturnValue(Promise.resolve({ data: userData }))

        const thunkTester = new AsyncThunkTester()
        const result = await thunkTester.callThunk(loginByUsername({ username: 'Eugene', password: '123456' }))

        expect(thunkTester.dispatch).toHaveBeenCalledTimes(3)
        expect(thunkTester.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
        expect(mockedAxiosPost).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(userData)
    })

    test('failed login', async () => {
        mockedAxiosPost.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunkTester = new AsyncThunkTester()
        const result = await thunkTester.callThunk(loginByUsername({ username: 'Eugene', password: '123456' }))

        expect(thunkTester.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxiosPost).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
    })
})

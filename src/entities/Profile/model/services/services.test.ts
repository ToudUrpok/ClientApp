import { AsyncThunkTester } from '../../../../shared/lib/tests/AsyncThunkTester/AsyncThunkTester'
import { fetchProfileData } from './fetchProfileData'
import { IProfile } from '../types/profile'
import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'
import { updateProfileData } from './updateProfileData'

jest.mock('shared/api/authorizedAPIInstance')
const mockedAxiosGet = jest.mocked($authAPI.get)
const mockedAxiosPut = jest.mocked($authAPI.put)

const testProfileData: IProfile = {
    user_id: '7',
    firstname: 'John',
    lastname: 'Smith',
    age: 20,
    country: Country.USA,
    city: 'New York',
    currency: Currency.usd,
    avatar: 'https://i.natgeofe.com/n/2d706180-e778-4110-9c15-1a7435b72114/mountain-gorillas-rwanda-02_3x4.jpg'
}

describe('fetchProfileData', () => {
    test('successful fetch', async () => {
        mockedAxiosGet.mockReturnValue(Promise.resolve({ data: testProfileData }))

        const thunkTester = new AsyncThunkTester()
        const result = await thunkTester.callThunk(fetchProfileData(testProfileData.user_id))

        expect(mockedAxiosGet).toBeCalled()
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(testProfileData)
    })

    test('failed fetch', async () => {
        mockedAxiosGet.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunkTester = new AsyncThunkTester()
        const result = await thunkTester.callThunk(fetchProfileData(testProfileData.user_id))

        expect(mockedAxiosGet).toBeCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
    })
})

describe('updateProfileData', () => {
    test('successful update', async () => {
        mockedAxiosPut.mockReturnValue(Promise.resolve({ data: testProfileData }))

        const thunkTester = new AsyncThunkTester()
        const result = await thunkTester.callThunk(updateProfileData(testProfileData))

        expect(mockedAxiosPut).toBeCalled()
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(testProfileData)
    })

    test('failed update', async () => {
        mockedAxiosPut.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunkTester = new AsyncThunkTester()
        const result = await thunkTester.callThunk(updateProfileData(testProfileData))

        expect(mockedAxiosPut).toBeCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
    })
})

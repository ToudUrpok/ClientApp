import { getQueryString } from './getQueryString'

describe('getQueryString', () => {
    test('one param', () => {
        const result = getQueryString(new URLSearchParams(), {
            test: 'value'
        })
        expect(result).toEqual('test=value')
    })
    test('multiple params', () => {
        const result = getQueryString(new URLSearchParams(), {
            test1: 'value',
            test2: 2
        })
        expect(result).toEqual('test1=value&test2=2')
    })
    test('undefiened', () => {
        const result = getQueryString(new URLSearchParams(), {
            test1: 'value',
            test2: undefined
        })
        expect(result).toEqual('test1=value')
    })
})

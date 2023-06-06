import { cn } from './classNames'

describe('classNames', () => {
    test('with elemCls param only', () => {
        const expected = 'TestClass'
        expect(cn('TestClass')).toBe(expected)
    })

    test('with extra param', () => {
        const expected = 'TestClass class1 class2'
        expect(cn('TestClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with attributes', () => {
        const expected = 'TestClass class1 class2 hovered scrollable'
        expect(cn(
            'TestClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2']
        )).toBe(expected)
    })

    test('with attributes false', () => {
        const expected = 'TestClass class1 class2 hovered'
        expect(cn(
            'TestClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2']
        )).toBe(expected)
    })

    test('with attributes undefined', () => {
        const expected = 'TestClass class1 class2 hovered'
        expect(cn(
            'TestClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2']
        )).toBe(expected)
    })
})

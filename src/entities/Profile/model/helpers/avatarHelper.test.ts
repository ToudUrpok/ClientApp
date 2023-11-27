import { generateAvatarAlt } from './avatarHelper'

describe('avatarHelper', () => {
    const firstname = 'john'
    const lastname = 'Smith'

    test('test generateAvatarAlt with undefined params', () => {
        expect(generateAvatarAlt()).toEqual(':)')
    })
    test('test generateAvatarAlt with params empty strings values', () => {
        expect(generateAvatarAlt('', '')).toEqual(':)')
    })

    test('test generateAvatarAlt with only firstname param defined with not empty string value', () => {
        expect(generateAvatarAlt(firstname)).toEqual(firstname[0].toUpperCase())
    })
    test('test generateAvatarAlt with firstname param defined with not empty string value amd lastname with empty string', () => {
        expect(generateAvatarAlt(firstname, '')).toEqual(firstname[0].toUpperCase())
    })

    test('test generateAvatarAlt with only lastname param defined with not empty string value', () => {
        expect(generateAvatarAlt(undefined, lastname)).toEqual(lastname[0].toUpperCase())
    })
    test('test generateAvatarAlt with lastname param defined with not empty string value amd firstname with empty string', () => {
        expect(generateAvatarAlt('', lastname)).toEqual(lastname[0].toUpperCase())
    })

    test('test generateAvatarAlt with both params defined with not empty string values', () => {
        expect(generateAvatarAlt(firstname, lastname)).toEqual(`${firstname[0].toUpperCase()}${lastname[0].toUpperCase()}`)
    })
})

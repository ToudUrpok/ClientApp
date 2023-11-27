export const generateAvatarAlt = (firstname?: string, lastname?: string): string => {
    let alt = ':)'

    if (firstname?.length || lastname?.length) {
        alt = `${(firstname?.[0] ?? '').toUpperCase()}${(lastname?.[0] ?? '').toUpperCase()}`
    }

    return alt
}

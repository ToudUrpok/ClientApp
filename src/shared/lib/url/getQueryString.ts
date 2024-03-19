export function getQueryString (searchParams: URLSearchParams, paramsObj: object): string {
    Object.entries(paramsObj).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value)
        }
    })

    return searchParams.toString()
}


type Attributes = Record<string, string | boolean>

function classNames(elemCls: string, attributes: Attributes = {}, extra: string[] = []): string {
    return [
        elemCls,
        ...extra.filter(Boolean),
        ...Object.keys(attributes).filter((attr) => !!attributes[attr])
    ].join(' ');
}

export { classNames as cn };
import { lazy } from 'react'

export const ArticleDetailedPageLazy = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./ArticleDetailedPage')) }, 1500)
}))

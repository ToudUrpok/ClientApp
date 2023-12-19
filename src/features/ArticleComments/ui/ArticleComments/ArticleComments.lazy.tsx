import { lazy } from 'react'

export const ArticleCommentsLazy = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./ArticleComments')) }, 1500)
}))

import { lazy } from 'react'

export const ArticlesRepositoryPageLazy = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error
    setTimeout(() => { resolve(import('./ArticlesRepositoryPage')) }, 1500)
}))

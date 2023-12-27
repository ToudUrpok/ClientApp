import { Dictionary } from '@reduxjs/toolkit'
import { AsyncThunkTester } from '../../../../shared/lib/tests/AsyncThunkTester/AsyncThunkTester'
import { IArticle } from '../../../../entities/Article'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { ArticlesRepoState } from '../types/articlesRepoState'

jest.mock('./fetchArticles')

const initedArticlesRepoState: ArticlesRepoState = {
    isLoading: false,
    error: undefined,
    view: 'grid',
    page: 1,
    limit: 2,
    totalCount: undefined,
    ids: [],
    entities: {},
    _inited: true
}

const articles: Dictionary<IArticle> = {
    1: {
        id: '1',
        title: 'Javascript news 2022',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        user: {
            id: '1',
            username: 'Eugene Yakubovich',
            role: 'user'
        },
        topic: [
            'IT'
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                content: {
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.'
                    ]
                }
            }
        ]
    },
    2: {
        id: '2',
        title: 'Javascript news 2022',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        user: {
            id: '1',
            username: 'Eugene Yakubovich',
            role: 'user'
        },
        topic: [
            'IT'
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                content: {
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.'
                    ]
                }
            }
        ]
    },
    3: {
        id: '3',
        title: 'Javascript news 2022',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        user: {
            id: '1',
            username: 'Eugene Yakubovich',
            role: 'user'
        },
        topic: [
            'IT'
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                content: {
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.'
                    ]
                }
            }
        ]
    },
    4: {
        id: '4',
        title: 'Javascript news 2022',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        user: {
            id: '1',
            username: 'Eugene Yakubovich',
            role: 'user'
        },
        topic: [
            'IT'
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                content: {
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.'
                    ]
                }
            }
        ]
    }
}

describe('fetchNextArticlePage', () => {
    test('first fetch', async () => {
        const thunkTester = new AsyncThunkTester({
            articlesRepo: initedArticlesRepoState
        })
        const result = await thunkTester.callThunk(fetchNextArticlesPage())
        expect(result.payload).toEqual(true)
        expect(thunkTester.dispatch).toHaveBeenCalledTimes(4)
    })

    test('second successful fetch', async () => {
        const thunkTester = new AsyncThunkTester({
            articlesRepo: {
                ...initedArticlesRepoState,
                page: 2,
                totalCount: 10,
                ids: ['1', '2', '3', '4'],
                entities: articles
            }
        })
        const result = await thunkTester.callThunk(fetchNextArticlesPage())
        expect(result.payload).toEqual(true)
        expect(thunkTester.dispatch).toHaveBeenCalledTimes(4)
    })

    test('second fetch failed no more articles', async () => {
        const thunkTester = new AsyncThunkTester({
            articlesRepo: {
                ...initedArticlesRepoState,
                page: 2,
                totalCount: 4,
                ids: ['1', '2', '3', '4'],
                entities: articles
            }
        })
        const result = await thunkTester.callThunk(fetchNextArticlesPage())
        expect(result.payload).toEqual(false)
        expect(thunkTester.dispatch).toHaveBeenCalledTimes(2)
    })

    test('second fetch failed isLoading', async () => {
        const thunkTester = new AsyncThunkTester({
            articlesRepo: {
                ...initedArticlesRepoState,
                isLoading: true
            }
        })
        const result = await thunkTester.callThunk(fetchNextArticlesPage())
        expect(result.payload).toEqual(false)
        expect(thunkTester.dispatch).toHaveBeenCalledTimes(2)
    })
})

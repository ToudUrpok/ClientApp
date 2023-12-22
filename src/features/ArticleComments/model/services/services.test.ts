import { AsyncThunkTester } from '../../../../shared/lib/tests/AsyncThunkTester/AsyncThunkTester'
import { $authAPI } from '../../../../shared/api/authorizedAPIInstance'
import { IUser } from '../../../../entities/User'
import { IArticleComment } from '../types/articleComment'
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId'
import { CommentArgs, postComment } from './postComment'

jest.mock('shared/api/authorizedAPIInstance')
const mockedAxiosGet = jest.mocked($authAPI.get)
const mockedAxiosPost = jest.mocked($authAPI.post)

const testUser1: IUser = {
    id: '1',
    username: 'Test User 1',
    role: 'admin'
}

const testUser2: IUser = {
    id: '2',
    username: 'Test User 2',
    role: 'user'
}

const testArticleId = '1'

const testComments: IArticleComment[] = [
    {
        id: '1',
        text: 'Test comment 1',
        user: testUser1,
        articleId: testArticleId
    },
    {
        id: '2',
        text: 'Test comment 2',
        user: testUser2,
        articleId: testArticleId
    },
    {
        id: '3',
        text: 'Test comment 3',
        user: testUser1,
        articleId: testArticleId
    },
    {
        id: '4',
        text: 'Test comment 4',
        user: testUser2,
        articleId: testArticleId
    }
]

const testValidCommentArgs: CommentArgs = {
    text: 'Test Post Comment',
    articleId: testArticleId
}

const testCreatedComment: IArticleComment = {
    id: '5',
    text: testValidCommentArgs.text ?? 'Test',
    user: testUser1,
    articleId: testArticleId
}

describe('fetchCommentsByArticleId', () => {
    test('successful fetch', async () => {
        mockedAxiosGet.mockReturnValue(Promise.resolve({ data: testComments }))

        const thunkTester = new AsyncThunkTester()
        const result = await thunkTester.callThunk(fetchCommentsByArticleId(testArticleId))

        expect(mockedAxiosGet).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(testComments)
    })

    test('failed fetch', async () => {
        mockedAxiosGet.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunkTester = new AsyncThunkTester()
        const result = await thunkTester.callThunk(fetchCommentsByArticleId(testArticleId))

        expect(mockedAxiosGet).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
    })
})

describe('postComment', () => {
    test('successful post', async () => {
        mockedAxiosPost.mockReturnValue(Promise.resolve({ data: testCreatedComment }))

        const thunkTester = new AsyncThunkTester({
            user: {
                authData: testUser1
            }
        })
        const result = await thunkTester.callThunk(postComment(testValidCommentArgs))

        expect(mockedAxiosPost).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(testCreatedComment)
    })

    test('failed post undefined commentArgs.text', async () => {
        mockedAxiosPost.mockReturnValue(Promise.resolve({ data: testCreatedComment }))

        const thunkTester = new AsyncThunkTester({
            user: {
                authData: testUser1
            }
        })
        const result = await thunkTester.callThunk(postComment({
            articleId: testValidCommentArgs.articleId
        }))

        expect(mockedAxiosPost).not.toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
        expect((result.payload as Error).message).toEqual('Invalid comment data.')
    })

    test('failed post empty string commentArgs.text', async () => {
        mockedAxiosPost.mockReturnValue(Promise.resolve({ data: testCreatedComment }))

        const thunkTester = new AsyncThunkTester({
            user: {
                authData: testUser1
            }
        })
        const result = await thunkTester.callThunk(postComment({
            text: '',
            articleId: testValidCommentArgs.articleId
        }))

        expect(mockedAxiosPost).not.toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
        expect((result.payload as Error).message).toEqual('Invalid comment data.')
    })

    test('failed post undefined commentArgs.articleId', async () => {
        mockedAxiosPost.mockReturnValue(Promise.resolve({ data: testCreatedComment }))

        const thunkTester = new AsyncThunkTester({
            user: {
                authData: testUser1
            }
        })
        const result = await thunkTester.callThunk(postComment({
            text: testValidCommentArgs.text
        }))

        expect(mockedAxiosPost).not.toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
        expect((result.payload as Error).message).toEqual('Invalid comment data.')
    })

    test('failed post empty string commentArgs.articleId', async () => {
        mockedAxiosPost.mockReturnValue(Promise.resolve({ data: testCreatedComment }))

        const thunkTester = new AsyncThunkTester({
            user: {
                authData: testUser1
            }
        })
        const result = await thunkTester.callThunk(postComment({
            text: testValidCommentArgs.text,
            articleId: ''
        }))

        expect(mockedAxiosPost).not.toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
        expect((result.payload as Error).message).toEqual('Invalid comment data.')
    })

    test('failed post undefined user state', async () => {
        mockedAxiosPost.mockReturnValue(Promise.resolve({ data: testCreatedComment }))

        const thunkTester = new AsyncThunkTester()
        const result = await thunkTester.callThunk(postComment(testValidCommentArgs))

        expect(mockedAxiosPost).not.toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
        expect((result.payload as Error).message).toEqual('Invalid comment data.')
    })

    test('failed post request', async () => {
        mockedAxiosPost.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunkTester = new AsyncThunkTester({
            user: {
                authData: testUser1
            }
        })
        const result = await thunkTester.callThunk(postComment(testValidCommentArgs))

        expect(mockedAxiosPost).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toBeInstanceOf(Error)
    })
})

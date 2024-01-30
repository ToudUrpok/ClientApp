export { Page } from './ui/Page'

export type { PageState } from './model/types/pageState'

export {
    reducer as pagesReducer,
    actions as pagesActions,
    selectPageScrollPositionByPath
} from './model/slice/pagesSlice'

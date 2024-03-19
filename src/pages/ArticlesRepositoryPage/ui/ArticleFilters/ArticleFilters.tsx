import { SelectOption } from '../../../../shared/ui/Select/Select'
import { CollectionFilters } from '../../../../features/CollectionFilters'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './ArticleFilters.module.scss'
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { IArticlesFilters, TArticleSortField } from '../../model/types/filters'
import { CategoryTab } from '../../../../widgets/CategoryTabsPanel'
import { TArticleTopic, ArticleTopics } from '../../../../entities/Article'

interface ArticleFiltersProps {
    className?: string
    filters?: IArticlesFilters
    onChangeSortField?: (field: TArticleSortField) => void
    onChangeSortOrder?: (order: boolean) => void
    onChangeSearchValue?: (value: string) => void
    onSelectTopic?: (value: TArticleTopic) => void
}

export const ArticleFilters = memo((props: ArticleFiltersProps) => {
    const {
        className,
        filters,
        onChangeSortField,
        onChangeSortOrder,
        onChangeSearchValue,
        onSelectTopic
    } = props

    const { t } = useTranslation('articles')

    const sortOptions = useMemo<Array<SelectOption<TArticleSortField>>>(() => [
        {
            value: 'createdAt',
            content: t('CreateDate')
        },
        {
            value: 'views',
            content: t('Views')
        },
        {
            value: 'user',
            content: t('Author')
        }
    ], [t])

    const articleTopicTabs = useMemo<Array<CategoryTab<TArticleTopic>>>(() => ArticleTopics.map((topic: TArticleTopic) => (
        {
            value: topic,
            content: t(topic)
        }
    )), [t])

    return (
        <div className={cn(cls.ArticleFilters, {}, [className])}>
            <CollectionFilters
                sortOptions={sortOptions}
                selectedSortOptionValue={filters?.sortField}
                sortOrder={filters?.sortOrder}
                searchValue={filters?.searchValue}
                categories={articleTopicTabs}
                selectedCategoryValue={filters?.topic}
                onChangeSortOption={onChangeSortField}
                onChangeSortOrder={onChangeSortOrder}
                onChangeSearchValue={onChangeSearchValue}
                onSelectCategory={onSelectTopic}
            />
        </div>
    )
})

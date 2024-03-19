import { useTranslation } from 'react-i18next'
import { cn } from '../../../../shared/lib/classNames/classNames'
import cls from './CollectionFilters.module.scss'
import { Select, SelectOption } from '../../../../shared/ui/Select/Select'
import { Card } from '../../../../shared/ui/Card/Card'
import { Input } from '../../../../shared/ui/Input/Input'
import { DirectionSwitcher } from '../../../../shared/ui/DirectionSwitcher/DirectionSwitcher'
import { CategoryTab, CategoryTabsPanel } from '../../../../widgets/CategoryTabsPanel'

interface CollectionFiltersProps<S extends string, C extends string> {
    className?: string
    sortOptions?: Array<SelectOption<S>>
    selectedSortOptionValue?: S
    sortOrder?: boolean
    searchValue?: string
    categories?: Array<CategoryTab<C>>
    selectedCategoryValue?: C
    onChangeSortOption?: (value: S) => void
    onChangeSortOrder?: (order: boolean) => void
    onChangeSearchValue?: (value: string) => void
    onSelectCategory?: (value: C) => void
}

export const CollectionFilters = <T extends string, C extends string>(props: CollectionFiltersProps<T, C>) => {
    const {
        className,
        sortOptions = [],
        selectedSortOptionValue,
        sortOrder,
        searchValue,
        categories,
        selectedCategoryValue,
        onChangeSortOption,
        onChangeSortOrder,
        onChangeSearchValue,
        onSelectCategory
    } = props

    const { t } = useTranslation('translation')

    return (
        <Card className={cn(cls.CollectionFilters, {}, [className])}>
            <div className={cls.SortWrapper}>
                <Select
                    label={t('SortBy')}
                    options={sortOptions}
                    value={selectedSortOptionValue}
                    onChange={onChangeSortOption}
                />
                <DirectionSwitcher
                    value={sortOrder ?? false}
                    onChange={onChangeSortOrder}
                />
            </div>
            <Input
                className={cls.Search}
                placeholder={t('Search')}
                value={searchValue}
                onChange={onChangeSearchValue}
            />
            {(categories !== undefined && categories.length > 0) &&
                <CategoryTabsPanel
                    className={cls.Categories}
                    tabs={categories}
                    selectedValue={selectedCategoryValue}
                    onSelect={onSelectCategory}
                />
            }
        </Card>
    )
}

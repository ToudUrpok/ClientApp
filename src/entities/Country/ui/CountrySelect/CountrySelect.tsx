import { Select } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { Country } from '../../model/types/country'
import { memo } from 'react'

interface CountrySelectProps {
    className?: string
    selectedCountry?: Country
    onChange?: (value: Country) => void
    disabled?: boolean
}

const currencies = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USSR, content: Country.USSR },
    { value: Country.USA, content: Country.USA },
    { value: Country.Germany, content: Country.Germany }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation()

    const {
        className,
        selectedCountry,
        onChange = () => {},
        disabled
    } = props

    const onChangeHandler = (value: string): void => {
        onChange?.(value as Country)
    }

    return (
        <Select
            className={className}
            options={currencies}
            selectedValue={selectedCountry}
            label={t('Country')}
            onChange={onChangeHandler}
            disabled={disabled}
        />
    )
})

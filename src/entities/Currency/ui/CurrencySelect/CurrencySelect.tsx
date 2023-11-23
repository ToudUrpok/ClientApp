import { Select } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/types/currency'
import { memo } from 'react'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    disabled?: boolean
}

const currencies = [
    { value: Currency.rub, content: Currency.rub },
    { value: Currency.byn, content: Currency.byn },
    { value: Currency.usd, content: Currency.usd },
    { value: Currency.eur, content: Currency.eur }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation()

    const {
        className,
        value,
        onChange = () => {},
        disabled
    } = props

    const onChangeHandler = (value: string): void => {
        onChange?.(value as Currency)
    }

    return (
        <Select
            className={className}
            options={currencies}
            value={value}
            label={t('Currency')}
            onChange={onChangeHandler}
            disabled={disabled}
        />
    )
})

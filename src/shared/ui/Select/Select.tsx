import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    options: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    className?: string
    label?: string
    disabled?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        options,
        value,
        onChange,
        className,
        label,
        disabled
    } = props

    const optionsList = useMemo<JSX.Element[]>(() => {
        return options.map((opt) =>
            <option
                key={opt.value}
                value={opt.value}
            >
                {opt.content}
            </option>
        )
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        onChange?.(e.target.value)
    }

    return (
        <div className={cn(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.Label}>
                    {`${label}:`}
                </span>
            )}
            <select
                className={cls.Select}
                value={value}
                onChange={onChangeHandler}
                disabled={disabled}
            >
                {optionsList}
            </select>
        </div>
    )
})

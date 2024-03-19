import { cn } from '../../../shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, useMemo } from 'react'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    options: Array<SelectOption<T>>
    value?: T
    onChange?: (value: T) => void
    className?: string
    label?: string
    disabled?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
        onChange?.(e.target.value as T)
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
}

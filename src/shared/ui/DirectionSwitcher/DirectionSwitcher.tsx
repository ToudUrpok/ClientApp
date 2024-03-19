import { Button, ButtonSize, ButtonTheme } from '../Button/Button'
import { memo } from 'react'

interface DirectionSwitcherProps {
    className?: string
    value: boolean
    onChange?: (value: boolean) => void
}

export const DirectionSwitcher = memo((props: DirectionSwitcherProps) => {
    const {
        className,
        value,
        onChange
    } = props

    const toggle = () => {
        onChange?.(!value)
    }

    return (
        <Button
            theme={ButtonTheme.PLAIN}
            size={ButtonSize.L}
            className={className}
            onClick={toggle}
        >
            {value ? '▲' : '▼'}
        </Button>
    )
})

import { cn } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { ChangeEvent, InputHTMLAttributes, memo, useState } from 'react'
import EyeOpenedIcon from 'shared/assets/icons/eye-opened.svg'
import EyeClosedIcon from 'shared/assets/icons/eye-closed.svg'
import { Button, ButtonTheme } from '../Button/Button'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value: string
    onChange: (value: string) => void
    type?: string
    readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
    const TEXT_INPUT_TYPE = 'text'
    const PASSWORD_INPUT_TYPE = 'password'

    const {
        className,
        value,
        onChange,
        type = TEXT_INPUT_TYPE,
        readOnly,
        ...otherProps
    } = props

    const [btnType, setBtnType] = useState(type)

    const handlePassVisibilityChange = () => {
        setBtnType(btnType === PASSWORD_INPUT_TYPE ? TEXT_INPUT_TYPE : PASSWORD_INPUT_TYPE)
    }

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const attributes: Record<string, boolean | undefined> = {
        [cls.readonly]: readOnly
    }

    return (
        <div
            className={cn(cls.Input, attributes, [className])}
        >
            <input
                className={cls.Input_Input}
                value={value}
                onChange={changeEventHandler}
                type={btnType}
                readOnly={readOnly}
                {...otherProps}
            />
            {(type === PASSWORD_INPUT_TYPE) &&
                <Button
                    className={cls.Input_Btn}
                    theme={ButtonTheme.PLAIN}
                    onClick={handlePassVisibilityChange}
                >
                    {btnType === PASSWORD_INPUT_TYPE
                        ? <EyeOpenedIcon />
                        : <EyeClosedIcon />
                    }
                </Button>
            }
        </div>
    )
})

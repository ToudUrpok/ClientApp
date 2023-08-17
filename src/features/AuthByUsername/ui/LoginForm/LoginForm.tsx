import { cn } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useState } from 'react'

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (value: string) => {
        setEmail(value)
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value)
    }

    return (
        <div className={cn(cls.LoginForm, {}, [className])}>
            <Input
                type='email'
                value={email}
                placeholder={t('EmailInputPlaceholder')}
                onChange={handleEmailChange}
                className={cls.LoginForm_Input}
            />
            <Input
                type='password'
                value={password}
                placeholder={t('Password')}
                onChange={handlePasswordChange}
                className={cls.LoginForm_Input}
            />
            <Button className={cls.LoginBtn}>
                {t('Log In')}
            </Button>
        </div>
    )
}

import { cn } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks/redux'
import { loginActions, selectLoginSchema } from 'features/AuthByUsername'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

export interface LoginFormProps {
    className?: string
}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const { username, password, isLoading, error } = useAppSelector(selectLoginSchema)

    const handleEmailChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const handlePasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const handleLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={cn(cls.LoginForm, {}, [className])}>
            <Text title={t('Login')}/>
            <Input
                type='email'
                value={username}
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
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Button
                className={cls.LoginBtn}
                theme={ButtonTheme.OUTLINED}
                onClick={handleLoginClick}
                disabled={isLoading}
            >
                {t('Log In')}
            </Button>
        </div>
    )
}

export default LoginForm

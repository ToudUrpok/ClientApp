import { cn } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks/redux'
import {
    actions as loginActions,
    reducer as loginReducer,
    selectLoginError,
    selectLoginIsLoading,
    selectLoginPassword,
    selectLoginUsername
} from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ReducersList, useDynamicReducer } from 'shared/hooks/useDynamicReducer'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const reducersToLoad: ReducersList = {
    login: loginReducer
}

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useAppSelector(selectLoginUsername)
    const password = useAppSelector(selectLoginPassword)
    const error = useAppSelector(selectLoginError)
    const isLoading = useAppSelector(selectLoginIsLoading)
    useDynamicReducer(reducersToLoad, true)

    const handleEmailChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const handlePasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const handleLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, username, password, onSuccess])

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

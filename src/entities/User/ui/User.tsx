import { cn } from 'shared/lib/classNames/classNames'
import cls from './User.module.scss'

interface UserProps {
    className?: string
}

export const User = ({ className }: UserProps) => {
    return (
        <div className={cn(cls.User, {}, [className])}>

        </div>
    )
}

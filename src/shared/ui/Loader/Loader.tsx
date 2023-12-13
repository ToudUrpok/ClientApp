import { cn } from '../../../shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={cn('lds-facebook', {}, [className])}>
            <div/>
            <div/>
            <div/>
        </div>
    )
}

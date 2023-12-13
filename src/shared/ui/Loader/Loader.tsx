import { cn } from '../../../shared/lib/classNames/classNames'
import './Loader.scss'

export enum LoaderSize {
    NONE = '',
    S = 'size_s'
}

interface LoaderProps {
    className?: string
    size?: LoaderSize
}

export const Loader = ({ className, size = LoaderSize.NONE }: LoaderProps) => {
    return (
        <div className={cn('lds-facebook', {}, [className, size])}>
            <div/>
            <div/>
            <div/>
        </div>
    )
}

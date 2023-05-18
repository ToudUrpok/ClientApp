import { cn } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
    PRIMARY = 'Primary',
    SECONDARY = 'Secondary',
    CONTRAST = 'Contrast'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link 
            to={to} 
            className={cn(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            { children }
        </Link>
    );
};
import { cn } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.Links}>
                <AppLink to="/" theme={AppLinkTheme.CONTRAST}>Home</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.CONTRAST}>About</AppLink>
            </div>
        </div>
    );
};
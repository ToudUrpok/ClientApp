import { Link } from "react-router-dom";
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { cn } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cn('app', {}, [ theme ])}>
            <button onClick={toggleTheme}>Toogle Theme</button>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <AppRouter/>
        </div>
    )
}

export default App;
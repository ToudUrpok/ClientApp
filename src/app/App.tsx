import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { cn } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cn('app', {}, [ theme ])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}

export default App;
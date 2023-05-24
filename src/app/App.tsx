import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { cn } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cn('app', {}, [ theme ])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App;
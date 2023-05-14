import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { cn } from "shared/lib/classNames/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cn('app', {}, [ theme ])}>
            <button onClick={toggleTheme}>Toogle Theme</button>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
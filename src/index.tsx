import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import 'app/styles/index.scss'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'

const root = createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <ErrorBoundary>
        <StoreProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </StoreProvider>
    </ErrorBoundary>
)

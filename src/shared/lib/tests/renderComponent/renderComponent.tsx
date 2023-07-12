import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { AppRoutes } from 'shared/config/routeConfig/routeConfig'

export interface RenderComponentOptions {
    initRoute?: string
}

export function renderComponent (component: ReactNode, options: RenderComponentOptions = {}) {
    const {
        initRoute = AppRoutes.MAIN
    } = options

    return render(
        <MemoryRouter initialEntries={[initRoute]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}

import { render } from '@testing-library/react'
import { StoreProvider } from '../../../../app/providers/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from '../../../../shared/config/i18n/i18nForTests'
import { AppRoutes } from '../../../../shared/config/routeConfig/routeConfig'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from '../../../../app/store/StateSchema'

export interface RenderComponentOptions {
    initRoute?: string
    initStoreState?: DeepPartial<StateSchema>
}

export function renderComponent (component: ReactNode, options: RenderComponentOptions = {}) {
    const {
        initRoute = AppRoutes.MAIN,
        initStoreState
    } = options

    return render(
        <StoreProvider initialState={ initStoreState as StateSchema }>
            <MemoryRouter initialEntries={[initRoute]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}

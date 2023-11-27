import { useAppSelector } from '../../../../app/hooks/redux'
import { selectUserAuthData } from '../../../../entities/User'
import { Suspense, memo, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig'
import { PageLoader } from '../../../../widgets/PageLoader'

const AppRouter = () => {
    const authData = useAppSelector(selectUserAuthData)

    const appRoutes = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            return !route.authOnly || (route.authOnly && authData)
        })
    }, [authData])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {appRoutes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element= {<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)

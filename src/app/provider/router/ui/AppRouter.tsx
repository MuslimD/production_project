import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={<div className="page_wrapper">{element}</div>}
                    path={path}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;

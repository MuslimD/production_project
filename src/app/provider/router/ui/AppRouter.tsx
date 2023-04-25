import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

const AppRouter = () => (
    <Suspense fallback={<div>...</div>}>
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

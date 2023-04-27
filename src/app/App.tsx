import { classNames } from 'shared/lib/classNames/classNames';
import { useThema } from 'app/provider/themeProvider';
import { AppRouter } from 'app/provider/router';
import { NavBar } from 'widgets/NavBar';
import './styles/index.scss';
import { SideBar } from 'widgets/SideBar';
import { Suspense, useEffect } from 'react';

export const App = () => {
    const { theme } = useThema();
    useEffect(() => {
        if (Math.random() < 0.5) {
            throw new Error();
        }
    }, []);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />

                </div>
            </Suspense>
        </div>
    );
};

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/themeProvider';
import { App } from './app/App';
import 'shared/config/i18n/i18n';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { ErrorBoundary } from './app/provider/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);

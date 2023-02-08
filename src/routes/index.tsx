import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';

import LoadingScreen from 'src/components/LoadingScreen';
import DashboardLayout from 'src/layouts/dashboard';
import LogoOnlyLayout from 'src/layouts/LogoOnlyLayout';
import { EXCHANGE, MARKET, STATS, TRADE, CONVERTER } from './path';

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={EXCHANGE} replace />, index: true },
        { path: '/dashboard', element: <Navigate to={EXCHANGE} replace />, index: true },
        { path: EXCHANGE, element: <SwapPage /> },
        { path: MARKET, element: <MarketPage /> },
        { path: STATS, element: <StatsPage /> },
        { path: TRADE, element: <TradePage /> },
        { path: CONVERTER, element: <CoinConverterPage /> },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const SwapPage = Loadable(lazy(() => import('src/pages/SwapPage')));
const MarketPage = Loadable(lazy(() => import('src/pages/market')));
const StatsPage = Loadable(lazy(() => import('src/pages/stats')));
const TradePage = Loadable(lazy(() => import('src/pages/TradePage')));
const CoinConverterPage = Loadable(lazy(() => import('src/pages/converter')));

const NotFound = Loadable(lazy(() => import('../pages/Page404')));

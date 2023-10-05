import Loadable from 'react-loadable';
import Loading from 'route/components/Loading';
import routeConstants from 'route/routeConstants';

interface CommonRoute {
    name: string;
    path: string;
    authorization?: boolean;
    childRoutes?: Route[];
}

interface RedirectRoute extends CommonRoute {
    redirect: string;
}

interface ComponentRoute extends CommonRoute {
    Component: any;
}

type Route = RedirectRoute | ComponentRoute;

const commonLoadable = (loader: any) =>
    Loadable({
        loader,
        loading: Loading,
    });

const routes = [
    {
        name: 'Home',
        path: routeConstants.HOME,
        Component: commonLoadable(() => import('views/Hello')),
        authorization: true,
    },
    {
        name: 'Hello',
        path: routeConstants.HELLO,
        Component: commonLoadable(() => import('views/Hello')),
    },
    {
        name: 'Login',
        path: routeConstants.LOGIN,
        Component: commonLoadable(() => import('views/Login')),
    },
    {
        name: 'Dashboard',
        path: routeConstants.DASHBOARD,
        Component: commonLoadable(() => import('views/Dashboard')),
        authorization: true,
    },
    {
        name: 'History',
        path: routeConstants.HISTORY,
        Component: commonLoadable(() => import('views/History')),
        authorization: true,
    },
    {
        name: '404',
        path: '*',
        Component: commonLoadable(() => import('views/404')),
    },
];

export default routes;

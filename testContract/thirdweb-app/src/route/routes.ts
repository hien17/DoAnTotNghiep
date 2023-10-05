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
        Component: commonLoadable(() => import('pages/Home')),
        authorization: true,
    },
    {
        name: 'Booking',
        path: routeConstants.BOOKING,
        Component: commonLoadable(() => import('pages/Booking')),
    },
    {
        name: 'History',
        path: routeConstants.HISTORY,
        Component: commonLoadable(() => import('pages/History')),
    },
    {
        name: 'Management',
        path: routeConstants.MANAGEMENT,
        Component: commonLoadable(() => import('pages/Management')),
        authorization: true,
    },
    {
        name: '404',
        path: '*',
        Component: commonLoadable(() => import('pages/404')),
    },
];

export default routes;

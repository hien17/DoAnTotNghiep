import { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteComponent from './components/RouteComponent.tsx';
import routes from './routes.ts';

const renderRoute = route => {
    const { name, path, Component, authorization } = route;
    return (
        <Route
            key={name}
            path={path}
            element={
                // <RouteComponent authorization={authorization} path={path}>
                //     {Component && <Component {...props} />}
                // </RouteComponent>
                <Component></Component>
            }
        ></Route>
    );
};
const RouteController = memo(() => {
    return (
        <BrowserRouter>
            <Routes>{routes.map(renderRoute)}</Routes>
        </BrowserRouter>
    );
});

RouteController.displayName = 'RouteController';
export default RouteController;

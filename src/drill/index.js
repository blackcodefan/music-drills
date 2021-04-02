import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { AppBreadcrumb, AppFooter, AppHeader } from '@coreui/react';
import './scss/index.scss';

import routes from './routes';

const Footer = React.lazy(() => import('./component/footer'));
const Headers = React.lazy(() => import('./component/header'));

const Drill = props => {

    const loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"/></div>;

    return (
        <div className="app">
            <AppHeader fixed>
                <Suspense fallback={loading()}>
                    <Headers {...props}/>
                </Suspense>
            </AppHeader>
            <div className="app-body">
                <main className="main">
                    <AppBreadcrumb appRoutes={routes}/>
                    <Container fluid>
                        <Suspense fallback={loading()}>
                            <Switch>
                                {routes.map((route, index) =>{
                                    return route.component?(
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={props =>(
                                                <route.component {...props}/>
                                            )}
                                        />
                                    ):(null)
                                })}
                            </Switch>
                        </Suspense>
                    </Container>
                </main>
            </div>
            <AppFooter>
                <Suspense fallback={loading()}>
                    <Footer/>
                </Suspense>
            </AppFooter>
        </div>
    );
};

export default Drill;
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"/></div>;

const Admin = Loadable({
    loader: () => import('./admin'),
    loading
});

const Ecommerce = Loadable({
    loader: () => import('./ecommerce'),
    loading
});

const Drill = Loadable({
    loader: () => import('./drill/index'),
    loading
});

class  App extends React.Component {

    render(){
        return(
            <BrowserRouter >
                <Switch>
                    <Route path="/admin" name="Admin Panel" component={Admin}/>
                    <Route path="/drills" name="Music Drill" component={Drill}/>
                    <Route path="/" name="Shop" component={Ecommerce}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppContainer from './components/AppContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

let history = createBrowserHistory();

const AppRouter = () => (
    <Provider store={store}>
        <Router history={history}>
            <Header />
            <Switch>
                <Route path="/" component={AppContainer} />
            </Switch>
            <Footer />
        </Router>
    </Provider>
);

export default AppRouter;
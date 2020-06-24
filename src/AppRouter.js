import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppContainer from './components/AppContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

//TODO
// export const store = configureStore();
// <Provider store={store}>
// </Provider>

let history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Header />
        <Switch>
            <Route path="/" component={AppContainer} />
        </Switch>
        <Footer />
    </Router>
);

export default AppRouter;
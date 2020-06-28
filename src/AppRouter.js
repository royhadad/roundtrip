import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppContainer from './components/AppContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { setIsMobile } from './actions/general';

const desktopBreakpoint = 800;
const store = configureStore();
let history = createBrowserHistory();

class AppRouter extends React.Component {
    componentDidMount() {
        this.checkAndUpdateIsMobile();
        window.addEventListener('resize', this.checkAndUpdateIsMobile);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.checkAndUpdateIsMobile);
    }

    checkAndUpdateIsMobile = () => {
        const isMobile = window.matchMedia(`(max-width: ${desktopBreakpoint}px)`).matches;
        store.dispatch(setIsMobile(isMobile));
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path="/" component={AppContainer} />
                    </Switch>
                    <Footer />
                </Router>
            </Provider>
        )
    }
}

export default AppRouter;



import React from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HomePage from '../components/Home';
import SubmitDealPage from '../components/SubmitDealPage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import Header from '../components/Header';

// import DashboardPage from '../components/DashboardPage';
// import NotFoundPage from '../components/NotFoundPage';
// import LoginPage from '../components/LoginPage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/submit" component={SubmitDealPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

/*

      <Switch>
        <PublicRoute  component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>

*/

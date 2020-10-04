import React, { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "../../presentation/pages/Login";
import { SignUpPage } from "../../presentation/pages/SignUp";
import { DashboardPage } from "../../presentation/pages/Dashboard";
import { NotFoundPage } from "../../presentation/pages/NotFoundPage";

// screen if you're not yet authenticated.
interface PrivateRouteProps {
  path: string;
  component: ReactNode | ReactNode[];
}

const CompleteRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <PrivateRoute path="/dashboard" component={<DashboardPage />} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

const PrivateRoute = ({ path, component, ...rest }: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      path={path}
      render={({ location }) =>
        user.isAuthenticated ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const user = {
  isAuthenticated: true,
};

export default CompleteRouter;

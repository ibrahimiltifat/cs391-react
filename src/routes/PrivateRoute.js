import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <Route
      {...rest}
      render={routeProps =>
        user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/loginstudent"} />
        )
      }
    />
  );
};


export default PrivateRoute;
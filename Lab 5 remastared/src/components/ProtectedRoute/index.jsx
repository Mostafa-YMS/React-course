import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../contexts";

export const ProtectedRoute = (props) => {
  const authContext = useContext(AuthContext);

  return authContext.isLoggedIn ? (
    <Route path={props.path}>{props.children}</Route>
  ) : (
    <Route path="/">
      <Redirect to="/login" />
    </Route>
  );
};

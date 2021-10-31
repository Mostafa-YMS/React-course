import { Redirect, Route, Switch } from "react-router";
import { Users, Posts, ContactUs, UserDetails, Login } from "./Pages";
import { Navbar, ProtectedRoute, LoginRoute } from "./components";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import { ApiPosts } from "./Pages/ApiPosts";

export const App = () => {
  const authContext = useContext(AuthContext);

  return (
    <>
      {authContext.isLoggedIn && <Navbar />}

      <div className="container">
        <Switch>
          <LoginRoute path="/login">
            <Login />
          </LoginRoute>

          <ProtectedRoute path="/apiposts">
            <ApiPosts />
          </ProtectedRoute>

          <ProtectedRoute path="/posts">
            <Posts />
          </ProtectedRoute>

          <ProtectedRoute path="/users/:id">
            <UserDetails />
          </ProtectedRoute>

          <ProtectedRoute path="/users">
            <Users />
          </ProtectedRoute>

          <ProtectedRoute path="/contactus">
            <ContactUs />
          </ProtectedRoute>

          <Route path="/">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </div>
    </>
  );
};

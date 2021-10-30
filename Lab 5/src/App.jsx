import { Redirect, Route, Switch } from "react-router";
import { Users } from "./Pages/Users";
import { Posts } from "./Pages/Posts";
import { ContactUs } from "./Pages/ContactUs";
import { UserDetails } from "./Pages/UserDetails";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginRoute } from "./components/LoginRoute";
import { Login } from "./Pages/Login";
import { ApiPosts } from "./Pages/ApiPosts";


export const App = () => {
  

  return (
    <>
    <Navbar/>
    <div className="container">
      <Switch>

      <LoginRoute path="/login">
          <Login/>
        </LoginRoute>

        <Route path="/apiposts">
          <ApiPosts/>
        </Route>
        
        <Route path="/posts">
          <Posts/>
        </Route>

        <ProtectedRoute path="/users">
          <Users/>
        </ProtectedRoute>

        <Route path="/contactus">
          <ContactUs/>
        </Route>

        <Route path="/users/:id">
          <UserDetails/>
        </Route>

        <Route path="/">
          <Redirect to="/posts"/>
        </Route> 

      </Switch>
      
    </div>
    </>
    
  );
};

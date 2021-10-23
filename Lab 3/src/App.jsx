import { Redirect, Route } from "react-router";
import { Users } from "./Pages/Users";
import { Posts } from "./Pages/Posts";
import { ContactUs } from "./Pages/ContactUs";
import { UserDetails } from "./Pages/UserDetails";
import { Navbar } from "./components/Navbar";


export const App = () => {
  

  return (
    <>
    <Navbar/>
    <div className="container">

      <Route path="/posts">
        <Posts/>
      </Route>

      <Route path="/users" exact>
        <Users/>
      </Route>

      <Route path="/contactus">
        <ContactUs/>
      </Route>

      <Route path="/users/:id">
        <UserDetails/>
      </Route>

      <Route path="/" exact>
        <Redirect to="/posts"/>
      </Route>
      
    </div>
    </>
    
  );
};

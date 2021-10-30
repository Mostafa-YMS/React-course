import { Redirect, Route } from "react-router";

export const LoginRoute = (props)=> {
    const isLoggedIn = localStorage.getItem("token") === "12345";
    return !isLoggedIn ? (<Route path={props.path}>
    {props.children}
  </Route>) : (<Route path="/">
      <Redirect to="/users"/>
      </Route>)
}
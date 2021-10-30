import { Redirect, Route } from "react-router";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const ProtectedRoute = (props)=> {
    const authContext = useContext(AuthContext)
    return authContext.isLoggedIn ? (<Route path={props.path}>
    {props.children}
  </Route>) : (<Route path="/">
      <Redirect to="/login"/>
      </Route>)
}
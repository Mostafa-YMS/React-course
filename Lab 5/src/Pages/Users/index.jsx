import { Link } from 'react-router-dom';
import { users } from './users';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Users = ()=> {
  const history = useHistory()
  const authContext = useContext(AuthContext)

  const handleLogOut = ()=> {
    authContext.logout()
    history.replace("/login")
  }
    return (<>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {users.map((user)=> {
          return(
        <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td> <Link to={`/users/${user.id}`}> {user.name} </Link></td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        </tr>
      )})}
    
  </tbody>
</table>
<button className="btn btn-danger" onClick={handleLogOut}>logout</button>
</>)
}
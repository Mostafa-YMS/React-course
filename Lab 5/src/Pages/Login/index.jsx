import { Input2 } from "../../components/Input2"
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from "../../contexts";

export const Login = ()=> {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[isValid, setIsValid] = useState(true)
    const history = useHistory()
    const authContext = useContext(AuthContext)


    const handleSubmit = (event)=> {
        event.preventDefault()
        if (authContext.login(email, password)) {
            history.replace("/users");
        }
        else setIsValid(false)
    }
    

    return(<>
    <h1>Hello</h1>
    <form onSubmit={handleSubmit}>
    <div className="card d-flex col-6">
    <Input2 type="email" placeholder="Email" setValue={setEmail} value={email}/>
    <Input2 type="password" placeholder="Password" setValue={setPassword} value={password}/>
    {!isValid && (<div className="alert alert-danger">Wrong email or password</div>)}
    <button className="btn btn-primary">login</button>
    </div>
    </form>
    </>)
}
import { useState } from "react"
import { Input } from "../Input"
import { useApiContextPost } from '../../hooks/useApiContextPost';

export const Add = (props) => {
const [todo, setTodo] = useState("Task Name")
const [desc, setDesc] = useState("Description")
const poster = useApiContextPost()
    
const handleSubmit = () => {
    props.onAdd({todo, desc})
    const body = {title: todo, body: desc}
    console.log(poster(body))
}

    return ( <>
    <h1>Add task</h1>
    <Input value={todo} label="Todo" setValue={setTodo}/>
    <Input value={desc} label="Description" setValue={setDesc}/>
    
    <button className="btn btn-primary col-12" onClick={handleSubmit}>Add</button>
    </>)
}
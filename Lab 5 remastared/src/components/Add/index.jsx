import { useState } from "react";
import { usePost } from "../../hooks/usePost";
import { Input } from "../Input";

export const Add = (props) => {
  const [todo, setTodo] = useState("Task Name");
  const [desc, setDesc] = useState("Description");
  const [id, setId] = useState(0);
  const poster = usePost();

  const handleSubmit = () => {
    props.onAdd({ todo, desc, id });
    console.log(poster({ title: todo, body: desc, id: id }));
    setId(id + 1);
  };

  return (
    <>
      <h1>Add task</h1>
      <Input value={todo} label="Todo" setValue={setTodo} />
      <Input value={desc} label="Description" setValue={setDesc} />

      <button className="btn btn-primary col-12" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
};

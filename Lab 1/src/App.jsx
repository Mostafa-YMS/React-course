import { Todo } from "./components/Todo"

export const App = () => {
  {
    const tags = [
      {todo:'postgre', desc:'DBMS revise 3PM'},
      {todo:'react', desc:'js frame work session 9AM'},
      {todo:'study', desc:'study react 7PM'},
      {todo:'go to gym', desc:'do some sport at 9PM'},
    ]
  
  return (
    <div>
      <h1>To do list</h1>
      <table border="3">
        {
          tags.map((tag) => <Todo todo={tag.todo} desc={tag.desc}/>)
        }
      </table>
    </div>
    
  );
};
}
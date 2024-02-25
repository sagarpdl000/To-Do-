import AddToDo from "./Components/AddToDo";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <div className='text-center'>
      <div className="Font-bold text-2xl">To-Do Application</div>
      <AddToDo/>
      <ToDoList/>

      
    </div>
  );
}

export default App;

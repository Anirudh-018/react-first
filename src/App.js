import { useState } from "react";
import Todo from "./components/Todo";
const content = [
  // { name: "complete tasks", time_limit: "time limit is 8 hrs" },
  { name: "go to gym", time_limit: "time limit is 1.5 hrs", completed: false },
];
function loop() {
  return (
    <div>
      {content.map((item, index) => (
        <Todo index={index} completed={item.completed} />
      ))}
    </div>
  );
}
function App() {
  const [toDoList, setToDoList] = useState([content]);
  const [newTaskName, setNewTaskName] = useState("he");
  const [newTaskTime, setTime] = useState(0);
  const taskdetails = {};
  taskdetails.completed = false;
  const handleName = (event) => {
    setNewTaskName(event.target.value);
  };
  const handleTime = (event) => {
    setTime(event.target.value);
  };
  function addName() {
    taskdetails.name = newTaskName;
  }

  function addTime() {
    taskdetails.time_limit = "time limit is " + newTaskTime + "hrs";
  }

  function addTask() {
    const newToDoList = [...toDoList, taskdetails];
    setToDoList(newToDoList);
    content.push(taskdetails);
  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}>To Do</h1>
      <input type="text" onChange={handleName} />
      <button className="btn" onClick={addName}>
        add task name
      </button>
      <br></br>
      <br></br>
      <input type="number" onChange={handleTime} />
      <button className="btn" onClick={addTime}>
        add task time
      </button>
      <br></br>
      <br></br>
      <button className="btn" onClick={addTask}>
        add the task
      </button>
      {loop()}
    </div>
  );
}

export default App;
export const contents = content;

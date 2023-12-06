import { useState, useEffect } from "react";
import axios from "axios";
// import "./todolist.css";
import InputField from "./InputField";
import { MdDeleteSweep } from 'react-icons/md'


const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Fetch tasks from JSONPlaceholder API
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const addTask = () => {
    if (newTask.trim() !== "") {
      // Add new task to JSONPlaceholder API
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title: newTask,
          completed: false,
        })
        .then((response) => {
          setTasks([...tasks, response.data]);
          setNewTask("");
        })
        .catch((error) => {
          console.error("Error adding task:", error);
        });
    }
  };

  const completeTask = (taskId) => {
    // Update task completion status in JSONPlaceholder API
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        axios.put(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
          ...task,
          completed: !task.completed,
        });
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    // Remove task from JSONPlaceholder API
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      .then(() => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };


  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="inputField">
        <InputField type={"text"} value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addTask} className="inputBtn">+</button>
      </div>
      <div className="toDoList">
      <ul className="list-items">
        {tasks.map((task) => (
          <li id="items" key={task.id} className={task.completed ? "isChecked" : ""}>
          <div className="items-text">
            <InputField type={"checkbox"} checked={task.completed} onChange={() => completeTask(task.id)} />
            <span>{task.title}</span>
          </div>
          <button className="delete-icon" onClick={() => deleteTask(task.id)}><MdDeleteSweep /></button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 ? (<p className="notify">You are done!</p>) : null}
      </div>
    </div>
  );
};

export default TodoList;

import React, { Fragment, useEffect, useState } from "react";
import EditTodos from "./EditTodos";
// useEffect will make a fetch call to a restful api everytime this component is rendered

const ListTodos = () => {
  // React hooks useState
  const [todos, setTodos] = useState([]);

  // Get todos
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      //   console.log(jsonData);
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      //   console.log(deleteTodo);
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  /* UseEffect renders it's code multiple times upon rendering this component.
    useEffect(() => { (This is the default way)
        getTodos();
    }); (no bracket required for multiple renders)
  In order to make it only render once, add a bracket at the end of the arrow function like above */
  useEffect(() => {
    getTodos();
  });

  // Main code
  // console.log(todos);
  return (
    <Fragment>
      <table className="table mt-5 text-center ">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.description}</td>
              <td>
                <EditTodos todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;

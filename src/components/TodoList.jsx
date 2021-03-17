import React from 'react';
import Todo from "./Todo"
function TodoList({todos, setTodos}) {
  return (
    <div className="todoList">
        <ul className="todoList__roster">
           {todos.map(todo => (
               <Todo key={todo.id} setTodos={setTodos} todos={todos}  todo={todo} text={todo.text} />
           ))}
        </ul>
    </div> 
  )
  
}

export default TodoList;
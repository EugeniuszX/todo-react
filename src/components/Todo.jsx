import React from 'react';

const Todo = ({text,todo,todos,setTodos}) => {
    const deleteHandler = () =>  setTodos(todos.filter(item => item.id !== todo.id ))

    const completeHandler = () => setTodos(todos.map(item => item.id === todo.id ? {...item,completed: !item.completed, } : item))
    
  return (
    <div className="todoItem">
      <li className={`todoItem__item ${todo.completed ? "completed" : "" }`}>{text}</li>
      <button onClick={completeHandler} className="todoItem__complete">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="todoItem__trash">
        <i className="fas fa-trash"></i>
      </button>
    
    </div>
  );
};

export default Todo;

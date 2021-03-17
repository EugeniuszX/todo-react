import React, { useState, useEffect } from 'react';
import './App.scss';
import Tasks from './components/Tasks';
import TodoList from './components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = () => localStorage.setItem('todos', JSON.stringify(todos));
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="todo">
      <h1 className="todo__title">TODO LIST</h1>
      <div className="todo__tasks">
        <Tasks
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
      </div>
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;

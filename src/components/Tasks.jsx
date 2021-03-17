import React from 'react';
import './index.scss';
function Tasks({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText('');
  };
  return (
    <div className="tasks">
      <form onSubmit={submitTodoHandler}>
        <input
          required
          value={inputText}
          type="text"
          placeholder="Enter a Todo..."
          className="tasks__input"
          onChange={inputTextHandler}
        />
        <button type="submit" className="tasks__button-add">
          Add
        </button>
      </form>
    </div>
  );
}

export default Tasks;

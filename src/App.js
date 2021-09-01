import React, { useState } from 'react';
import './App.css';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
      isEdit: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
      isEdit: false
    },
    {
      text: "Build really cool to-do app",
      isCompleted: false,
      isEdit: false
    }
  ]);

  const addTodo = text => {
    const NewTodos = [...todos, {text}];
    setTodos(NewTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    // newTodos = newTodos.filter((el, i) => i !== index);
    setTodos(newTodos);
  }

  const editTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isEdit = true;
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} 
          completeTodo={completeTodo} removeTodo={removeTodo}
          editTodo={editTodo} />
        ))}
        <TodoForm addTodo={addTodo} /*editTodoSubmit={editTodoSubmit}*/ type={'newTodo'} />
      </div>
    </div>
  )
}

export default App;
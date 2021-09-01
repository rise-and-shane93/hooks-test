import React, { useState } from 'react';

import TodoForm from './TodoForm';

function Todo({todo, index, completeTodo, editTodo, removeTodo}) {

    return (
        <>
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}, 
        {display: todo.isEdit ? 'none' : 'flex'}} 
        className="todo">
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => removeTodo(index)}>&times;</button>
            </div>
        </div>
        <div style={{display: todo.isEdit ? 'block' : 'none'}}>
            <TodoForm type={"editTodo"} placeholderText={todo.text} />
        </div>
        </>
    )
}

export default Todo;
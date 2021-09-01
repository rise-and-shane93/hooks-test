import React, { useState } from 'react';

function TodoForm({addTodo, type, placeholderText}) {

    const [value, setValue] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue('');
    }

    return (
        <>
        <form onSubmit={handleSubmit} style={{display: type === "newTodo" ? "block" : "none"}}>
            <input type="text" 
                className="input" 
                value={value} 
                placeholder={"Add todo"}
                onChange={e => setValue(e.target.value)} />
        </form>
        <form onSubmit={handleSubmit} style={{display: type === "newTodo" ? "none" : "block"}}>
            <input type="text" 
                className="input" 
                value={placeholderText} 
                placeholder={"Edit todo"}
                onChange={e => setValue(e.target.value)} />
        </form>
        </>
    )
}

export default TodoForm;
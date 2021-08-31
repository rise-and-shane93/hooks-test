import React, { useState } from 'react';

function Todo({todo, index}) {

    return (
        <div className="todo">
            {todo.text}
        </div>
    )
}

export default Todo;
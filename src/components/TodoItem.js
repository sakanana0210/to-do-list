import React from 'react';
import './TodoItem.scss';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <div className='decorationLine'></div>
            <label className="checkboxContainer">
                <input
                    type='checkbox'
                    className='checkbox'
                    checked={todo.completed}
                    onChange={() => toggleTodo(index)}
                />
                <span class="checkmark" ></span>
            </label>
            <span className="todoText" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button className="btnDelete" onClick={() => deleteTodo(index)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#cad0eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="#cad0eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </li>
    );
};

export default TodoItem;
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import MoveButton from './MoveButton';
import './TodoList.scss';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [completionRate, setCompletionRate] = useState(100);

    // 添加事項
    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const currentDate = new Date();
            setTodos([...todos, { text: newTodo, completed: false, createdTime: currentDate }]);
            setNewTodo('');
        }
    };

    // 刪除事項
    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    // 勾選完成 or 未完成
    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    // 計算完成率
    useEffect(() => {
        const calculateCompletionRate = () => {
            const completedTodos = todos.filter((todo) => todo.completed === true);
            setCompletionRate(Math.round((100 * completedTodos.length) / todos.length));
        };
        if (todos.length > 0) {
            calculateCompletionRate();
        } else {
            setCompletionRate(100);
        }
    }, [todos]);

    return (
        <div className='todoListContainer'>
            <h1 className='title'>Todo List</h1>
            <p className='description'>Add things to do</p>
            <hr />
            <div className='mainSection'>
                <div className='completionRateContainer'>
                    <span className="progress-rate">{completionRate}%</span>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${completionRate}%` }}></div>
                    </div>
                </div>
                <ul className='todoLists'>
                    {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        index={index}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                    ))}
                </ul>
            </div>
            <hr />
            <MoveButton todos={todos} setTodos={setTodos} />
            <div className='addSection'>
                <p>Add to list</p>
                <div className='btnContanier'>
                    <input
                        className='addInput'
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button className='btnAdd' onClick={addTodo}>+</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
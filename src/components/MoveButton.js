import React, { useState, useEffect } from 'react';
import './MoveButton.scss';

const MoveButton = ({ todos, setTodos }) => {
    const [isOn, setIsOn] = useState(false);

    // 切換 MoveButton 的狀態
    const toggleButton = () => {
        setIsOn(!isOn);
    };

    // on時將已完成的事項移到最下面，off時依照建立時間排序
    useEffect(() => {
        if(isOn){
            const updatedTodos = [...todos];
            const completedTodos = updatedTodos.filter(todo => todo.completed);
            const uncompletedTodos = updatedTodos.filter(todo => !todo.completed);
            setTodos([...uncompletedTodos, ...completedTodos]);
        }else{
            const updatedTodos = [...todos];
            const sortedTodos = updatedTodos.sort((a, b) => {
                const timeA = new Date(a.createdTime).getTime();
                const timeB = new Date(b.createdTime).getTime();
                return timeA - timeB;
            });
            setTodos(sortedTodos);
        }
    }, [todos]);

    // 確保在on的狀態下新增todoItem時，若勾選會將該Item移到下面
    useEffect(() => {
        if(isOn){
            const updatedTodos = [...todos];
            const completedTodos = updatedTodos.filter(todo => todo.completed);
            const uncompletedTodos = updatedTodos.filter(todo => !todo.completed);
            setTodos([...uncompletedTodos, ...completedTodos]);
        }else{
            const updatedTodos = [...todos];
            const sortedTodos = updatedTodos.sort((a, b) => {
                const timeA = new Date(a.createdTime).getTime();
                const timeB = new Date(b.createdTime).getTime();
                return timeA - timeB;
            });
            setTodos(sortedTodos);
        }
    }, [isOn]);
    
    return (
        <div className='switchSection'>
            <span>Move done things to end?</span>
            <div className={`toggleContainer ${isOn ? 'on' : 'off'}`} onClick={toggleButton}>
                <div className="btn"></div>
            </div>
        </div>
    );
};

export default MoveButton;
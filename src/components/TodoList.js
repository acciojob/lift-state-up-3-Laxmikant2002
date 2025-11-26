import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div className="todo-list">
      <h3>Todo List</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span>{todo.text}</span>
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
            {todo.completed && <span> ✓ Completed</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

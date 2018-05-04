import React from 'react';

const TodoItem = (props) => {
  const { todo, index } = props;
  return (
    <li>
      <input onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
      {/* <span style={{
        textDecoration: todo.done ? 'line-through' : 'inherit'
      }}>{todo.title}</span> */}
      <span className={todo.done ? 'done' : ''}>{todo.title}</span>
      <button onClick={() => props.removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;

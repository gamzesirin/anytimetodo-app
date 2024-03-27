import React from 'react';
import TodoItem from '../molecules/TodoItem';

interface Todo {
  id: string;
  content: string;
}

interface TodoListProps {
  todos: Todo[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onComplete, onDelete }) => {
  return (
    <div className="list-group">
      {todos.map(todo => (
        <TodoItem
        key={todo.id}
        todo={todo}
        onComplete={() => {/* Todo tamamlama  */}}
        onDelete={() => {/* Todo silme */}}
        onUpdate={() => {/* Todo güncelleme */}}
      />
      ))}
    </div>
  );
};

export default TodoList;

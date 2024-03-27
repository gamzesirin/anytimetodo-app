import Button from '../atoms/Button';
import React from 'react';

interface TodoItemProps {
  todo: {
    id: string;
    content: string;
    completed: boolean;
  };
  onComplete: () => void;
  onDelete: () => void;
  onUpdate: () => void; 
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onComplete, onDelete, onUpdate }) => {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      {todo.content}
      <div>
        <Button onClick={onComplete} variant="success" >Tamamla</Button>
        <Button onClick={onUpdate} variant="warning" >Güncelle</Button>
        <Button onClick={onDelete} variant="danger">Sil</Button>
      </div>
    </div>
  );
};

export default TodoItem;

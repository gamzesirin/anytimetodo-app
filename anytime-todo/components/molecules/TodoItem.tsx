import { BiCheckSquare, BiPencil, BiTrash } from 'react-icons/bi';

import Button from '../atoms/Buttons';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import Link from 'next/link';
import React from 'react';

interface TodoItemProps {
  todo: {
    id: string;
    content: string;
  };
  onComplete: () => void;
  onDelete: () => void;
  onUpdate: () => void; 
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onComplete, onDelete, onUpdate }) => {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center flex-wrap gap-3">
      {todo.content}
      
      <div className='d-flex gap-2'>
      <Link href={`/update/${todo.id}`} passHref>
        <Button onClick={onUpdate} variant="warning">
              <HiOutlinePencilSquare style={{ color: 'white' }}  />
              </Button>
        </Link>
        <Button onClick={() => onComplete(todo.id)} variant="success">
                <BiCheckSquare /> 
              </Button>
              <Button onClick={() => onDelete(todo.id)} variant="danger">
                <BiTrash />
              </Button>
      </div>
      </div>
 



  );
};

export default TodoItem;


import React, { useState } from 'react';

import TabNavigation from '../molecules/TabNavigation';
import TodoList from './TodoList';

interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: '1', content: 'Next.js öğren', completed: false },
  { id: '2', content: 'TypeScript ile pratik yap', completed: true },
  { id: '3', content: 'Bootstrap tasarımını geliştir', completed: false },
];

const TodoTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'completed' | 'notCompleted'>('notCompleted');

  const filteredTodos = todos.filter(todo => 
    activeTab === 'completed' ? todo.completed : !todo.completed
  );

  return (
    <div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <TodoList todos={filteredTodos} onComplete={() => {}} onDelete={() => {}} />
    </div>
  );
};

export default TodoTabs;

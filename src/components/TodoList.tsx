import { TodoItem } from './TodoItem';
import { Todo } from '../types';
import { useEffect, useRef } from 'react';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todos]);

  return (
    <div ref={listRef} className="space-y-2 max-h-[25dvh] overflow-y-auto pr-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

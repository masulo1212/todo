import { TodoItem } from './TodoItem';
import { useEffect, useRef } from 'react';
import { useTodoStore } from '../store/todoStore';

export function TodoList() {
  const listRef = useRef<HTMLDivElement>(null);
  const { todos } = useTodoStore();
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todos]);

  return (
    <div ref={listRef} className="space-y-2 max-h-[25dvh] overflow-y-auto pr-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

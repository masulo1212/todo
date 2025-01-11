import { useEffect, useRef } from "react";
import { useTodoStore } from "../../store/todoStore";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const listRef = useRef<HTMLDivElement>(null);
  const { todos, getSortedTodos } = useTodoStore();
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todos]);

  return (
    <div
      ref={listRef}
      className="mt-4 space-y-2 max-h-[25dvh] overflow-y-auto pr-2"
    >
      {getSortedTodos().map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

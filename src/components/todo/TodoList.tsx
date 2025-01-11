import { useEffect, useRef } from "react";
import { useTodoStore } from "../../store/todoStore";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const listRef = useRef<HTMLDivElement>(null);
  const { todos, getSortedTodos, deleteCompletedTodos } = useTodoStore();
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todos]);

  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <div>
      <div className="flex justify-between items-center"></div>
      <div
        ref={listRef}
        className="mt-4 space-y-2 max-h-[25dvh] overflow-y-auto pr-2"
      >
        {getSortedTodos().map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { useTodoStore } from "../store/todoStore";

export const TodoCard = ({ children }: { children: React.ReactNode }) => {
  const { todos } = useTodoStore();
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <div className="sm:w-full max-w-md mx-auto my-auto bg-gradient-to-b from-blue-50 to-purple-50 rounded-xl shadow-lg p-4 sm:p-6">
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
        <h1 className="text-2xl font-semibold text-gray-800">
          {completedTodos}/{totalTodos}
        </h1>
      </div>
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Add things to do</p>
        {children}
      </div>
    </div>
  );
};

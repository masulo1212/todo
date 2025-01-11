import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export function useDeleteConfirm() {
  const { deleteCompletedTodos, todos } = useTodoStore();
  const [showConfirm, setShowConfirm] = useState(false);
  const hasCompletedTodos = todos.some((todo) => todo.completed);

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    deleteCompletedTodos();
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return {
    showConfirm,
    hasCompletedTodos,
    handleDelete,
    confirmDelete,
    cancelDelete,
  };
}

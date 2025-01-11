import { Trash2 } from "lucide-react";
import { useDeleteConfirm } from "../../hooks/useDeleteConfirm";
import { useTodoStore } from "../../store/todoStore";

export function SettingsToggle() {
  const { setMoveDoneToEnd, moveDoneToEnd, deleteCompletedTodos, todos } =
    useTodoStore();

  const {
    showConfirm,
    hasCompletedTodos,
    handleDelete,
    confirmDelete,
    cancelDelete,
  } = useDeleteConfirm();

  return (
    <div className="flex items-center justify-end text-sm text-gray-500 pt-4 pb-20 h-10">
      {hasCompletedTodos && (
        <button
          onClick={handleDelete}
          className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors mr-auto"
          title="Delete completed items"
        >
          <Trash2 size={18} />
        </button>
      )}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 m-2 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium mb-4">Confirm Delete</h3>
            <p className="mb-4">
              Are you sure you want to delete all completed items?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <span className="mr-2">Move done things to end?</span>
      <button
        onClick={() => setMoveDoneToEnd()}
        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${
          moveDoneToEnd ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            moveDoneToEnd ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

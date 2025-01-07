import { useTodoStore } from '../store/todoStore';

export function SettingsToggle() {
  const { setMoveDoneToEnd, moveDoneToEnd } = useTodoStore();
  return (
    <div className="flex items-center justify-end space-x-2 text-sm text-gray-500 pb-20">
      <span>Move done things to end?</span>
      <button
        onClick={() => setMoveDoneToEnd()}
        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${
          moveDoneToEnd ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            moveDoneToEnd ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}

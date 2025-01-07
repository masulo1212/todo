import React from 'react';
import { CheckCircle2, Circle, X } from 'lucide-react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
      <div className="flex items-center">
        <button
          onClick={() => onToggle(todo.id)}
          className="text-blue-500 hover:text-blue-600 transition-colors mr-3"
        >
          {todo.completed ? (
            <CheckCircle2 className="w-6 h-6" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>
        <span
          className={`${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

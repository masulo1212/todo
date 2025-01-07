// 匯入所需的 React 元件和鉤子
import React from 'react';
import { ProgressBar } from './components/ProgressBar';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { SettingsToggle } from './components/SettingsToggle';
import { useTodos } from './hooks/useTodos';

function App() {
  // 從自定義鉤子獲取所有待辦事項相關的狀態和方法
  const {
    todos,
    completedPercentage,
    moveDoneToEnd,
    setMoveDoneToEnd,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();

  return (
    // 主容器：全螢幕背景和置中佈局
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 ">
      {/* 待辦事項卡片：包含漸層背景和陰影效果 */}
      <div className="w-full max-w-md bg-gradient-to-b from-blue-50 to-purple-50 rounded-xl shadow-lg p-6 ">
        {/* 標題區域 */}
        <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">新增待辦事項</p>
          {/* 主要內容區域：包含進度條和待辦事項列表 */}
          <div className="border-y border-y-2 border-gray-300 py-4">
            {/* 進度條元件：顯示完成百分比 */}
            <ProgressBar percentage={completedPercentage} />
            {/* 待辦事項列表區域 */}
            <div className="mt-4">
              <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            </div>
          </div>

          {/* 設定區域：控制已完成項目的顯示位置 */}
          <SettingsToggle
            enabled={moveDoneToEnd}
            onToggle={() => setMoveDoneToEnd(!moveDoneToEnd)}
          />
          {/* 新增待辦事項的表單 */}
          <AddTodoForm onAdd={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;

# Todo 應用程式

這是一個使用 Create React App (CRA) + TypeScript 構建的 todo list app。

## 基礎功能

1. ✅ 輸入框功能：

   - 使用 addTodo 函數處理新增
   - 使用 Date.now() 作為 ID，確保按時間排序
   - TodoList 組件中有自動滾動到底部的功能

2. ✅ 勾選框功能：

   - 使用 toggleTodo 函數處理勾選狀態
   - 有完成狀態的切換功能

3. ✅ 刪除按鈕：

   - 使用 deleteTodo 函數處理刪除功能
   - 新增 hover 時的刪除按鈕

4. ✅ 滾動條：

   - TodoList 組件中有 overflow-y-auto 和 max-h-[25dvh] 設置
   - ref:https://dev.to/frehner/css-vh-dvh-lvh-svh-and-vw-units-27k4#the-new-css-units

5. ✅ 進度條：

   - 使用 completedPercentage 計算完成率
   - 已經有取整數的處理

6. ✅ 切換鈕：

   - 使用 moveDoneToEnd 狀態控制
   - getSortedTodos 函數處理排序邏輯

## 新增功能

1. ✅ 使用 Zustand 管理狀態

- 使用 persist 持久化狀態

2. ✅ 新增目前 todo 數量

3. ✅ 新增一鍵刪除所有以完成 todo

4. ✅ 修改刪除按鈕 hover 效果

5. ✅ 新增 RWD(responsive web design)功能

6. ✅ github pages 部署

## 開發環境需求

- Node.js 18+
- npm 或 bun

## 快速開始

1. 安裝依賴：

```bash
npm install
# 或
bun install
```

2. 啟動開發伺服器：

```bash
npm start
# 或
bun start
```

3. 打開瀏覽器訪問：`http://localhost:3000`

## 構建專案

執行以下命令構建專案：

```bash
npm run build
# 或
bun build
```

## 使用技術

- React 18
- TypeScript
- Create React App
- Tailwind CSS
- Zustand (狀態管理)
- Lucide React (圖標庫)

## 專案結構

```
src/
  ├── components/     # React 組件
  │   ├── todo/      # 待辦事項相關組件
  │   └── ...        # 其他共用組件
  ├── store/         # 狀態管理
  ├── types/         # TypeScript 類型定義
  ├── App.tsx        # 主應用組件
  ├── main.tsx       # 應用入口
  └── index.css      # 全局樣式
```

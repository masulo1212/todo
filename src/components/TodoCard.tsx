export const TodoCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-md bg-gradient-to-b from-blue-50 to-purple-50 rounded-xl shadow-lg p-6 ">
      <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Add things to do</p>
        {children}
      </div>
    </div>
  );
};

import { useTodoStore } from "../../store/todoStore";
import { Divider } from "../Divider";
import { ProgressBar } from "./ProgressBar";
import { SettingsToggle } from "./SettingsToggle";
import { TodoList } from "./TodoList";

export function TodoContent() {
  const { todos } = useTodoStore();

  return (
    <>
      {todos.length === 0 ? (
        <p className="text-lg text-center pb-4">Please add more todos!</p>
      ) : (
        <>
          <Divider>
            <ProgressBar />
            <TodoList />
          </Divider>
          <SettingsToggle />
        </>
      )}
    </>
  );
}

import { Background } from "./components/Background";
import { Divider } from "./components/Divider";
import { AddTodoForm } from "./components/todo/AddTodoForm";
import { ProgressBar } from "./components/todo/ProgressBar";
import { SettingsToggle } from "./components/todo/SettingsToggle";
import { TodoList } from "./components/todo/TodoList";
import { TodoCard } from "./components/TodoCard";

function App() {
  return (
    <Background>
      <TodoCard>
        <Divider>
          <ProgressBar />
          <TodoList />
        </Divider>
        <SettingsToggle />
        <AddTodoForm />
      </TodoCard>
    </Background>
  );
}

export default App;

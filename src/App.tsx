import { Background } from "./components/Background";
import { AddTodoForm } from "./components/todo/AddTodoForm";
import { TodoContent } from "./components/todo/TodoContent";
import { TodoCard } from "./components/TodoCard";

function App() {
  return (
    <Background>
      <TodoCard>
        <TodoContent />

        <AddTodoForm />
      </TodoCard>
    </Background>
  );
}

export default App;

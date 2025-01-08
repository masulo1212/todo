import { ProgressBar } from './components/todo/ProgressBar';
import { TodoList } from './components/todo/TodoList';
import { AddTodoForm } from './components/todo/AddTodoForm';
import { SettingsToggle } from './components/todo/SettingsToggle';
import { Background } from './components/background';
import { TodoCard } from './components/TodoCard';
import { Divider } from './components/Divider';

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

import { useTheme } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { TaskManager } from './components/TaskManager';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>React Context & Reducer App</h1>
      <p>Current theme: {theme}</p>

      <div style={{ marginTop: '1rem' }}>
        <ThemeToggle />
      </div>

      <TaskManager />
    </div>
  );
}

export default App;
import { useReducer, useState } from 'react';
import { taskReducer, initialTaskState } from '../reducers/taskReducer';

export function TaskManager() {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    dispatch({ type: 'ADD_TASK', payload: { title: trimmed } });
    setInput('');
  };

  const handleRemove = (id: string) => {
    dispatch({ type: 'REMOVE_TASK', payload: { id } });
  };

  return (
    <div className="section">
      <h2>Task Manager</h2>

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {state.tasks.length === 0 ? (
        <p style={{ marginTop: '1rem' }}>No tasks yet. Add one above.</p>
      ) : (
        <ul className="task-list">
          {state.tasks.map((task) => (
            <li key={task.id}>
              <span>{task.title}</span>
              <button onClick={() => handleRemove(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
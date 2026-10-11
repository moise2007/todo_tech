import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Dispone</h1>
      <p>Tâches terminées : {count}</p>
      <button onClick={() => setCount(count + 1)}>Terminer une tâche</button>
    </main>
  );
}
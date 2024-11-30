import React, { useState } from 'react';
import TodoWrapper from './Components/TodoWrapper';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, text: "Study ReactJS", completed: false },
    { id: 2, text: "Learn Node.js", completed: true },
    { id: 3, text: "Create web scraper", completed: false },
  ])


  return (
    <div className="App w-full">
      <TodoWrapper />
    </div>
  );
}
export default App;

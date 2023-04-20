
import './App.css';

import React from 'react'
import Todos from "./Components/Todos"

const App = (todos) => {
  return (
    <div>
      {todos.length === 0 &&
        'There are no events to attend to, please create an event'}
      {<Todos todos={todos} />}

    </div>
  )
}

export default App

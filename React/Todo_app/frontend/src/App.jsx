import { useState } from 'react'
import TodoList from '../components/TodoList';
import Todoform from '../components/todoform';
import './App.css'

function App() {

  return (
    <>
      <div>
        <Todoform />
        <TodoList />
      </div>
    </>
  )
}

export default App

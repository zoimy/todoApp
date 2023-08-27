import React, { useState } from "react"
import {VscChromeClose} from 'react-icons/vsc'

function App() {
const [input, setInput] = useState('') 
const [tasks, setTasks] = useState([
  {id: 1, title: 'IA lublu jbfdhf', isCompleted: false},
  {id: 2, title: 'IA lublu jbfdhf', isCompleted: false},
  {id: 3, title: 'IA lublu jbfdhf', isCompleted: false},
])

const todoCompleted =(id) => {
  setTasks(tasks.filter(task => {
    if(task.id === id) {
      task.isCompleted = !task.isCompleted
    }
    return task
  }))
}

const removeTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

const addTask = (e) => {
  if (e.code === 'Enter' && input.trim() !== '') {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: input,
        isCompleted: false,
      },
    ]);
    setInput('');
  }
};

const addTodoBtn = (e) => {
  if ( input.trim() !== '') {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: input,
        isCompleted: false,
      },
    ]);
    setInput('');
  }
};


  return (
    <div className='text-center justify-center'>
      <h1 className='text-3xl mb-6'>Todo App</h1>
      <input type="text" value={input} className='border-2 border-zinc-800 rounded-md' onKeyUpCapture={(e) => addTask(e)} onChange={e => setInput(e.target.value)}/>
      <button className='border-2 border-zinc-700 rounded-md ml-5 p-1 hover:bg-black hover:text-white transition-colors ease-in-out duration-300' onClick={(e => addTodoBtn(e))}>Add Todo</button>
      {tasks.map(task => (
          <div key={task.id} className='items-center text-center justify-center flex mt-8 '>
          <input type="checkbox" className='cursor-pointer' onClick={() => todoCompleted(task.id)} />
          <div className='ml-2' style={{'textDecoration': task.isCompleted ? 'line-through': 'none'}}>{task.title}</div>
          <VscChromeClose className='ml-10 cursor-pointer hover:animate-spin' onClick={() => removeTask(task.id)}/>
        </div>
      ))}
    </div>
  )
}

export default App;

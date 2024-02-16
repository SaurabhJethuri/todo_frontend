import { useEffect, useState } from 'react'
import Todo from './Components/Todo'

import { addToDo, getAllToDo, updateTodoo, deleteTodoo } from './utils/HandleApi'


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoID] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateTodo = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoID(_id)
  }

  return (
    <div
      className="flex flex-wrap flex-col items-center w-full my-4">
      <h1
        className='text-3xl font-bold'>
        Todo App by Saurabh
      </h1>
      <div
        className='flex gap-4 mt-10 w-[80%] justify-center'>
        <input
          className='text-center w-[60%] rounded'
          type="text"
          placeholder='Add todos....'
          value={text}
          onChange={(e) => setText(e.target.value)} />
        <button
          className='bg-indigo-500 w-20 h-10 rounded'
          onClick={isUpdating ?
            () => updateTodoo(toDoId, text, setToDo, setText, setIsUpdating)
            : () => addToDo(text, setText, setToDo)}
        >
          {isUpdating ? "Update" : "Add"}

        </button>
      </div>

      {toDo.map((item) => <Todo key={item._id} text={item.text}
        updateTodo={() => {
          updateTodo(item._id, item.text)
        }}
        deleteTodo={() => deleteTodoo(item._id, setToDo)}

      />)}



    </div >
  )
}

export default App

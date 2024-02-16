import React from 'react'

const Todo = ({ text, updateTodo, deleteTodo }) => {
    return (
        <div className=' md:mt-10 mt-16 flex  flex-col md:flex-row w-[54.5%] h-10'>
            <div className='md:w-[80%] w-[100%] bg-green-400 text-center rounded-xl   py-2'>{text}</div>
            <div className=' justify-center gap-2 flex text-center mx-2 mt-4 md:mt-0  '>
                <button className='bg-indigo-500 w-20 h-10 rounded-xl ' onClick={updateTodo}>update</button>
                <button className='bg-red-400 w-20 h-10 rounded-xl ' onClick={deleteTodo}>delete</button>
            </div>
        </div>
    )
}

export default Todo
import React from 'react'
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ text, updateMode, deleteTodo }) => {
    return (
        <div className='bg-black text-white mt-3 w-[30%] m-auto flex justify-between h-14 rounded-md items-center pr-6 pl-6'>
            <div>{text}</div>
            <div className='flex space-x-2'>
                <BiEdit className='text-xl cursor-pointer' onClick={updateMode}/>
                <AiFillDelete className='text-xl cursor-pointer' onClick={deleteTodo}/>
            </div>
        </div>
    )
}

export default Todo

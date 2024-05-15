import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import { AddTodo, getAllTodo, updateTodo, deleteTodo } from './utils/HandleApi';

function App() {
  const [todo, setTodo] = useState([]);
  const [text,setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id,text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  }

  return (
    <div>
      <div>
        <h1 className='text-center text-4xl font-bold mb-5'>Todo App</h1>
        <div className='text-center border-b border-black w-96 m-auto p-2'>
          <input 
          type="text" 
          placeholder='Add todos...' 
          className='outline-none' 
          value = {text}
          onChange={(e) => setText(e.target.value)}
          />
          <button className='bg-black text-white text-sm p-2 w-14' onClick={isUpdating? () => updateTodo(todoId, text, setTodo, setText,setIsUpdating) :() => AddTodo(text,setText,setTodo)}>
            {isUpdating? "Update": "Add"}
            </button>
        </div>
        <div>
          {todo
          .map((item) =>
           <Todo key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteTodo={() => deleteTodo(item._id,setTodo)}/>)}
        </div>
      </div>
    </div>
  )
}

export default App

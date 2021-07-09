import { div } from 'prelude-ls'
import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCirceleLine} from 'react-icons/ri'

function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
     
    return Todo.map((todo, index) => ( 
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row' }
        key={index}
        >
            <div key={todo.id} onClick={() =. completeTodo(todo.id)}>
            {todo.text}
            </div>
            <div className="icons">
                <RiCloseCirceleLine />
                <TiEdit />
            </div>



            </div>
    ))
}

export default Todo

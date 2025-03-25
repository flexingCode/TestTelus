import { createContext, useContext, useState } from "react"

type ITodo = {
    id:string,
    name:string
}
type TodoConext = {
    todos:ITodo[],
    addTodoTask:(value:ITodo) => void
    removeTodoTask:(value:ITodo) => void
}


const TodoContext = createContext<TodoConext>({
    todos:[],
    addTodoTask:()=>{},
    removeTodoTask:()=>{}
})

const TodoProvider = ({children}:{children:React.ReactNode})=>{
    const [todos,setTodos] = useState<ITodo[]>([])

    const addTodo=(todo:ITodo)=>{
        setTodos(prev=>([...prev,todo]))
    }

    const removeTodo=(todo:ITodo)=>{
        const filteredTodo = todos.filter(it => it.id !== todo.id)
        setTodos(filteredTodo)
    }

    return(
        <TodoContext.Provider value={{
            todos,
            addTodoTask:addTodo,
            removeTodoTask:removeTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodo = () =>{
    return useContext(TodoContext)
}

export {TodoProvider, useTodo}
import { useState } from "react";

export default function ToDoList() {

    const [todoList,setTodoList] =useState([])
    const [todo,setTodo] = useState("")


    function handleTodo(event){

        setTodo(event.target.value)
    }

    function handleTodoList(){
        
        setTodoList([...todoList,todo])
        setTodo("")
    }

    function handleDelete(index){
        setTodoList(todoList.filter((_,i) => i!==index))
    }

    function moveUp(index){
        if(index>0){
            const updatedTodoList= [...todoList]
            let temp = updatedTodoList[index]
            updatedTodoList[index]=updatedTodoList[index-1]
            updatedTodoList[index-1]=temp

            setTodoList(updatedTodoList)

        }
    }

    function moveDown(index){
        if(index< todoList.length){
            const updatedTodoList= [...todoList]
            let temp = updatedTodoList[index]
            updatedTodoList[index]=updatedTodoList[index+1]
            updatedTodoList[index+1]=temp

            setTodoList(updatedTodoList)

        }
    }

    return( 
    
    <div className="todo-main">

        <h1>TODO LIST </h1>
        <div>
        <input type="text" value={todo} onChange={handleTodo} placeholder="Enter a Task.." />
        
        <button className="add-btn" onClick={handleTodoList} > Add item </button>
        </div>

        <ul className="list">
            {todoList.map((element,index) =>
            <li className="list-item" key={index}> <span className="text">{element}</span> 
            <button className="delete-btn" onClick={() => handleDelete(index)}>  Delete </button>
            <button className="move-btn" onClick={() => moveUp(index)}>Move up</button>
            <button className="move-btn" onClick={() => moveDown(index)}>Move down</button>

            </li> )}

        </ul>
        

    </div> 
    
     
)
}
import Item from "./Item";
function TODOList({todos}){
    return (
        <ol className="todo_list">{
            todos && todos.length>0?(todos?.map((item,index)=> <Item key={index} item={item}/>)):
            (<p>No tasks in the task list</p>)
        }</ol>
    )
}

export default TODOList;
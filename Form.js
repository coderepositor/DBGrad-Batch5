function Form(){
    const handleSubmit = (event) =>{
        event.preventDefault();
        event.target.reset();
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input type="text"
                name ="todo"
                id="todo"
                placeholder="Enter your task"/>
            </label>
            <button type="submit">
                <span className="visually-hidden">
                 Create Task</span>
            </button>
        </form>
    )
}

export default Form
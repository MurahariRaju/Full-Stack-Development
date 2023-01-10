const todos=[]

// add data in todo

function createNewTodo(text){
    const todo={
        text:text,
        inCompleted: false,

    };
// push method
    todos.push(todo)
}
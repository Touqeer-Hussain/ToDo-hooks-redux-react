const addTodo = (todo) => {
    console.log('action', todo)
    return {
        type: 'addTodo',
        payload: todo
    }
}

const editTodo = (todo) => {
    return {
        type: 'editTodo',
        payload: todo
    }
}

const deleteTodo = (id) => {
    return {
        type: 'deleteTodo',
        payload: id
    }
}

export default {
    addTodo,
    editTodo,
    deleteTodo
}
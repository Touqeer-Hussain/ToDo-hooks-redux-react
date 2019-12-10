const addTodo = (todo) => {
    console.log('action', todo)
    return {
        type: 'addTodo',
        payload: todo
    }
}

const editTodo = (id) => {
    return {
        type: 'editTodo',
        payload: id
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
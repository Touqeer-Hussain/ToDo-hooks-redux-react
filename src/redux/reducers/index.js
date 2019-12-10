import { combineReducers } from 'redux'

const initialState = {
    todo: []
}

const todo = (state = initialState, action) => {

    switch (action.type) {
        
        case "addTodo":
                console.log('reducer', action.payload, state)
                
            return { ...state, todo: state.todo.concat(action.payload) }  
            
        case "editTodo":
                return  action.payload
            
            
        case "deleteTodo":
                return  action.payload
            
            
    
        default:
                return {
                    ...state
                }
            
                  
            
    }
}


const rootReducer = combineReducers({
    todo
})

export default rootReducer

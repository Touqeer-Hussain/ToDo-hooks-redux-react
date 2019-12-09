import { combineReducers } from 'redux'


const todo = (state = {}, action) => {

    switch (action.type) {
        
        case "addTodo":
                console.log('addTodo', action.payload)
            return  {
                ...state,
                todo: action.payload,
            }
                
            
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

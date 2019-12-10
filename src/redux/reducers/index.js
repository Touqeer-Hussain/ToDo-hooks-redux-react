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
                state.todo.filter((value, index) => {
                    if(value.id === action.payload.id){
                            state.todo[index] = {
                                id: action.payload.id,
                                title: action.payload.title,
                                descrip: action.payload.descrip
                            }
                    }
                }) 
                return  { ...state, todo: state.todo}
            
            
        case "deleteTodo":
                
                state.todo.filter((value, index) =>  value.id === action.payload.id && state.todo.splice(index, 1))
                

                return  { ...state, todo: state.todo}
            
            
    
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

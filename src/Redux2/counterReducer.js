 
 const initialState={ value:298,name:'nag'}
export const userReducer3=(state=initialState,action)=>{
 switch(action.type){
    case "INCR":{
        return { ...state,value:state.value+2}
    }
    case "DECR":{
        return {...state,value:state.value-2}
    }
    default:{
        return state
    }
 }
}
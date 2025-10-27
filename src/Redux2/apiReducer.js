const initialState={
    apiArr:[{name:"Nagendra",age:25,email:"nag@gmail.cSom"}],
    loading:false,
    error:null
}

export const apiReducer=(state=initialState,action)=>{
 switch(action.type){
    case "Loading2":{
        return {...state,loading:true}
    }
    case "Success":{
        return {...state,loading:false, apiArr:[...state.apiArr,...action.payload]}
    }
    case 'Fail':{
        return {...state,loading:false,error:action.payload}
    }
    default :
    return state
 }
}
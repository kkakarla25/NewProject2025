const initialState={
    count1:120,
    arrData:[],
    totalCount:0,
}

export const CounterReducer=(state=initialState,action)=>{
    console.log(action)
switch(action.type){
    case 'INCR' :
        return {count1:state.count1+1};
    case 'DECR':
        return{count1:state.count1-1};
    case 'ADDTOCART':
        console.log('1st count',state.totalCount)
        //state.totalCount=Number(state.totalCount)+1;
        //console.log('2nd count',state.totalCount)
        let existingItem= state.arrData.find((item)=>item.id===action.payload.id);
        
        if(existingItem){
            return{
                ...state,
                totalCount:state.totalCount+1,
                arrData:state.arrData.map((item)=>item.id===action.payload.id ? {...item,quantity:item.quantity+1}:item)
            }
        }
        else{
            return{
                ...state,
                totalCount:state.totalCount+1,
                arrData:[...state.arrData,{...action.payload,quantity:1}]
            }
        }
    
    case 'REMOVE':
        let existingItem2=state.arrData.find((item)=>item.id===action.payload.id)
        if(existingItem2&&existingItem2.quantity>1){
            return {
                ...state,
                totalCount:state.totalCount-1,
                arrData:state.arrData.map((item)=>item.id===action.payload.id? {...item,quantity:item.quantity-1}:item )
            }
        }
        else{
            
        let filterData=state.arrData.filter((item)=>item.id!==action.payload.id)
        return{
            ...state,
            totalCount:state.totalCount-1,
            arrData:filterData
        }
    }
    case 'CLEARITEM':
      let findElement=state.arrData.find((item)=>item.id===action.payload.id)
      if(!findElement){
        return state
      }
      else{
        return{
            arrData:state.arrData.filter((item)=>item.id!==action.payload.id),
            totalCount:state.totalCount-findElement.quantity
        }
      }
    ;
    default:
        return state
}
}



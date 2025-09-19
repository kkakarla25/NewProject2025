  const initialState={
    apiData:"HelloNagendra",
    apiArr:[],
    loading:false,
    searchItem:'Nagendra'
  }

export const ApiReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'loading':{
            return{
                loading:true
            }
        };
        case 'Search':{
        return{
            ...state,
          searchItem:action.payload
        }

        }
        case'FetchData':{
            return{
                ...state,
                loading:false,
                apiArr:action.payload
            }
        }
        default:
            return state;

    }
}
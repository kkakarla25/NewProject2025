import {screen} from '@testing-library/react'
import App from './App'
import { ApiReducer } from './Redux/ApiReducer'
import { CounterReducer } from './Redux/CounterReducer'

describe("CounterReducer test case",()=>{
  const initialState={
     count1:120,
    arrData:[],
    totalCount:0,
  }
  it('First test case To find the',()=>{
    const newItem= CounterReducer(undefined,{})
    expect(newItem).toEqual(initialState)

  })
  it ("Second test case",()=>{
    const sampleData=[{name:"Durga",age:45,city:'Ganapavaram' }]
    const action={type:"ADDTOCART",payload:sampleData}
     const reduxItem=CounterReducer(initialState,action)
     expect(reduxItem).toEqual({
      ...initialState,
      totalCount:1,
      arrData:[{...sampleData,quantity:1}]
     })
  })
  it("ThirdCase",()=>{
    const stateWithItems={
      ...initialState,
      totalCount:1,
      arrData:[{id:1,name:"Vamsi",age:27,city:'Hyderabad',quantity:2}]
    }
    const action={type:"ADDTOCART",payload:{id:1,name:"Vamsi",age:27,city:"Hyderabad"}}
    const reduxItem=CounterReducer(stateWithItems,action)
    expect(reduxItem).toEqual({
      ...initialState,
      totalCount:2,
      arrData:[{id:1,name:"Vamsi",age:27,city:'Hyderabad',quantity:3}]
    })
  })
  it ("FourthCase",()=>{
    const sampleData4={id:1,name:"Ram",age:28,city:"Bengaluru"}
  const action={type:"ADDTOCART",payload:sampleData4}
  const newItem4=CounterReducer(initialState,action)
  expect(newItem4).toEqual({
    ...initialState,
    totalCount:1,
    arrData:[{...sampleData4,quantity:1}]
  })
  })
  it('fifthCase',()=>{
    const StateWithProps4={
      ...initialState,
      totalCount:2,
      arrData:[
        {id:1,name:"Nagendra",age:26,city:"Hyderabad",quantity:1},
        {id:2,name:"Kumar",age:26,city:"Hyderabad2",quantity:1},
      ]
    }
    const actions={type:"ADDTOCART",payload:{id:1,name:"Nagendra",age:26,city:"Hyderabad"}}
    const newItem5=CounterReducer(StateWithProps4,actions)
    expect(newItem5).toEqual({
      ...initialState,
      totalCount:3,
      arrData:[{id:1,name:"Nagendra",age:26,city:"Hyderabad",quantity:2},
        {id:2,name:"Kumar",age:26,city:"Hyderabad2",quantity:1},]
    })
  })
  it("SixthRemove Test case",()=>{
    const stateWithItems6={
      ...initialState,
      totalCount:1,
      arrData:[{id:1,name:"Nagendra",age:26}]
    }
    const action={type:"REMOVE",payload:{id:1}}
    const reducerItem6=CounterReducer(stateWithItems6,action)
    expect(reducerItem6).toEqual({
      ...initialState,
      totalCount:0,
      arrData:[]
    })
  })
  it("Seventh Removecase",()=>{
    const statewithProps7={
      ...initialState,
      totalCount:2,
      arrData:[{id:1,name:"Vamsi",age:27,quantity:2}]
    }
    const action7={type:"REMOVE",payload:{id:1}}
    const ReducerItem7=CounterReducer(statewithProps7,action7)
    expect(ReducerItem7).toEqual({
      ...initialState,
      totalCount:1,
      arrData:[{id:1,name:"Vamsi",age:27,quantity:2}]
    })
  })
  
})

/* import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore } from 'redux';

import { ApiReducer } from './Redux/ApiReducer';
import { CounterReducer } from './Redux/CounterReducer';

describe('Reduxstore codes',()=>{
 const initialState={
    apiData:"HelloNagendra",
    apiArr:[],
    loading:false,
    searchItem:''
  
 }
 it ("First storeCase",()=>{
  expect(ApiReducer(undefined,{})).toEqual(initialState)
 });
 it('SecondTestCase',()=>{
  expect(ApiReducer(undefined,{})).toEqual(initialState)
});
it('ThirdTestCase',()=>{
  const action={type:'loading'}
  const newData= ApiReducer(initialState,action)
  const expectdState=({
    ...initialState,
    loading:true,
  })
  expect(newData).toEqual(expectdState)
})
it('Fourth testcase',()=>{
 const action={type:'Search',payload:"ReactFullStack"}
 const newItem=ApiReducer(initialState,action)
 expect(newItem.searchItem).toEqual('ReactFullStack')
 expect(newItem.apiArr).toEqual([])
})
it ('fifthCase',()=>{
  const mockData=[{id:1,name:"Nagendra",age:26}]
  const name=mockData[0].name
  const action={type:'FetchData',payload:mockData}
  const newItem2=ApiReducer(initialState,action)
  expect(newItem2.apiArr).toBe(mockData)
  //expect(newItem2[0]?.name).toBe("Nagendra")

})
it('Sixthcase',()=>{
  const action={type:"UNKNOWN"}
  const newItem3=ApiReducer(initialState,action)
  expect(newItem3).toEqual(initialState)
})


});
describe('Counter Reducer test cases',()=>{
 const initialState2={
  count1:120,
    arrData:[],
    totalCount:0,
 }
 
 it('first Test case2',()=>{
  
  const findItem= CounterReducer(undefined,{})
  expect(findItem).toEqual(initialState2)
 })
 it('Second testcase',()=>{
  const sampleData={name:"Nagendra",age:25}
  const action={type:'ADDTOCART',payload:sampleData}
  const newItem=CounterReducer(initialState2,action)
  expect(newItem).toEqual({
    ...initialState2,
    totalCount:1,
    arrData:[{...sampleData,quantity:1}]
  })
 })
 it('Third case',()=>{
  const stateWithItems={
    ...initialState2,
    totalCount:2,
    arrData:[{id:1,name:"nagendra",age:25,quantity:2}]
  }
  const action={type:'REMOVE',payload:{id:1}}
  const newitem=CounterReducer(stateWithItems,action)
  expect(newitem).toEqual({
    ...initialState2,
    totalCount:1,
    arrData:[{id:1,name:'nagendra',age:25,quantity:1}]

  })
 })
 it('fouth',()=>{
  const stateWithProps2={
    ...initialState2,
    totalCount:2,
    arrData:[{id:1,name:'kumar',age:26,quantity:1}]
  }
  const action={type:'REMOVE',payload:{id:1}}
  const newItem4=CounterReducer(stateWithProps2,action)
  expect(newItem4).toEqual({
    ...initialState2,
    totalCount:1,
    arrData:[]
  })
 })
 it("fifth Case",()=>{
  const stateWithItem5={
    ...initialState2,
    totalCount:2,
    arrData:[{id:1,name:'Rajendra',age:27,quantity:2}]
  }
  const action={type:'REMOVE',payload:{id:250}}
  const newItem5=CounterReducer(stateWithItem5,action)
 expect(newItem5).toEqual(stateWithItem5)
 })
 

 
})

 */
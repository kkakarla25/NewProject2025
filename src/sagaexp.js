import {call,put,takeLatest} from 'redux-saga/effects'
import { Login,Sucess,Fail } from './Redux2/Action'
function* sagaExp(){
    yield put ({type:'loading'})
    try{
        const response= yield call(fetch,'https://jsonplaceholder.typicode.com/users')
    const result=yield response.json()
    yield put({type:'Success',payload:result})
    }
    catch(err){
        yield put ({type:'Error',payload:err.message})
    }

}
 export default  function* sagaUser(){
    yield takeLatest('Loading2',sagaExp)
 }
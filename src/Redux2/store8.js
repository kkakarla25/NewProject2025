import {createStore,applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { userReducer3 } from './counterReducer'
import { apiReducer } from './apiReducer'
import sagaUser from '../sagaexp'
import rootSaga from '../rootSaga'

const sagaFun=createSagaMiddleware()
const rootReducer=combineReducers({
    api:apiReducer,
    counter:userReducer3
})


  const store6=createStore(rootReducer,applyMiddleware(sagaFun))
  sagaFun.run(rootSaga)
  export default store6


 
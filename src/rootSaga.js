 import sagaUser from "./sagaexp";
 import { all } from "redux-saga/effects";
 
 export default function* rootSaga(){
    yield all([sagaUser()])
 }
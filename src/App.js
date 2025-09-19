import React from 'react'
import { useSelector,useDispatch,connect } from 'react-redux'
import LayoutPage from './Pages/LayoutPage'

const App = (props) => {
  const storeData=useSelector((state)=>state.count1)
  const dispatch=useDispatch()
  const arrData=useSelector((state)=>state.arrData)
  console.log(arrData)
  console.log("ConnectState",props.state3)
  return (
    <div>
      <h3>Hello World!   </h3>
      <LayoutPage/>
      <p>Count:{storeData}</p>
      <button onClick={()=>dispatch({type:'INCR'})}>+</button>
      <button onClick={()=>dispatch({type:'DECR'})}>-</button>
      <div>
        <button onClick={props.increment}>++</button>
        <button onClick={props.decrement}>--</button>
      </div>
    </div>
  )
}

const mapStateToProps=(state3)=>{
  return {state3:state3.count1}
}
const mapDispatchToProps=(dispatch)=>{
  return{
    increment:()=>dispatch({type:'INCR'}),
  decrement:()=>dispatch({type:"DECR"})
  }

}
export default connect(mapStateToProps,mapDispatchToProps) (App)

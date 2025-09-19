import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Header = () => {
  const arrData=useSelector((state)=>state.count.arrData)
  const serchData=useSelector((state)=>state.api.searchItem)
  console.log("SearchData",serchData)
  const totalCount5=useSelector((state)=>state.count.totalCount)
  const apiData=useSelector((state)=>state.api.apiData)
  const apiArr=useSelector((state)=>state.api.apiArr)
  console.log('apiData',apiData)
  console.log("Total",totalCount5)
  const dispatch=useDispatch()
  const [show,setShow]=useState(true)
  const deleteHandler=(id3)=>{
    dispatch({type:'REMOVE',payload:id3})
  }
  const filterData=!serchData?apiArr:apiArr?.filter((item)=>item.title.toLowerCase().includes(serchData.toLowerCase()))
  console.log("filtr",filterData)
  return (
    <div style={{border:"2px solid red",display:'flex',justifyContent:'space-between',textAlign:'center',alignItems:'center',padding:'10px'}}>
      <h3> My OWN CART</h3>
      <div>
        <input type='search' name='serchData' value={serchData} onChange={(e)=>dispatch({type:'Search',payload:e.target.value})}/>
        
        <button>SearchHere for Your wish </button>
        {serchData}
      </div>
      <div style={{display:'flex',gap:'10px',alignItems:'center',paddingRight:'15px'}}>
        <p>PAYMENT TOTAL</p>
         <b onClick={()=>setShow(!show)}>Cart({totalCount5})</b>


          <div style={{position:'absolute',top:'140px',right:'20px',backgroundColor:'#44f4bb'}}>
           {show&&arrData.map((item)=>{
          return(
            <div style={{display:'flex',alignItems:'center',gap:'5px',border:'2px solid red ',width:'250px',height:'100px'}}>
              <img src={item.images} alt={item.name} style={{width:'90px',height:'60px'}}/>
              <div style={{width:'50px',fontSize:'10px',marginBotton:'5px'}}>
                <p>{item.title}</p>
                <b>RS:{item.price}</b>
              </div>
              <button style={{width:"40px",height:'30px',color:'red',background:'green'}} onClick={()=>dispatch({type:"ADDTOCART",payload:item})}>+</button>
              <p style={{border:'2px solid green',borderRadius:'30px',width:"40px", backgroundColor:"#ff9f5f",color:'blue'}} onClick={()=>dispatch({type:'REMOVE',payload:item})}>{item.quantity}</p>
              <button style={{width:"40px",height:'30px',color:'red',background:'blue'}} onClick={()=>{dispatch({type:'REMOVE',payload:item})}} disabled={item.quantity===0}>-</button>
              <button style={{width:"40px",height:'30px',color:'green',background:'red',marginRight:'5px'}} onClick={()=>dispatch({type:"CLEARITEM",payload:item})} >X</button>

            </div>
          )
         })}
        </div>
         
        
      </div>
    </div>
  )
}

export default Header

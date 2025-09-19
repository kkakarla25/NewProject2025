import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

const SideBar2 = () => {
    const data=useSelector((state)=>state.api.apiArr)
    const serachData=useSelector((state)=>state.api.searchItem)
    console.log("SideSearch",serachData)
    console.log("newArrData5282",data)
    const dispatch=useDispatch()
    const totalCount=useSelector((state)=>state.count.totalCount)
    const arrData2=useSelector((state)=>state.count.arrData)
    const quantityData=(id2)=>{
      const value=arrData2.find((item)=>item.id===id2)
      return value?value.quantity:0
    }
    console.log("quantity",quantityData?.quantity)
    
    console.log("SideTotal",totalCount)
    console.log("SideData",data)
   const filterData=!serachData ? data :data?.filter((item)=>item.title.toLowerCase().includes(serachData.toLowerCase()))
   console.log('SideFilter',filterData)
    const fetchData=async()=>{
        const response=await fetch('https://dummyjson.com/products')
        const result=await response.json()
        console.log("result",result)
        const newData=result.products
        console.log("newData",newData)
        dispatch({type:'FetchData',payload:newData})
        /* console.log("Products",result.products)
        setData(result.products) */

    }
    useEffect(()=>{fetchData()},[])
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(4 ,1fr)',gridTemplateRows:'repeat(8, 1fr)',gap:'10px',margin:'20px'}}>
      {filterData?.map((item)=>{
        return(
            <div key={item.id} style={{border:'2px solid red',width:'250px',backgroundColor:'white',padding:'10px',alignItems:'center',textAlign:'center'}}>
                <img className="img3"src={item.images} alt='image' style={{width:'200px',height:'150px',hover:'250px'}}/>
                <h3>{item.title}</h3>
                <p>RS. {item.price}</p>
                <button onClick={()=>{dispatch({type:'ADDTOCART',payload:item})}} >+</button>
                   <div>
                      <button  disabled={quantityData(item.id)===0} onClick={()=>{dispatch({type:'REMOVE',payload:item})}}>-</button>
                      <div>
                       <button onClick={()=>{dispatch({type:"ADDTOCART",payload:item})}}  >ADDTOCART</button>
                    </div>  
                    </div>

                  
            </div>
      )
      })}
    </div>
  )
}

export default SideBar2

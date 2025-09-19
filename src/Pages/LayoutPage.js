import React from 'react'
import SideBar2 from './SideBar2'
import Header from './Header'

const LayoutPage = () => {
  return (
    <div style={{border:'2px solid red'}}>
      
      <div>
        <Header/>
      </div>
      <h4>Sidebar</h4>
      <div>
        <SideBar2/>
      </div>
    </div>
  )
}

export default LayoutPage

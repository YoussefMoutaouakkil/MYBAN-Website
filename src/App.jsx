import React from 'react'
import MainHeader from './Screens/Header/MainHeader'
import MainMid from './Screens/Mid/MainMid'
import MainFooter from './Screens/Footer/MainFooter'


export default function App() {
  return (
    <div style={{backgroundColor:'black',color:"white",fontFamily:"Inter"}}>
      <MainHeader/>
      <MainMid/>
      <MainFooter/>
    </div>
  )
}

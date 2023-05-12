import React, { useState } from 'react'
import './index.css'
function Index() {
    const [count,setCount] = useState(0)
  return (
    <div style={{textAlign:'center',marginTop:'250px'}}>
      <h1 >The Button Has Clicked <br/>
      <span className= {count >0 ? "head" : ""}>{count}</span> times
      </h1>
      <p>Click the button to increase the count!</p>
      <button onClick={()=>setCount(count+1)} className='button'>Click Me!</button>
    </div>
  )
}

export default Index

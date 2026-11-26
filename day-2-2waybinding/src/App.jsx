import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [info, setinfo] = useState([]);

  
  const submithandler = (e)=>{
    e.preventDefault()
    console.log({name,age})
    const updatedinfo = [...info,{name,age}]
    setinfo(updatedinfo)
    console.log(updatedinfo)

  }

  
  return (
    <div>
      <div>
        <form onClick={submithandler} >
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text"  value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter name" />
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" value={age} onChange={(e)=>setage(e.target.value)} placeholder="Enter age" />
          </div>

          <button  type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
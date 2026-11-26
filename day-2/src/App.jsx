import React, { useState } from 'react'
import Card from "./components/Card"
const App = () => {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [postData, setpostData] = useState([{
    id:1,
    name:"Alex Morgan",
    description:"A curious designer who loves building thoughtful digital experiences and sharing ideas with the community.",
    likes:likes,
    dislikes:dislikes
  },{
    id:2,
    name:"John Doe",
    description:"A passionate developer who enjoys creating innovative solutions and collaborating with others.",
    likes:likes,
    dislikes:dislikes
  }
]);

 function like(id)
 {
  setpostData((prev)=>prev.map((data)=> data.id === id ? {...data,likes:data.likes+1}:data))
 }


 function dislike(id)
 {
  setpostData((prev)=>prev.map((data)=> data.id === id && data.likes>=1 ?{...data,likes:data.likes-1}:data))
 }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <Card likeid={like} dislikeid={dislike} likes={likes} dislikes={dislikes} setLikes={setLikes} setDislikes={setDislikes} data={postData}/>
    </div>
  )
}

export default App

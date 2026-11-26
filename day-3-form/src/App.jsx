import React, { useEffect, useState } from 'react'
import Card from './component/Card';

const App = () => {
  
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [editinfo, setEditInfo] = useState(null);
  const [data, setData] = useState(JSON.parse(localStorage.getItem("info"))|| []);

  useEffect(()=>{
    localStorage.setItem("info",JSON.stringify(data))
  },[data])

  const deleteHandler =(idx)=>{

    const copydata = [...data]
    copydata.splice(idx,1)
    setData(copydata)
  }

  const editHandler =(idx)=>{
    setTitle(data[idx].title)
    setDesc(data[idx].desc)
    setEditInfo(idx)
  }

  const submitHandler =(e) =>{
    e.preventDefault()
    
    if(editinfo !==null)
    {
      const copydata = [...data]
      copydata[editinfo] = {title,desc}
      setData(copydata)
      setEditInfo(null)
      
    }else{
      const arrdata = [...data,{title,desc}]

    setData(arrdata)
    }

    

    setTitle('')
    setDesc('')
  }
  return (
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
  <h2 class="text-xl font-semibold text-gray-800 mb-5">Create New Item</h2>
  
  <form onSubmit={submitHandler} class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
      <input 
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        type="text" 
        placeholder="Enter title" 
        class="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
      <input 
        value={desc}
        onChange={(e)=>{setDesc(e.target.value)}}
        type="text" 
        placeholder="Enter description" 
        class="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition"
      />
    </div>

    <button 
      type="submit" 
      class="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium rounded-lg shadow-sm transition duration-150 ease-in-out cursor-pointer"
    >
      Submit
    </button>
  </form>

  <Card data={data} deleteHandler={deleteHandler} editHandler={editHandler}/>
</div>

  )
}

export default App
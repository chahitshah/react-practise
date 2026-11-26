import React from 'react'

const Card = ({ data}) => {
  return (
     data.map((dataitems)=>{
        return (
            <div className='bg-slate-600 w-[300px] h-[300px] m-auto mt-10 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
            <p>{dataitems.name}</p>
        <img src={dataitems.image} alt="" />
        <p>{dataitems.paragraph}</p>
        </div>

        <div className='flex items-center justify-center gap-4 mt-4'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Likeee kareeee</button>
            <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'>aeee aaaaa oooo oooo oiiiii</button>
        </div>

    </div>
        )
    })
  )
}

export default Card
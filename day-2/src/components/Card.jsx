import { useState } from 'react'

const Card = ({ likeid,dislikeid,likes, dislikes, setLikes, setDislikes,data }) => {
  

  return (
    data.map((info)=>{
        return(
        
        <article key={info.id} className="w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <div className="h-28 bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-400" />
      <div className="px-7 pb-7">
        <div className="-mt-12 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-violet-100 text-4xl shadow-md" aria-label="Profile photo">
          👩🏻‍💻
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">{info.name}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {info.description}
        </p>

        <div className="mt-6 rounded-2xl bg-slate-50 px-5 py-4 text-center">
          <p className="text-2xl font-bold text-slate-900">{info.likes + info.dislikes}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">Likes Count</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={()=>{likeid(info.id)}}
            className="rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
            //aria-label={`Like, ${likes} likes`}
          >
            👍 Like <span className="ml-1 text-violet-200">{}</span>
          </button>
          <button
            type="button"
            onClick={()=>dislikeid(info.id)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            //aria-label={`Dislike, ${dislikes} dislikes`}
          >
            👎 Dislike <span className="ml-1 text-slate-400">{}</span>
          </button>
        </div>
      </div>
    </article>)
    })
  )
}

export default Card

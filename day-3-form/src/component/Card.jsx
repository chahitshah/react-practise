import React from 'react'

const Card = ({ data ,deleteHandler , editHandler }) => {
    return (
        data.map((info, idx) => {
            return (
                <div key={idx} className="max-w-sm mx-auto bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                        <span className="inline-block px-2.5 py-0.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-3">
                            Featured
                        </span>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {info.title}
                        </h3>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            {info.desc}
                        </p>

                        <div className="mt-4 flex gap-2">
                            <button onClick={()=>editHandler(idx)} className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition cursor-pointer">
                                Edit
                            </button>

                            <button onClick={()=>deleteHandler(idx)} className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition cursor-pointer">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Card

import React from 'react'

function Cards() {

    const handleDeleteRepo = () => {
        console.log('delete');
    }
  return (
    <div className="w-full bg-slate-200 rounded-lg shadow-lg max-w-3xl items-center">
        <ul className="divide-y-2 divide-gray-200">
            <li className="flex justify-between p-3 rounded-md">
                <div>
                    <div className=''>Facebook</div>
                    <div className='text-2xl'>React-native</div>
                </div>
                <button 
                className="flex-shrink-0 bg-zinc-500 hover:bg-zinc-700 border-zinc-500 hover:border-zinc-700 text-sm border-4 text-white py-1 px-2 rounded" 
                onClick={handleDeleteRepo}
                >
                    Apagar
                </button>
            </li>
        </ul>
    </div>


  )
}

export default Cards
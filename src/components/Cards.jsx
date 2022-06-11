import React from 'react'

function Cards({ onDeleteRepo, repositories }) {

  return (
    <div className="w-full bg-slate-200 rounded-lg shadow-lg max-w-3xl items-center">
        <ul className="divide-y-2 divide-gray-200">
            
               {repositories.map(repository => (
                <li className="flex justify-between p-3 rounded-md" key={repository._id} >
                    <div>
                        <div className='mb-2'>
                            {repository.name.substring(0, repository.name.indexOf('/'))}
                        </div>
                        <div className='text-2xl font-thin'>
                            {repository.name.substring(repository.name.indexOf('/') + 1)}
                        </div>
                    </div>
                    <button 
                    className="flex-shrink-0 bg-zinc-500 hover:bg-zinc-700 border-zinc-500 hover:border-zinc-700 text-sm border-4 text-white py-1 px-2 rounded" 
                    onClick={() => onDeleteRepo()}
                    >
                        Apagar
                    </button>
                </li>
                ))}

                
        </ul>
    </div>


  )
}

export default Cards
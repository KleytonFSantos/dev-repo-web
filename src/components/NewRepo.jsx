import React from 'react'

function NewRepo() {
    const handleNewRepo = () => {
        console.log('new repo');
    }

  return (
    <>
        <form className="flex max-w-3xl items-center justify-center my-8 mx-auto p-2">
            <div className="flex w-full items-center border-b border-zinc-500 py-2">
                <input 
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                type="text" 
                placeholder="Novo Repo" 
                aria-label="Full name" />
                <button className="flex-shrink-0 bg-zinc-500 hover:bg-zinc-700 border-zinc-500 hover:border-zinc-700 text-sm border-4 text-white py-1 px-2 rounded" type="button"
                onClick={handleNewRepo}
                >
                Adicionar
                </button>
            </div>
        </form>
    </>
  )
}

export default NewRepo
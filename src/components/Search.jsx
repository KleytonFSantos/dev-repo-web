import React from 'react'

function Search() {

    const handleSearch = () => {
        console.log('clear', query);
    }

    const handleClear = () => {
        console.log('query');
    }


  return (
    <>
        <form className="flex max-w-3xl items-center justify-center my-8 mx-auto p-2">
            <div className="flex w-full items-center border-b border-zinc-500 py-2">
                <input 
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                type="text" 
                placeholder="Procurar" 
                aria-label="Full name" />
                <button className="flex-shrink-0 bg-zinc-500 hover:bg-zinc-700 border-zinc-500 hover:border-zinc-700 text-sm border-4 text-white py-1 px-2 rounded" type="button"
                onClick={handleSearch}
                >
                Procurar
                </button>
                <button className="flex-shrink-0 border-transparent border-4 text-zinc-500 hover:text-zinc-800 text-sm py-1 px-2 rounded" 
                type="button"
                onClick={handleClear}
                >
                Limpar
                </button>
            </div>
        </form>
    </>
  )
}

export default Search;
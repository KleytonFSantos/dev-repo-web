import React, { useState } from 'react'

function Search({ onSearch }) {

    const [query, setQuery] = useState<string>('');

    const handleClear = () => {
        setQuery('');
    }

  return (
    <>
        <form className="flex max-w-3xl items-center justify-center my-8 mx-auto p-2">
            <div className="flex w-full items-center border-b border-zinc-500 py-2">
                <input 
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:ring-current" 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Procurar" 
                aria-label="Full name" />
                <button className="flex-shrink-0 bg-zinc-500 hover:bg-zinc-700 border-zinc-500 hover:border-zinc-700 text-sm border-4 text-white py-1 px-2 rounded" type="button"
                onClick={() => onSearch(query)}
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
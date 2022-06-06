import React from 'react';
import Cards from '../../components/Cards';

const MainPage = () => {

    const handleLogout = () => {
        console.log('logout');
    }

    const handleSearch = () => {
        console.log('clear', query);
    }

    const handleClear = () => {
        console.log('query');
    }

    return (
        <div id='main' className='items-center'>
            <div className='flex align-center bg-slate-50 p-2 border-b-2'>
                <h1 className='flex-1 text-base m-0'> Repo Room</h1>
                <button onClick={handleLogout}>Sair</button>
            </div>

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
            <div className='flex-1 mb-1 items-center my-8 mx-auto flex flex-col gap-4 max-w-2xl p-2'>
                < Cards />
                < Cards />    
                < Cards />            
                < Cards />            
        
            </div>

            <form className="flex max-w-3xl items-center justify-center my-8 mx-auto p-2">
                <div className="flex w-full items-center border-b border-zinc-500 py-2">
                    <input 
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Novo Repo" 
                    aria-label="Full name" />
                    <button className="flex-shrink-0 bg-zinc-500 hover:bg-zinc-700 border-zinc-500 hover:border-zinc-700 text-sm border-4 text-white py-1 px-2 rounded" type="button"
                    onClick={handleSearch}
                    >
                    Adicionar
                    </button>

                </div>
            </form>
        </div>
    );
}

export default MainPage;
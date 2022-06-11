import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../components/Cards';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';

import { listRepositories, createRepository, destroyRepository } from '../../services/api';

const userId = '629be7119a57d0dcac7674b1';

const MainPage = () => {

    const [repositories, setRepositories] = useState([]);
    const [loadingError, setLoadingError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [ url, setUrl] = useState('');

    const loadData = async (query = '') => {
       try{
        setLoading(true);

        const response = await listRepositories(userId, query);

        setRepositories(response.data);
        setLoading(false);
       } catch(err){
        setLoadingError(err.response.statusText);
        console.err(err.data)
        setLoadingError(true)
       } 

    }

    useEffect(() => {

        (async () => loadData())();
        
    }, []);

    const handleSearch = (query) => {     
        loadData(query);
    }

    const handleLogout = () => {
        console.log('logout');
    }
    
    const handleDeleteRepo = async (repository) => {
        try {
            console.log('delete repo', repository)
            await destroyRepository(userId, repository._id);
            await loadData();
        } catch(err) {
            console.log(err);
            setLoadingError(true);
        }
    }

    const handleNewRepo =  async (url) => {
        console.log('url', url);
        try{
             await createRepository(userId, url)
             await loadData();
         } catch(err){
             console.error('error creating repository', err)
             setLoadingError(true);
         } 
    }

    if (loadingError) {
        return <div className='w-full h-screen flex justify-center items-center'> Erro ao carregar os dados de repositório. <Link className="text-red-600" to="/login">Voltar!</Link></div>
    }

    if (loading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }



    return (
        <div id='main' className='items-center'>
            <Navbar onLogout={handleLogout}/>
            
            <Search onSearch={handleSearch}/>
            
            <div className='flex-1 mb-1 items-center my-8 mx-auto flex flex-col gap-4 max-w-2xl p-2'>
                <Cards  repositories={repositories} onDeleteRepo={() => handleDeleteRepo(userId)}/>
            </div>

            <form className="flex max-w-3xl items-center justify-center my-8 mx-auto p-2">
            <div className="flex w-full items-center border-b border-zinc-500 py-2">
                <input 
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                type="text" 
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Novo Repo" 
                aria-label="Full name" />
                <button className="flex-shrink-0 bg-zinc-500 hover:bg-zinc-700 border-zinc-500 hover:border-zinc-700 text-sm border-4 text-white py-1 px-2 rounded" type="button"
                onClick={() => handleNewRepo(url)}
                >
                Adicionar
                </button>
            </div>
        </form>
        </div>
    );
}

export default MainPage;
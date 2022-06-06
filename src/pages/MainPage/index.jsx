import React from 'react';
import Cards from '../../components/Cards';
import Navbar from '../../components/Navbar';
import NewRepo from '../../components/NewRepo';
import Search from '../../components/Search';

const MainPage = () => {

    return (
        <div id='main' className='items-center'>
            <Navbar />
            
            <Search />
            
            <div className='flex-1 mb-1 items-center my-8 mx-auto flex flex-col gap-4 max-w-2xl p-2'>
                < Cards />
                < Cards />    
                < Cards />            
                < Cards />            
            </div>

            <NewRepo />
        </div>
    );
}

export default MainPage;
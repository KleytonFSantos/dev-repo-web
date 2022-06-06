import React from 'react'

function Navbar() {

    const handleLogout = () => {
        console.log('logout');
    }

  return (
    <>
        <div className='flex align-center bg-slate-50 p-2 border-b-2'>
                <h1 className='flex-1 text-base m-0'> Repo Room</h1>
                <button onClick={handleLogout}>Sair</button>
        </div>

    </>
  )
}

export default Navbar;
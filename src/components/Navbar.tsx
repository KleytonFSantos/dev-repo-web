import React from 'react'

export type Props = {
    onLogout: () => void;
}

function Navbar({ onLogout }:Props): JSX.Element {

  return (
    <>
        <div className='flex align-center bg-slate-50 p-2 border-b-2'>
                <h1 className='flex-1 text-base m-0'> Repo Room</h1>
                <button onClick={ onLogout }>Sair</button>
        </div>

    </>
  )
}

export default Navbar;
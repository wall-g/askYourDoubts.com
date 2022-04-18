import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
function index({set, ShowMenu}) {
  return (
    <div className='font-body text-gry max-w-7xl mx-auto grid grid-cols-7 mt-10 p-2 md:p-3'>
        <Sidebar set={set} ShowMenu={ShowMenu}/>
        <Main/>
    </div>
  )
}

export default index
import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
function index() {
  return (
    <div className='font-body text-gry max-w-7xl mx-auto grid grid-cols-7 mt-10'>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default index
import React from 'react'
import Sidebar from '../Forum/Sidebar'
import Question from '../Question/Question'
function index() {
  return (
    <div className='font-body text-gry max-w-7xl mx-auto grid grid-cols-7 mt-10'>
        <Sidebar/>
        <Question/>
    </div>
  )
}

export default index
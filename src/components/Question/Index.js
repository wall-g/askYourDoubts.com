import React from 'react'
import Sidebar from '../Forum/Sidebar'
import Question from '../Question/Question'
function index({set, ShowMenu}) {
  return (
    <div className='font-body text-gry max-w-7xl mx-auto grid grid-cols-7 mt-10 p-2 md:p-3'>
        <Sidebar set={set} ShowMenu={ShowMenu}/>
        <Question/>
    </div>
  )
}

export default index
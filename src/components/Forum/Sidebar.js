import React from 'react'

function Sidebar() {
  return (
      <div className='text-sm h-screen border-r-2 border-slate-300'>
          <h3 className='text-txt'>Home</h3>

          <h3 className='mt-4'>PUBLIC</h3>
          <ul>
              <li className='mt-1'><i className="fa fa-question text-primary"></i> Questions</li>
              <li className='mt-1'>Tags</li>
              <li className='mt-1'>Users</li>
          </ul>

          <h3 className='mt-4'>COMPETE</h3>
          <ul>
              <li className='mt-1'><i className="fa fa-bullseye text-primary"></i> Explore Challenges</li>
          </ul>

          <h3 className='mt-4'>FIND A JOB</h3>
          <ul>
              <li className='mt-1'><i className="fa fa-globe text-primary"></i> Jobs</li>
              <li className='mt-1'>Companies</li>
          </ul>
      </div>
  )
}

export default Sidebar
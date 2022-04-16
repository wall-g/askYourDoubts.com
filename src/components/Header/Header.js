import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='h-16 grid grid-cols-7 py-4 max-w-7xl mx-auto'>
        <div className='left-header'>
          <Link to='/'>
            <h2 className='text-l font-body text-primary font-semibold'> askyour<span className='text-txt'>doubts.com</span></h2>
          </Link>
        </div>

        <div className="center-header col-span-4">
            <input
            type="search"
            className="
                form-control
                block
                w-full
                px-3
                py-1
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-gry focus:outline-none
            "
            id="exampleSearch"
            placeholder="Search"
            />
        </div>
        <div className='right-header'>

        </div>
    </div>
  )
}

export default Header
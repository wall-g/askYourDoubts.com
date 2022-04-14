import React from 'react'
function Header() {
  return (
    <div className='h-16 grid grid-cols-3 py-3 max-w-7xl mx-auto'>
        <div className='left-header'>
            <h2 className='text-xl font-body text-[#7E7E7E] font-semibold'><i className="fa fa-code text-primary"></i> Ask&Solve</h2>
        </div>
        <div className="center-header xl:w-100">
            <input
            type="search"
            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-[#7E7E7E] focus:outline-none
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
import React from 'react'
import { Link } from "react-router-dom";
function Question() {
  return (
    <div className='col-span-6 ml-6 font-body'>
        <div className='flex justify-between'>
            <h1 className='text-2xl text-txt'>How to use drag and drop in ant design?</h1>
            <Link to="/add-question" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Ask Question
            </Link>
        </div>

        <div className='flex gap-8'>
          <p className='text-xs text-gry'>Asked<span className='text-txt'> today</span></p>
          <p className='text-xs text-gry'>Modified<span className='text-txt'> today</span></p>
          <p className='text-xs text-gry'>Viewed<span className='text-txt'> 23 times</span></p>
        </div>

        <div className='flex mt-4 border-t-2 border-slate-300 pt-2 gap-2'>
          <div className='justify-self-end text-sm text-center'>
            <p className='mt-1'>▲</p>
            <p className='mt-1'>0</p>
            <p className='mt-1'>▼</p>
            <i className="fa fa-bookmark text-sm mt-1"></i>
          </div>

          <div className='ml-3'>
            <h3 className='text-blue-500 font-medium'>How to use drag and drop in ant design?</h3>
            <p className='mt-2 text-txt text-sm tracking-wide'>Am writing code to split seconds into years, days, minutes, seconds. 
            I'm getting some unexpected results: eg 3600 seconds comes out as 1 hour. But 3599 seconds comes out as 60 minutes and 59 seconds.
            Firstly, there should never be 60 minutes. This should be 1 hour. But that aside the actual result is wrong.
            Is there some error in my calculation logic, or is there a funky rounding error going on using modulo and Math.floor? Thanks!</p>

            <div className='grid grid-cols-2 mt-2'>
              <div>
                <button class="bg-blue-200 text-blue-800  px-3 py-1 rounded text-xs">CSS</button>
                <button class="bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">HTML</button>
                <button class="bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">Javascript</button>
              </div>
              <div className='justify-self-end text-xs text-blue-800 bg-blue-100 px-2 py-2 rounded'>
                <p><i className="fa fa-user text-sm"></i> username <span className='text-gry'> timespan</span></p>
              </div>
            </div>

          </div>

        </div>
    </div>
  )
}

export default Question
import React from 'react'
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className='col-span-6 ml-6 font-body'>
        <div className='flex justify-between'>
            <h1 className='text-2xl text-txt'>All Questions</h1>
            <Link to="/add-question" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Ask Question
            </Link>
        </div>

        <div className='grid grid-cols-2 mt-4  pb-3'>
          <p>All question stat</p>
          <div className='justify-self-end'>
            <button class="bg-white text-gry py-2 px-1 text-xs border-2 border-slate-300 rounded-l-0">
                Newest
            </button>
            <button class="bg-white  text-gry py-2 px-1 text-xs border-2 border-slate-300 border-l-0">
                Active
            </button>
            <button class="bg-white  text-gry py-2 px-1 text-xs border-2 border-slate-300 border-l-0 rounded-r">
                More
            </button>
            <button class="bg-blue-200 text-blue-800 border-2 border-blue-800 py-2 px-3 rounded text-xs ml-5"><i className="fa fa-filter"></i> Filter</button>
          </div>
      </div>

      <div className='grid grid-cols-7 mt-4 border-t-2 border-slate-300 pt-2'>
        <div className='justify-self-end text-xs'>
          <p className='mt-1'>0 votes</p>
          <p className='mt-1'>0 answers</p>
          <p className='mt-1'>0 views</p>
        </div>

        <div className='col-span-5 ml-3'>
          <Link to="/question">
            <h3 className='text-blue-500 font-medium'>How to use drag and drop in ant design?</h3>
          </Link>
          <p className='mt-2 text-txt text-sm'>I created a simple circular progress bar and when I wanted to test some of the calculated values I noticed that my stroke-dash* style properties get rounded. Even though I didn't round them in the code</p>

          <div className='grid grid-cols-2 mt-2'>
            <div>
              <button class="bg-blue-200 text-blue-800  px-3 py-1 rounded text-xs">CSS</button>
              <button class="bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">HTML</button>
              <button class="bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">Javascript</button>
            </div>
            <div className='justify-self-end text-xs text-blue-800'>
              <p><i className="fa fa-user text-sm"></i> username <span className='text-gry'> timespan</span></p>
            </div>
          </div>

        </div>
      </div>

      <div className='grid grid-cols-7 mt-4 border-t-2 border-slate-300 pt-2'>
        <div className='justify-self-end text-xs'>
          <p className='mt-1'>0 votes</p>
          <p className='mt-1'>0 answers</p>
          <p className='mt-1'>0 views</p>
        </div>

        <div className='col-span-5 ml-3'>
          <h3 className='text-blue-500 font-medium'>How to use drag and drop in ant design?</h3>
          <p className='mt-2 text-txt text-sm'>I created a simple circular progress bar and when I wanted to test some of the calculated values I noticed that my stroke-dash* style properties get rounded. Even though I didn't round them in the code</p>

          <div className='grid grid-cols-2 mt-2'>
            <div>
              <button class="bg-blue-200 text-blue-800  px-3 py-1 rounded text-xs">CSS</button>
              <button class="bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">HTML</button>
              <button class="bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">Javascript</button>
            </div>
            <div className='justify-self-end text-xs text-blue-800'>
              <p><i className="fa fa-user text-sm"></i> username <span className='text-gry'> timespan</span></p>
            </div>
          </div>

        </div>
      </div>

      <div className='grid grid-cols-7 mt-4 border-t-2 border-slate-300 pt-2'>
        <div className='justify-self-end  text-xs'>
          <p className='mt-1'>0 votes</p>
          <p className='mt-1'>0 answers</p>
          <p className='mt-1'>0 views</p>
        </div>

        <div className='col-span-5 ml-3'>
          <h3 className='text-blue-500 font-medium'>How to use drag and drop in ant design?</h3>
          <p className='mt-2 text-txt text-sm'>I created a simple circular progress bar and when I wanted to test some of the calculated values I noticed that my stroke-dash* style properties get rounded. Even though I didn't round them in the code</p>

          <div className='grid grid-cols-2 mt-2'>
            <div>
              <button class="bg-blue-200 text-blue-800  px-3 py-1 rounded text-xs">CSS</button>
              <button class="bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">HTML</button>
              <button class="bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">Javascript</button>
            </div>
            <div className='justify-self-end text-xs text-blue-800'>
              <p><i className="fa fa-user text-sm"></i> username <span className='text-gry'> timespan</span></p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Main
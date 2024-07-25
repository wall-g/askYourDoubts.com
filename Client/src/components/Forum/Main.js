import React from 'react'
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className='col-span-6 ml-6 font-body md:col-span-7 md:ml-0 md:relative md:z-0'>
        <div className='flex justify-between'>
            <h1 className='l:text-xl text-2xl text-txt md:text-l'>All Questions</h1>
            <Link to="/add-question" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded l:text-sm  sm:px-2 sm:text-xs">
              Ask Question
            </Link>
        </div>

        <div className='flex mt-4  pb-3 justify-between'>
          <p className='sm:text-sm'>All question stat</p>
          <div>
            <button className="l:py-1 bg-white text-gry py-2 px-1 text-xs border-2 border-slate-300 rounded-l-0 rounded-l">
                Newest
            </button>
            <button className="l:py-1 bg-white  text-gry py-2 px-1 text-xs border-2 border-slate-300 border-l-0">
                Active
            </button>
            <button className="l:py-1 bg-white  text-gry py-2 px-1 text-xs border-2 border-slate-300 border-l-0 rounded-r">
                More
            </button>
            <button className="l:py-1 bg-blue-200 text-blue-800 border-2 border-blue-800 py-2 px-3 rounded text-xs ml-3 sm:px-1"><i className="fa fa-filter"></i> Filter</button>
          </div>
      </div>

      <div className='flex mt-4 border-t-2 border-slate-300 pt-2 md:block'>
        <div className='text-xs grow w-20 l:w-24 md:flex md:w-44 md:gap-4'>
          <p className='mt-1'>0 votes</p>
          <p className='mt-1'>0 answers</p>
          <p className='mt-1'>0 views</p>
        </div>

        <div className='ml-3 md:ml-0'>
          <Link to="/question">
            <h3 className='l:text-sm text-blue-500 font-medium'>How to use drag and drop in ant design?</h3>
          </Link>
          <p className='l:text-xs mt-2 text-txt text-sm'>I created a simple circular progress bar and when I wanted to test some of the calculated values I noticed that my stroke-dash* style properties get rounded. Even though I didn't round them in the code</p>

          <div className='flex mt-2 justify-between md:block'>
            <div>
              <button className="l:px-1  bg-blue-200 text-blue-800  px-3 py-1 rounded text-xs">CSS</button>
              <button className="l:px-1 l:ml-2 bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">HTML</button>
              <button className="l:px-1 l:ml-2 bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">Javascript</button>
            </div>
            <div className='justify-self-end text-xs text-blue-800 md:mt-2'>
              <p><i className="fa fa-user text-sm"></i> username <span className='text-gry'> timespan</span></p>
            </div>
          </div>

        </div>
      </div>

      <div className='flex mt-4 border-t-2 border-slate-300 pt-2 md:block'>
        <div className='text-xs grow w-20 l:w-24 md:flex md:w-44 md:gap-4'>
          <p className='mt-1'>0 votes</p>
          <p className='mt-1'>0 answers</p>
          <p className='mt-1'>0 views</p>
        </div>

        <div className='ml-3 md:ml-0'>
          <Link to="/question">
            <h3 className='l:text-sm text-blue-500 font-medium'>How to use drag and drop in ant design?</h3>
          </Link>
          <p className='l:text-xs mt-2 text-txt text-sm'>I created a simple circular progress bar and when I wanted to test some of the calculated values I noticed that my stroke-dash* style properties get rounded. Even though I didn't round them in the code</p>

          <div className='flex mt-2 justify-between md:block'>
            <div>
              <button className="l:px-1  bg-blue-200 text-blue-800  px-3 py-1 rounded text-xs">CSS</button>
              <button className="l:px-1 l:ml-2 bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">HTML</button>
              <button className="l:px-1 l:ml-2 bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">Javascript</button>
            </div>
            <div className='justify-self-end text-xs text-blue-800 md:mt-2'>
              <p><i className="fa fa-user text-sm"></i> username <span className='text-gry'> timespan</span></p>
            </div>
          </div>

        </div>
      </div>

      <div className='flex mt-4 border-t-2 border-slate-300 pt-2 md:block'>
        <div className='text-xs grow w-20 l:w-24 md:flex md:w-44 md:gap-4'>
          <p className='mt-1'>0 votes</p>
          <p className='mt-1'>0 answers</p>
          <p className='mt-1'>0 views</p>
        </div>

        <div className='ml-3 md:ml-0'>
          <Link to="/question">
            <h3 className='l:text-sm text-blue-500 font-medium'>How to use drag and drop in ant design?</h3>
          </Link>
          <p className='l:text-xs mt-2 text-txt text-sm'>I created a simple circular progress bar and when I wanted to test some of the calculated values I noticed that my stroke-dash* style properties get rounded. Even though I didn't round them in the code</p>

          <div className='flex mt-2 justify-between md:block'>
            <div>
              <button className="l:px-1  bg-blue-200 text-blue-800  px-3 py-1 rounded text-xs">CSS</button>
              <button className="l:px-1 l:ml-2 bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">HTML</button>
              <button className="l:px-1 l:ml-2 bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">Javascript</button>
            </div>
            <div className='justify-self-end text-xs text-blue-800 md:mt-2'>
              <p><i className="fa fa-user text-sm"></i> username <span className='text-gry'> timespan</span></p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Main
import {React} from 'react'
function Sidebar({set, ShowMenu}) {
    let Style = `l:text-xs text-sm border-r-2 border-slate-300 md:absolute md:z-10
    md:bg-white md:p-5 md:text-sm md:h-screen md:w-64 md:top-0 md:left-0 md:flex
    md:justify-between md:inset-0 md:transform md:duration-200`;
    if(ShowMenu){
        Style += ' md:translate-x-0 md:ease-in md:opacity-100';
    }else{
        Style += ' md:-translate-x-full md:ease-out md:opacity-0';
    }
    return (
      <div className={Style}>
        <div>
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
        <button className='hidden md:inline-flex' onClick={()=>set()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
      </div>
  )
}

export default Sidebar
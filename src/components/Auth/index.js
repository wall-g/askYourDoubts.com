import {React, useState} from 'react'

function Index() {
  const [Register, setRegister] = useState(false);
  return (
    <>
        <div className='max-w-4xl mx-auto text-center mt-4 text-gry'>
            <h1 className='text-txt text-xl'>Add another way to log in using any of the following services</h1>
            
            <div>
                <button className='text-sm bg-white mt-8 py-2 pr-52 pl-2 rounded shadow-xl'><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='google' className='inline h-7 w-7 mr-2'/>Login with Google</button>
            </div>
            <div>
                <button className='text-sm bg-white mt-2 py-2 pr-52 pl-3 rounded shadow-xl'><img src="https://img.icons8.com/glyph-neue/64/000000/github.png" alt='github' className='inline h-7 w-7 mr-2'/>Login with Github</button>
            </div>
            <div>
                <button className='text-sm bg-white mt-2 py-2 pr-56 pl-2 rounded shadow-xl'><img src="https://img.icons8.com/fluency/48/000000/meta.png" alt='meta' className='inline h-7 w-7 mr-2'/>Login with Meta</button>
            </div>
        </div>
        
        <div className='max-w-sm mx-auto mt-8 p-6 bg-white rounded shadow-xl'>
                {
                    Register ? (
                        <>  
                            <p className='text-txt text-sm  mb-1 font-semibold'>Username</p>
                            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="sentence"></input>
                            <p className='text-txt text-sm  mb-1 font-semibold'>Email</p>
                            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="sentence"></input>
                            <p className='text-txt text-sm  mb-1 font-semibold'>Password</p>
                            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="sentence"></input>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full mt-2">
                                Register
                            </button>
                            <p className='underline text-sm text-blue-600 cursor-pointer text-center mt-2 font-semibold' onClick={() => setRegister(false)}>Login?</p>
                        </>
                    ): (
                        <> 
                            <p className='text-txt text-sm  mb-1 font-semibold'>Email</p>
                            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="sentence"></input>
                            <p className='text-txt text-sm  mb-1 font-semibold'>Password</p>
                            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="sentence"></input>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full mt-2">
                                Login
                            </button>
                            <p className='underline text-sm text-blue-600 cursor-pointer text-center mt-2 font-semibold' onClick={() => setRegister(true)}>Register?</p>
                        </>

                    )
                }
         
        </div>
    </>
  )
}

export default Index
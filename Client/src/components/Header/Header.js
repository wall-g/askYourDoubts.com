import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function Header({ set, isAuthenticated }) {
  const navigate = useNavigate();
  const handleLogout  = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    navigate('/auth')
  }

  return (
    <div className="App bg-secondary shadow-md border-t-2 border-primary antialiased">
      <div className='h-16 flex py-4 max-w-7xl mx-auto px-2 justify-between'>
        <div className='left-header md:flex md:gap-4'>
          <button className='hidden md:inline-flex' onClick={() => set()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link to='/'>
            <h2 className='l:text-sm text-l font-body text-primary font-semibold'> askyour<span className='text-txt'>doubts.com</span></h2>
          </Link>
        </div>

        <div className='right-header'>
          {
            isAuthenticated ? <button onClick={() => handleLogout()} className="bg-txt hover:bg-primary text-white py-2 px-5 rounded l:text-sm sm:text-xs">Logout</button> :
              <Link to="/auth" className="bg-txt hover:bg-primary text-white py-2 px-5 rounded l:text-sm sm:text-xs">
                Login
              </Link>
          }

        </div>
      </div>
    </div>
  )
}

export default Header
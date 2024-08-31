import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { getAccessTocken } from '../utils/common-utils';
import { useState } from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/sidebarContext';
import { toast } from 'react-toastify';
import useSessionStorage from '../hooks/useSessionStorage';


function Header() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { setShowMenu, showMenu } = useContext(SidebarContext);
  const accessTokenStorage = useSessionStorage('accessToken');
  const refreshTokenStorage = useSessionStorage('refreshToken');

  useEffect(() => {
    const isLogin = getAccessTocken();
    (isLogin) ? setIsAuthenticated(true) : setIsAuthenticated(false);
  })

  const handleLogout = () => {
    accessTokenStorage.clearValue();
    refreshTokenStorage.clearValue();
    toast.success('Logout successful!', {
      pauseOnHover: false,
      position: 'top-center',
      closeOnClick: true,
      autoClose: 3000
    });
    navigate('/auth')
  }

  return (
    <div className="App bg-secondary shadow-md border-t-2 border-primary antialiased">
      <div className='h-16 flex py-4 max-w-7xl mx-auto px-2 justify-between'>
        <div className='left-header md:flex md:gap-4'>
          {
            isAuthenticated &&
            <button className='hidden md:inline-flex' onClick={() => setShowMenu(!showMenu)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          }
          <Link to='/'>
            <h2 className='l:text-sm text-l font-body text-primary font-semibold'> askyour<span className='text-txt'>doubts.com</span></h2>
          </Link>
        </div>

        <div className='right-header'>
          {
            isAuthenticated && <button onClick={() => handleLogout()} className="bg-txt hover:bg-primary text-white py-2 px-5 rounded l:text-sm sm:text-xs">Logout</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Header
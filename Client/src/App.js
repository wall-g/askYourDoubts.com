import { Outlet, createBrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Ask from './components/Ask'
import Auth from './components/Auth'
import Error from './components/Error';
import Body from './components/Body';
import QuestionBody from './components/QuestionBody';
import { LoginContext } from './contexts/loginContext';
import { SidebarContext } from "./contexts/sidebarContext";
import { useState } from 'react';
import Protected from "./components/Protected";
import { ToastContainer } from 'react-toastify';


function App() {
  const [userName, setUserName] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ userName: userName, setUserName }}>
        <SidebarContext.Provider value={{ showMenu: showMenu, setShowMenu }}>
          <Header />
          <Protected Component={Outlet}/>
        </SidebarContext.Provider>
      </LoginContext.Provider>
      <ToastContainer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/auth',
        element: <Auth />
      },
      {
        path: '/add-question',
        element: <Ask />
      },
      {
        path: "/question/:id",
        element: <QuestionBody />
      }
    ]

  }
])

export default router;

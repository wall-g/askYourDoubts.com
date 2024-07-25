import { React, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../contexts/loginContext'

const signupInitialValues = {
    username: '',
    email: '',
    password: ''
}

const loginInitialValues = {
    email: '',
    password: ''
}

const SIGNUP_URL = 'http://localhost:8000/signup';
const LOGIN_URL = 'http://localhost:8000/login';

function Index({setIsAuthenticated}) {
    const [Register, setRegister] = useState(false);
    const [Signup, setSignup] = useState(signupInitialValues);
    const [Login, setLogin] = useState(loginInitialValues);
    const navigate = useNavigate();
    const {setUserName} = useContext(LoginContext);

    const onInputChange = (e) => {
        setSignup({ ...Signup, [e.target.name]: e.target.value });
    }

    const onValueChange = (e) => {
        setLogin({ ...Login, [e.target.name]: e.target.value });
    }

    const handleSignup = async () => {
        try {
            await fetch(SIGNUP_URL, {
                method: 'POST',
                body: JSON.stringify(Signup),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = async () => {
        try {
            const response = await fetch(LOGIN_URL, {
                method: 'POST',
                body: JSON.stringify(Login),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            const json = await response.json();
            sessionStorage.setItem('accessToken', `Bearer ${json.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${json.refreshToken}`)
            setIsAuthenticated(true);
            setUserName(json.username);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='max-w-4xl mx-auto text-center mt-4 text-gry'>
                <h1 className='text-txt text-xl'>Add another way to log in using any of the following services</h1>

                <div>
                    <button className='text-sm bg-white mt-8 py-2 pr-52 pl-2 rounded shadow-xl'><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='google' className='inline h-7 w-7 mr-2' />Login with Google</button>
                </div>
                <div>
                    <button className='text-sm bg-white mt-2 py-2 pr-52 pl-3 rounded shadow-xl'><img src="https://img.icons8.com/glyph-neue/64/000000/github.png" alt='github' className='inline h-7 w-7 mr-2' />Login with Github</button>
                </div>
                <div>
                    <button className='text-sm bg-white mt-2 py-2 pr-56 pl-2 rounded shadow-xl'><img src="https://img.icons8.com/fluency/48/000000/meta.png" alt='meta' className='inline h-7 w-7 mr-2' />Login with Meta</button>
                </div>
            </div>

            <div className='max-w-sm mx-auto mt-8 p-6 bg-white rounded shadow-xl'>
                {
                    Register ? (
                        <>
                            <p className='text-txt text-sm  mb-1 font-semibold'>Username</p>
                            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="username" type="sentence" onChange={(e) => onInputChange(e)}></input>
                            <p className='text-txt text-sm  mb-1 font-semibold'>Email</p>
                            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="sentence" onChange={(e) => onInputChange(e)}></input>
                            <p className='text-txt text-sm  mb-1 font-semibold'>Password</p>
                            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" type="sentence" onChange={(e) => onInputChange(e)}></input>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full mt-2" onClick={() => handleSignup()}>
                                Register
                            </button>
                            <p className='underline text-sm text-blue-600 cursor-pointer text-center mt-2 font-semibold' onClick={() => setRegister(false)}>Login?</p>
                        </>
                    ) : (
                        <>
                            <p className='text-txt text-sm  mb-1 font-semibold'>Email</p>
                            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="sentence" onChange={(e) => onValueChange(e)}></input>
                            <p className='text-txt text-sm  mb-1 font-semibold'>Password</p>
                            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" type="sentence" onChange={(e) => onValueChange(e)}></input>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full mt-2" onClick={() => handleLogin()}>
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
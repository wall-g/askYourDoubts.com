import React from 'react'
import { LOGIN_URL } from '../utils/constant';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidation from '../hooks/useValidations';
import { toast } from 'react-toastify';
import useSessionStorage from '../hooks/useSessionStorage';

const loginInitialValues = {
    email: '',
    password: ''
}

function Login({ setRegister, setIsLoading }) {
    const navigate = useNavigate();
    const [Login, setLogin] = useState(loginInitialValues);
    const [formErrors, setFormErrors] = useState({});
    const validate = useValidation();
    const accessTokenStorage = useSessionStorage('accessToken');
    const refreshTokenStorage = useSessionStorage('refreshToken');

    const onValueChange = (e) => {
        setLogin({ ...Login, [e.target.name]: e.target.value });
    }

    const handleLogin = async () => {
        const errors = validate(Login);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setIsLoading(true);
            const response = await fetch(LOGIN_URL, {
                method: 'POST',
                body: JSON.stringify(Login),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const json = await response.json();
            setIsLoading(false);
            if (response.status === 200) {
                accessTokenStorage.setValue(`Bearer ${json.accessToken}`);
                refreshTokenStorage.setValue(`Bearer ${json.refreshToken}`);
                toast.success('Login successful', {
                    pauseOnHover: false,
                    position: 'top-center',
                    closeOnClick: true,
                    autoClose: 3000
                });
                navigate('/');
            } else {
                toast.error('something went wrong', {
                    pauseOnHover: false,
                    position: 'top-center',
                    closeOnClick: true,
                    autoClose: 3000
                });
            }
        }
    }

    return (
        <>
            <p className='text-txt text-sm  mb-1 font-semibold'>Email</p>
            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="sentence" onChange={(e) => onValueChange(e)}></input>
            <p className='text-red-500 text-xs mb-4'>{formErrors.email}</p>
            <p className='text-txt text-sm  mb-1 font-semibold'>Password</p>
            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" type="sentence" onChange={(e) => onValueChange(e)}></input>
            <p className='text-red-500 text-xs mb-4'>{formErrors.password}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full mt-2" onClick={() => handleLogin()}>
                Login
            </button>
            <p className='underline text-sm text-blue-600 cursor-pointer text-center mt-2 font-semibold' onClick={() => setRegister(true)}>Register?</p>
        </>
    )
}

export default Login
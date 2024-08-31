import React from 'react'
import { SIGNUP_URL } from '../utils/constant';
import { useState } from 'react';
import useValidation from '../hooks/useValidations';
import { toast } from 'react-toastify';

const signupInitialValues = {
    username: '',
    email: '',
    password: ''
}

function Signup({ setRegister, setIsLoading }) {
    const [Signup, setSignup] = useState(signupInitialValues);
    const [formErrors, setFormErrors] = useState({});
    const validate = useValidation();

    const handleSignup = async () => {
        const errors = validate(Signup);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            try {
                setIsLoading(true);
                const apiPromise = fetch(SIGNUP_URL, {
                    method: 'POST',
                    body: JSON.stringify(Signup),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }).then((res) => {
                    if (!res.ok) {
                        setIsLoading(false);
                        throw new Error('Something went wrong')
                    }
                    setRegister(false);
                    setIsLoading(false);
                })

                toast.promise(
                    apiPromise,
                    {
                        pending: 'Please wait',
                        success: 'Successfully registered. Please login',
                        error: 'Something went wrong'
                    },
                    {
                        pauseOnHover: false,
                        position: 'top-center',
                        closeOnClick: true,
                        autoClose: 3000
                    }
                );
            } catch (error) {
                setIsLoading(false);
                console.error(error);
            }
        }
    }

    const onInputChange = (e) => {
        setSignup({ ...Signup, [e.target.name]: e.target.value });
    }

    return (
        <>
            <p className='text-txt text-sm  mb-1 font-semibold'>Username</p>
            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="username" type="sentence" onChange={(e) => onInputChange(e)}></input>
            <p className='text-red-500 text-xs mb-4'>{formErrors.username}</p>
            <p className='text-txt text-sm  mb-1 font-semibold'>Email</p>
            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="sentence" onChange={(e) => onInputChange(e)}></input>
            <p className='text-red-500 text-xs mb-4'>{formErrors.email}</p>
            <p className='text-txt text-sm  mb-1 font-semibold'>Password</p>
            <input className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-2 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" type="sentence" onChange={(e) => onInputChange(e)}></input>
            <p className='text-red-500 text-xs mb-4'>{formErrors.password}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full mt-2" onClick={() => handleSignup()}>
                Register
            </button>
            <p className='underline text-sm text-blue-600 cursor-pointer text-center mt-2 font-semibold' onClick={() => setRegister(false)}>Login?</p>
        </>
    )
}

export default Signup
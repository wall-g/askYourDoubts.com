import { React, useState } from 'react'
import Signup from './Signup';
import Login from './Login';
import Loading from './Loader';

function Auth() {
    const [Register, setRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    return (
        isLoading ?
            <Loading /> :
            <>
                <div className='max-w-sm mx-auto p-6 bg-white rounded shadow-xl mt-28'>
                    {
                        Register ? <Signup setRegister={setRegister} setIsLoading={setIsLoading} /> : <Login setRegister={setRegister} setIsLoading={setIsLoading} />
                    }

                </div>
            </>
    )
}

export default Auth